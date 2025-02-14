"use client";

import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getFirestore, collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { getAuth, signOut, onAuthStateChanged, User } from "firebase/auth";
import { app } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { Loader2, LogOut, ChevronDown, UserCircle, Mail } from "lucide-react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const db = getFirestore(app);
const auth = getAuth(app);

interface Contact {
  id: string;
  name: string;
  email: string;
  company?: string;
  phone: string;
  message: string;
  createdAt: string;
}

export default function AdminPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push("/admin-login");
      } else {
        setUser(currentUser);
      }
    });
    return () => unsubscribeAuth();
  }, [router]);

  useEffect(() => {
    if (user) {
      const q = query(collection(db, "contacts"), orderBy("createdAt", "desc"));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const contactsData: Contact[] = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Contact[];
        setContacts(contactsData);
        setLoading(false);
      });
      return () => unsubscribe();
    }
  }, [user]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/admin-login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1f36] to-[#111827] flex flex-col items-center p-6">
      
      {/* Header Section with Proper Spacing */}
      <div className="w-full max-w-6xl bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg flex flex-col sm:flex-row justify-between items-center mt-6">
        <h1 className="text-3xl font-bold text-white mb-4 sm:mb-0">Admin Dashboard</h1>

        {/* User Profile Dropdown (Properly Lowered & Responsive) */}
        {user && (
          <Menu as="div" className="relative w-full sm:w-auto mt-2 sm:mt-0"> 
            <MenuButton className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition">
              <UserCircle className="h-7 w-7 text-white" />
              <span className="text-white text-sm truncate">{user.email}</span>
              <ChevronDown className="text-white h-5 w-5" />
            </MenuButton>
            <MenuItems className="absolute right-0 mt-2 w-48 bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
              <MenuItem>
                {({ active }) => (
                  <button
                    onClick={handleLogout}
                    className={`w-full text-left px-4 py-3 flex items-center gap-2 ${
                      active ? "bg-gray-700" : ""
                    }`}
                  >
                    <LogOut size={18} />
                    Logout
                  </button>
                )}
              </MenuItem>
            </MenuItems>
          </Menu>
        )}
      </div>

      {/* Contact Submissions Section with More Space Below Profile */}
      <div className="w-full max-w-6xl mt-10 bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
          <Mail className="text-red-400 h-6 w-6" /> Contact Submissions
        </h2>

        {/* Loading Indicator */}
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="animate-spin text-white h-8 w-8" />
          </div>
        ) : contacts.length === 0 ? (
          <p className="text-gray-300 text-center py-4">No submissions found.</p>
        ) : (
          <div className="rounded-lg shadow-md border border-gray-700 w-full">
            <Table className="w-full border border-gray-700 text-white text-sm">
              <TableHeader className="bg-gray-900">
                <TableRow>
                  <TableHead className="p-4 text-left font-semibold">Name</TableHead>
                  <TableHead className="p-4 text-left font-semibold">Email</TableHead>
                  <TableHead className="p-4 text-left font-semibold">Company</TableHead>
                  <TableHead className="p-4 text-left font-semibold">Phone</TableHead>
                  <TableHead className="p-4 text-left font-semibold">Message</TableHead>
                  <TableHead className="p-4 text-left font-semibold">Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="divide-y divide-gray-700 bg-gray-800">
                {contacts.map((contact) => (
                  <TableRow key={contact.id} className="hover:bg-gray-700 transition">
                    <TableCell className="p-4 font-medium">{contact.name}</TableCell>
                    <TableCell className="p-4">{contact.email}</TableCell>
                    <TableCell className="p-4">{contact.company || "-"}</TableCell>
                    <TableCell className="p-4">{contact.phone || "-"}</TableCell>
                    <TableCell className="p-4">{contact.message}</TableCell>
                    <TableCell className="p-4">{new Date(contact.createdAt).toLocaleDateString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
}
