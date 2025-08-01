"use client";

import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getFirestore, collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { getAuth, signOut, onAuthStateChanged, User } from "firebase/auth";
import { app } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { 
  Loader2, 
  LogOut, 
  ChevronDown, 
  UserCircle, 
  Mail, 
  Shield, 
  Users, 
  Calendar, 
  Eye, 
  EyeOff,
  Search,
  BarChart3,
  Phone,
  Building,
  Bell,
  List,
  Menu
} from "lucide-react";
import { Menu as HeadlessMenu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
  const [searchTerm, setSearchTerm] = useState("");
  const [showMessage, setShowMessage] = useState<{ [key: string]: boolean }>({});
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('table');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (contact.company && contact.company.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const toggleMessage = (id: string) => {
    setShowMessage(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const getStats = () => {
    const total = contacts.length;
    const thisMonth = contacts.filter(contact => {
      const contactDate = new Date(contact.createdAt);
      const now = new Date();
      return contactDate.getMonth() === now.getMonth() && contactDate.getFullYear() === now.getFullYear();
    }).length;
    const withCompany = contacts.filter(contact => contact.company).length;
    const withPhone = contacts.filter(contact => contact.phone).length;

    return { total, thisMonth, withCompany, withPhone };
  };

  const stats = getStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-5 sm:top-20 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-5 sm:top-40 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-1/4 sm:bottom-20 w-64 h-64 sm:w-80 sm:h-80 bg-green-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Mobile-First Header */}
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/10 dark:bg-slate-800/10 border-b border-white/20 dark:border-slate-700/50 pt-20 sm:pt-24 lg:pt-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
              {/* Logo & Title - Mobile Optimized */}
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex items-center justify-center rounded-full bg-blue-500/20 p-1.5 sm:p-2">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-400" />
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-sm sm:text-lg lg:text-xl xl:text-2xl font-bold text-white">Admin Dashboard</h1>
                  <p className="text-xs sm:text-sm text-slate-300">SR IT Support Services</p>
                </div>
                <div className="sm:hidden">
                  <h1 className="text-sm font-bold text-white">Admin</h1>
                  <p className="text-xs text-slate-300">Dashboard</p>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="flex items-center gap-2 sm:gap-3">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-slate-300 hover:text-white p-2 sm:p-3"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>

                {/* Desktop User Menu */}
                <div className="hidden sm:flex items-center gap-3">
                  <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
                    <Bell className="w-4 h-4" />
                  </Button>
                  <HeadlessMenu as="div" className="relative">
                    <MenuButton className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg transition-all duration-200">
                      <UserCircle className="w-5 h-5 text-white" />
                      <span className="text-white text-sm hidden lg:block truncate max-w-32">{user?.email}</span>
                      <ChevronDown className="w-4 h-4 text-white" />
                    </MenuButton>
                    <MenuItems className="absolute right-0 mt-2 w-48 bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 rounded-xl shadow-2xl overflow-hidden">
                      <MenuItem>
                        {({ active }) => (
                          <button
                            onClick={handleLogout}
                            className={`w-full text-left px-4 py-3 flex items-center gap-2 transition-colors ${
                              active ? "bg-slate-100 dark:bg-slate-700" : ""
                            }`}
                          >
                            <LogOut className="w-4 h-4" />
                            <span className="text-slate-700 dark:text-slate-300">Logout</span>
                          </button>
                        )}
                      </MenuItem>
                    </MenuItems>
                  </HeadlessMenu>
                </div>

                {/* Mobile User Menu */}
                <div className="sm:hidden">
                  <HeadlessMenu as="div" className="relative">
                    <MenuButton className="flex items-center gap-1 bg-white/10 hover:bg-white/20 px-2 py-1.5 rounded-lg transition-all duration-200">
                      <UserCircle className="w-4 h-4 text-white" />
                      <ChevronDown className="w-3 h-3 text-white" />
                    </MenuButton>
                    <MenuItems className="absolute right-0 mt-2 w-40 bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 rounded-xl shadow-2xl overflow-hidden">
                      <MenuItem>
                        {({ active }) => (
                          <button
                            onClick={handleLogout}
                            className={`w-full text-left px-3 py-2 flex items-center gap-2 text-sm transition-colors ${
                              active ? "bg-slate-100 dark:bg-slate-700" : ""
                            }`}
                          >
                            <LogOut className="w-3 h-3" />
                            <span className="text-slate-700 dark:text-slate-300">Logout</span>
                          </button>
                        )}
                      </MenuItem>
                    </MenuItems>
                  </HeadlessMenu>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Mobile-First Main Content */}
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          {/* Stats Cards - Mobile First Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
            <Card className="backdrop-blur-xl bg-white/10 dark:bg-slate-800/10 border border-white/20 dark:border-slate-700/50 p-3 sm:p-4">
              <CardHeader className="pb-1 sm:pb-2 p-0">
                <CardTitle className="text-xs sm:text-sm font-medium text-slate-300">Total</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="flex items-center gap-1 sm:gap-2">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                  <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{stats.total}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-xl bg-white/10 dark:bg-slate-800/10 border border-white/20 dark:border-slate-700/50 p-3 sm:p-4">
              <CardHeader className="pb-1 sm:pb-2 p-0">
                <CardTitle className="text-xs sm:text-sm font-medium text-slate-300">This Month</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="flex items-center gap-1 sm:gap-2">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                  <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{stats.thisMonth}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-xl bg-white/10 dark:bg-slate-800/10 border border-white/20 dark:border-slate-700/50 p-3 sm:p-4">
              <CardHeader className="pb-1 sm:pb-2 p-0">
                <CardTitle className="text-xs sm:text-sm font-medium text-slate-300">Company</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="flex items-center gap-1 sm:gap-2">
                  <Building className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                  <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{stats.withCompany}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-xl bg-white/10 dark:bg-slate-800/10 border border-white/20 dark:border-slate-700/50 p-3 sm:p-4">
              <CardHeader className="pb-1 sm:pb-2 p-0">
                <CardTitle className="text-xs sm:text-sm font-medium text-slate-300">Phone</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="flex items-center gap-1 sm:gap-2">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
                  <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{stats.withPhone}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Controls - Mobile First */}
          <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6 mb-6">
            {/* Search - Full Width on Mobile */}
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                type="text"
                placeholder="Search contacts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/10 dark:bg-slate-800/10 border-white/20 dark:border-slate-700/50 text-white placeholder-slate-400 h-10 sm:h-11"
              />
            </div>

            {/* View Toggle - Stacked on Mobile */}
            <div className="flex gap-2 w-full sm:w-auto">
              <Button
                variant={viewMode === 'table' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('table')}
                className="flex-1 sm:flex-none bg-blue-500 hover:bg-blue-600 text-white h-10 sm:h-9"
              >
                <List className="w-4 h-4 mr-1 sm:mr-0" />
                <span className="sm:hidden">Submissions</span>
              </Button>
              <Button
                variant={viewMode === 'cards' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('cards')}
                className="flex-1 sm:flex-none bg-blue-500 hover:bg-blue-600 text-white h-10 sm:h-9"
              >
                <BarChart3 className="w-4 h-4 mr-1 sm:mr-0" />
                <span className="sm:hidden">Analytics</span>
              </Button>
            </div>
          </div>

          {/* Content - Mobile Optimized */}
          {loading ? (
            <div className="flex justify-center items-center py-12 sm:py-16 lg:py-20">
              <div className="flex flex-col items-center gap-3 sm:gap-4">
                <Loader2 className="animate-spin text-blue-400 h-6 w-6 sm:h-8 sm:w-8" />
                <p className="text-slate-300 text-sm sm:text-base">Loading submissions...</p>
              </div>
            </div>
          ) : filteredContacts.length === 0 ? (
            <Card className="backdrop-blur-xl bg-white/10 dark:bg-slate-800/10 border border-white/20 dark:border-slate-700/50">
              <CardContent className="flex flex-col items-center justify-center py-8 sm:py-12">
                <Mail className="w-8 h-8 sm:w-12 sm:h-12 text-slate-400 mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">No submissions found</h3>
                <p className="text-slate-400 text-center text-sm sm:text-base">
                  {searchTerm ? 'No contacts match your search criteria.' : 'No contact submissions yet.'}
                </p>
              </CardContent>
            </Card>
          ) : viewMode === 'cards' ? (
            /* Cards View - Mobile First Grid */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
              {filteredContacts.map((contact) => (
                <Card key={contact.id} className="backdrop-blur-xl bg-white/10 dark:bg-slate-800/10 border border-white/20 dark:border-slate-700/50 hover:bg-white/20 transition-all duration-200">
                  <CardHeader className="pb-2 sm:pb-3 p-3 sm:p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-white text-sm sm:text-base lg:text-lg truncate">{contact.name}</CardTitle>
                        <CardDescription className="text-slate-300 flex items-center gap-1 mt-1 text-xs sm:text-sm truncate">
                          <Mail className="w-3 h-3 flex-shrink-0" />
                          <span className="truncate">{contact.email}</span>
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="text-xs flex-shrink-0">
                        {new Date(contact.createdAt).toLocaleDateString()}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2 sm:space-y-3 p-3 sm:p-4 pt-0">
                    {contact.company && (
                      <div className="flex items-center gap-2 text-xs sm:text-sm">
                        <Building className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400 flex-shrink-0" />
                        <span className="text-slate-300 truncate">{contact.company}</span>
                      </div>
                    )}
                    {contact.phone && (
                      <div className="flex items-center gap-2 text-xs sm:text-sm">
                        <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400 flex-shrink-0" />
                        <span className="text-slate-300 truncate">{contact.phone}</span>
                      </div>
                    )}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-medium text-slate-300">Message</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleMessage(contact.id)}
                          className="text-slate-400 hover:text-white p-1 h-6 w-6 sm:h-8 sm:w-8"
                        >
                          {showMessage[contact.id] ? <EyeOff className="w-3 h-3 sm:w-4 sm:h-4" /> : <Eye className="w-3 h-3 sm:w-4 sm:h-4" />}
                        </Button>
                      </div>
                      {showMessage[contact.id] && (
                        <p className="text-xs sm:text-sm text-slate-300 bg-white/5 p-2 sm:p-3 rounded-lg">
                          {contact.message}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            /* Table View - Mobile Responsive */
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <div className="backdrop-blur-xl bg-white/20 dark:bg-slate-700/50 border-2 border-white/30 dark:border-slate-600/50 rounded-xl shadow-2xl min-w-full">
                <Table>
                  <TableHeader>
                    <TableRow className="border-white/30 dark:border-slate-600/50 bg-white/10 dark:bg-slate-800/20">
                      <TableHead className="text-white font-bold text-xs sm:text-sm p-2 sm:p-4">Name</TableHead>
                      <TableHead className="text-white font-bold text-xs sm:text-sm p-2 sm:p-4">Email</TableHead>
                      <TableHead className="text-white font-bold text-xs sm:text-sm p-2 sm:p-4 hidden sm:table-cell">Company</TableHead>
                      <TableHead className="text-white font-bold text-xs sm:text-sm p-2 sm:p-4 hidden lg:table-cell">Phone</TableHead>
                      <TableHead className="text-white font-bold text-xs sm:text-sm p-2 sm:p-4">Message</TableHead>
                      <TableHead className="text-white font-bold text-xs sm:text-sm p-2 sm:p-4">Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="divide-y divide-white/20 dark:divide-slate-600/50">
                    {filteredContacts.map((contact) => (
                      <TableRow key={contact.id} className="hover:bg-white/15 dark:hover:bg-slate-700/30 transition-colors bg-white/5 dark:bg-slate-800/10">
                        <TableCell className="text-white font-semibold p-2 sm:p-4 text-xs sm:text-sm">{contact.name}</TableCell>
                        <TableCell className="text-slate-200 p-2 sm:p-4 text-xs sm:text-sm">{contact.email}</TableCell>
                        <TableCell className="text-slate-200 p-2 sm:p-4 text-xs sm:text-sm hidden sm:table-cell">{contact.company || "-"}</TableCell>
                        <TableCell className="text-slate-200 p-2 sm:p-4 text-xs sm:text-sm hidden lg:table-cell">{contact.phone || "-"}</TableCell>
                        <TableCell className="text-slate-200 p-2 sm:p-4 text-xs sm:text-sm">{contact.message}</TableCell>
                        <TableCell className="text-slate-200 p-2 sm:p-4 text-xs sm:text-sm">{new Date(contact.createdAt).toLocaleDateString()}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
