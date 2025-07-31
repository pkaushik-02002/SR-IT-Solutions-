"use client"

import { usePathname } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { RecruitingNavbar } from "@/components/recruiting-navbar"

export function NavbarWrapper() {
  const pathname = usePathname();
  
  if (pathname === '/recruiting') {
    return <RecruitingNavbar />;
  }
  
  return <Navbar />;
} 