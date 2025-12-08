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
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-5 sm:top-20 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-5 sm:top-40 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-1/4 sm:bottom-20 w-64 h-64 sm:w-80 sm:h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Premium Header */}
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-card/80 border-b border-border shadow-sm pt-20 sm:pt-24 lg:pt-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24 py-4 sm:py-5">
              {/* Logo & Title */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex items-center justify-center rounded-xl bg-primary/10 p-2 sm:p-2.5 shadow-sm">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h1 className="text-base sm:text-xl lg:text-2xl font-bold text-foreground leading-tight">Admin Dashboard</h1>
                  <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">SR IT Support Services</p>
                </div>
              </div>

              {/* User Menu & Actions */}
              <div className="flex items-center gap-2 sm:gap-3">
                <Button variant="ghost" size="sm" className="hidden sm:flex text-muted-foreground hover:text-foreground hover:bg-muted/50">
                  <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
                <HeadlessMenu as="div" className="relative">
                  <MenuButton className="flex items-center gap-2 bg-muted/50 hover:bg-muted px-3 sm:px-4 py-2 rounded-lg transition-all duration-200 border border-border">
                    <UserCircle className="w-5 h-5 text-foreground" />
                    <span className="text-foreground text-sm hidden lg:block truncate max-w-40">{user?.email}</span>
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  </MenuButton>
                  <MenuItems className="absolute right-0 mt-2 w-48 bg-card backdrop-blur-xl border border-border rounded-xl shadow-2xl overflow-hidden z-50">
                    <MenuItem>
                      {({ active }) => (
                        <button
                          onClick={handleLogout}
                          className={`w-full text-left px-4 py-3 flex items-center gap-2 transition-colors ${
                            active ? "bg-muted" : ""
                          }`}
                        >
                          <LogOut className="w-4 h-4" />
                          <span className="text-foreground">Logout</span>
                        </button>
                      )}
                    </MenuItem>
                  </MenuItems>
                </HeadlessMenu>
              </div>
            </div>
          </div>
        </header>

        {/* Premium Main Content */}
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 max-w-7xl">
          {/* Stats Overview Section */}
          <section className="mb-8 sm:mb-10 lg:mb-12">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-2">Overview</h2>
              <p className="text-sm sm:text-base text-muted-foreground">Key metrics and statistics</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
              <Card className="bg-card/50 backdrop-blur-sm border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/30">
                <CardContent className="p-4 sm:p-5 lg:p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs sm:text-sm font-medium text-muted-foreground">Total Contacts</p>
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">{stats.total}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/30">
                <CardContent className="p-4 sm:p-5 lg:p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs sm:text-sm font-medium text-muted-foreground">This Month</p>
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">{stats.thisMonth}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/30">
                <CardContent className="p-4 sm:p-5 lg:p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Building className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs sm:text-sm font-medium text-muted-foreground">With Company</p>
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">{stats.withCompany}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/30">
                <CardContent className="p-4 sm:p-5 lg:p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs sm:text-sm font-medium text-muted-foreground">With Phone</p>
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">{stats.withPhone}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Controls & Filters Section */}
          <section className="mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-start sm:items-center justify-between">
              <div className="w-full sm:flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search by name, email, or company..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-11 sm:pl-12 bg-background border-border text-foreground placeholder-muted-foreground h-11 sm:h-12 rounded-lg"
                  />
                </div>
              </div>
              <div className="flex gap-2 sm:gap-3 w-full sm:w-auto">
                <Button
                  variant={viewMode === 'table' ? 'default' : 'outline'}
                  size="default"
                  onClick={() => setViewMode('table')}
                  className="flex-1 sm:flex-none bg-primary hover:bg-primary/90 text-primary-foreground h-11 sm:h-12 px-4 sm:px-6"
                >
                  <List className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  <span className="text-sm sm:text-base font-medium">Table View</span>
                </Button>
                <Button
                  variant={viewMode === 'cards' ? 'default' : 'outline'}
                  size="default"
                  onClick={() => setViewMode('cards')}
                  className="flex-1 sm:flex-none bg-primary hover:bg-primary/90 text-primary-foreground h-11 sm:h-12 px-4 sm:px-6"
                >
                  <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  <span className="text-sm sm:text-base font-medium">Card View</span>
                </Button>
              </div>
            </div>
          </section>

          {/* Contacts Section */}
          <section>
            {loading ? (
              <Card className="bg-card/50 border border-border">
                <CardContent className="flex flex-col items-center justify-center py-16 sm:py-20 lg:py-24">
                  <Loader2 className="animate-spin text-primary h-8 w-8 sm:h-10 sm:w-10 mb-4" />
                  <p className="text-muted-foreground text-base sm:text-lg font-medium">Loading submissions...</p>
                </CardContent>
              </Card>
            ) : filteredContacts.length === 0 ? (
              <Card className="bg-card/50 border border-border">
                <CardContent className="flex flex-col items-center justify-center py-12 sm:py-16 lg:py-20">
                  <div className="p-4 rounded-full bg-muted/50 mb-4">
                    <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">No submissions found</h3>
                  <p className="text-muted-foreground text-center text-sm sm:text-base max-w-md">
                    {searchTerm ? 'No contacts match your search criteria.' : 'No contact submissions yet.'}
                  </p>
                </CardContent>
              </Card>
            ) : viewMode === 'cards' ? (
              /* Premium Cards View */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                {filteredContacts.map((contact) => (
                  <Card key={contact.id} className="bg-card/50 border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/30 group">
                    <CardHeader className="pb-3 sm:pb-4 p-4 sm:p-5 lg:p-6">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-base sm:text-lg lg:text-xl font-bold text-foreground mb-2 truncate">{contact.name}</CardTitle>
                          <CardDescription className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Mail className="w-4 h-4 flex-shrink-0 text-primary" />
                            <span className="truncate">{contact.email}</span>
                          </CardDescription>
                        </div>
                        <Badge variant="secondary" className="text-xs flex-shrink-0 bg-muted/50">
                          {new Date(contact.createdAt).toLocaleDateString()}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-5 lg:p-6 pt-0">
                      {contact.company && (
                        <div className="flex items-center gap-2 text-sm">
                          <Building className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground truncate">{contact.company}</span>
                        </div>
                      )}
                      {contact.phone && (
                        <div className="flex items-center gap-2 text-sm">
                          <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground truncate">{contact.phone}</span>
                        </div>
                      )}
                      <div className="pt-2 border-t border-border">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-foreground">Message</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleMessage(contact.id)}
                            className="text-muted-foreground hover:text-foreground h-8 w-8 p-0"
                          >
                            {showMessage[contact.id] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </Button>
                        </div>
                        {showMessage[contact.id] && (
                          <p className="text-sm text-muted-foreground bg-muted/30 p-3 rounded-lg leading-relaxed">
                            {contact.message}
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              /* Premium Table View */
              <Card className="bg-card/50 border border-border shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-border bg-muted/30 hover:bg-muted/30">
                        <TableHead className="text-foreground font-semibold text-sm sm:text-base p-4 sm:p-5">Name</TableHead>
                        <TableHead className="text-foreground font-semibold text-sm sm:text-base p-4 sm:p-5">Email</TableHead>
                        <TableHead className="text-foreground font-semibold text-sm sm:text-base p-4 sm:p-5 hidden sm:table-cell">Company</TableHead>
                        <TableHead className="text-foreground font-semibold text-sm sm:text-base p-4 sm:p-5 hidden lg:table-cell">Phone</TableHead>
                        <TableHead className="text-foreground font-semibold text-sm sm:text-base p-4 sm:p-5">Message</TableHead>
                        <TableHead className="text-foreground font-semibold text-sm sm:text-base p-4 sm:p-5">Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody className="divide-y divide-border">
                      {filteredContacts.map((contact) => (
                        <TableRow key={contact.id} className="hover:bg-muted/30 transition-colors bg-card/30">
                          <TableCell className="text-foreground font-medium p-4 sm:p-5 text-sm sm:text-base">{contact.name}</TableCell>
                          <TableCell className="text-muted-foreground p-4 sm:p-5 text-sm sm:text-base">{contact.email}</TableCell>
                          <TableCell className="text-muted-foreground p-4 sm:p-5 text-sm sm:text-base hidden sm:table-cell">{contact.company || "-"}</TableCell>
                          <TableCell className="text-muted-foreground p-4 sm:p-5 text-sm sm:text-base hidden lg:table-cell">{contact.phone || "-"}</TableCell>
                          <TableCell className="text-muted-foreground p-4 sm:p-5 text-sm sm:text-base max-w-xs truncate">{contact.message}</TableCell>
                          <TableCell className="text-muted-foreground p-4 sm:p-5 text-sm sm:text-base">{new Date(contact.createdAt).toLocaleDateString()}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </Card>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}
