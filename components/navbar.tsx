"use client"

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { cn } from "@/lib/utils";

const routes = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact Us" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur-md shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SR%20IT%20Support%20Services%20Logo-zl5k6e2PQmrpS6kHrg090kx2BfRF8m.png"
            alt="SR IT Support Services"
            width={60}
            height={50}
            className="h-12 w-13"
          />
          <span className="text-xl font-semibold text-white">SR IT Support</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "relative text-white text-lg font-medium hover:text-blue-400 transition-all", 
                pathname === route.href && "text-blue-400"
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Button className="hidden md:inline-flex bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md">
            <Link href="/contact">Get Quote</Link>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button className="md:hidden text-white bg-gray-800 p-2 rounded-lg">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[300px] bg-gray-900 text-white">
              <div className="p-6">
                <Link href="/" className="text-xl font-semibold" onClick={() => setIsOpen(false)}>
                  SR IT Support
                </Link>
              </div>
              <div className="p-6 space-y-4">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className="block text-lg hover:text-blue-400"
                    onClick={() => setIsOpen(false)}
                  >
                    {route.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}