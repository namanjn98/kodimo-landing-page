"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "How it works", href: "#how-it-works" },
    { name: "The Secret Sauce", href: "#secret-sauce" },
    { name: "Customers", href: "#customers" },
    { name: "Blog", href: "#blog" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-nav-bg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-[80px]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <Image
            src="/images/kodimo-logo.png"
            alt="Kodimo"
            width={32}
            height={30}
            className="h-[30px] w-[32px]"
          />
          <span className="font-sans text-[26px] font-semibold text-text-primary">
            Kodimo
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center md:flex">
          <div className="flex items-center gap-[53px]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[14px] font-medium text-white transition-colors hover:text-primary-lime"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="ml-[60px]">
            <Button variant="nav" href="#contact">
              Book a Call
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center rounded-md p-2 text-text-secondary hover:text-white md:hidden"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-white/10 md:hidden">
          <div className="space-y-1 px-4 pb-4 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-text-secondary hover:bg-primary-navy hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button
              variant="nav"
              href="#contact"
              className="mt-2 w-full"
              onClick={() => setIsOpen(false)}
            >
              Book a Call
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
