"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export const navItems = [
  { href: "#home", label: "Home", id: "home" },
  { href: "#about", label: "About", id: "about" },
  { href: "#education", label: "Education", id: "education" },
  { href: "#research", label: "Research", id: "research" },
  { href: "#activities", label: "Activities", id: "activities" },
  { href: "#publications", label: "Publications", id: "publications" },
  { href: "#certificates", label: "Achievements", id: "certificates" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navItems.forEach((n) => { const el = document.getElementById(n.id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled || open ? "border-b border-gold/20 bg-ivory/95 shadow-sm backdrop-blur" : "bg-transparent"}`}>
      <nav aria-label="Primary" className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-16">
        <Link href="#home" aria-label="Mehejabin Jui, home" className={`flex items-center gap-3 ${scrolled || open ? "text-forest" : "text-ivory"}`}><span className="flex h-10 w-10 items-center justify-center border border-gold font-serif text-lg">MJ</span><span className="hidden font-serif text-base sm:block">Mehejabin Jui</span></Link>

        <ul className="hidden items-center gap-4 2xl:flex">
          {navItems.map((n) => (
            <li key={n.id}>
              <a href={n.href} aria-current={active === n.id ? "location" : undefined}
                className={`relative text-xs transition hover:text-gold after:absolute after:-bottom-2 after:left-0 after:h-px after:bg-gold after:transition-all ${active === n.id ? "text-gold after:w-full" : `${scrolled ? "text-charcoal/75" : "text-ivory/80"} after:w-0 hover:after:w-full`}`}>
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className={`mr-4 hidden border-b border-gold pb-1 text-xs 2xl:block ${scrolled ? "text-forest" : "text-ivory"}`}>Get in touch</a>
        <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"} className={`${scrolled || open ? "text-forest" : "text-ivory"} 2xl:hidden`}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <ul id="mobile-menu" className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-gold/20 bg-ivory px-6 py-4 2xl:hidden">
          {navItems.map((n) => (
            <li key={n.id}>
              <a href={n.href} onClick={() => setOpen(false)}
                className={`block border-b border-forest/5 py-2.5 text-base ${active === n.id ? "text-gold" : "text-forest/85"}`}>
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
