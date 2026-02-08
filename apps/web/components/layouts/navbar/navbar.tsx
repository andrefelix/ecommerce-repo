"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Poppins } from "next/font/google";
import { MenuIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import NavbarSidebar from "./navbar-sidebar";
import { NavbarItem } from "./types";
import { navBarItems } from "./constants";

function NavBarItems({ href, children, isActive }: NavbarItem) {
  return (
    <Button
      asChild
      variant="outline"
      className={
        cn(
          "bg-transparent hover:bg-transparent rounded-full hover:border-primary hover:text-primary border-transparent px-3.5 text-lg",
          isActive && "bg-black text-white hover:bg-black hover:text-white"
        )
      }
    >
      <Link href={href}>
        {children}
      </Link>
    </Button>
  );
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

function Navbar() {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="h-20 flex justify-between border-b font-medium bg-white">
      <Link href="/" className="pl-6 flex items-center">
        <span className={cn("text-xl5 font-semibold", poppins.className)}>
          MyCro
        </span>
      </Link>

      <NavbarSidebar items={navBarItems} open={isSidebarOpen} onOpenChange={setIsSidebarOpen} />

      <div className="items-center gap-4 hidden lg:flex">
        {navBarItems.map((item) => (
          <NavBarItems key={item.href} href={item.href} isActive={pathname === item.href}>
            {item.children}
          </NavBarItems>
        ))}
      </div>

      <div className="hidden lg:flex">
        <Button
          asChild
          variant="secondary"
          className="border-l border-t-0 border-r-0 border-b-0 px-12 h-full rounded-none bg-white hover:bg-pink-400 transition-colors text-lg"
        >
          <Link href="/login">
            Login
          </Link>
        </Button>
        <Button
          asChild
          className="border-l border-t-0 border-r-0 border-b-0 px-12 h-full rounded-none bg-black text-white hover:bg-pink-400 hover:text-black transition-colors text-lg"
        >
          <Link href="/signup">
            Sign Up
          </Link>
        </Button>
      </div>

      <div className="flex lg:hidden items-center justify-center">
        <Button
          variant="ghost"
          className="size-12 border-transparent bg-white"
          onClick={() => setIsSidebarOpen(true)}
        >
          <MenuIcon />
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
