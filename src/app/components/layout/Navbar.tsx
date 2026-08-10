import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/app/lib/cn";
import { contact, site } from "@/data";

import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "bg-background/80 backdrop-blur-xl border-b border-white/8 py-3" : "py-5"
        )}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a href="#hero" className="font-bold text-lg tracking-tight text-white font-display">
            <span className="text-blue-400">{site.brand.firstName}</span> {site.brand.lastName}
          </a>

          <div className="hidden md:flex items-center gap-1">
            {site.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-white/60 hover:text-white hover:bg-white/8 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={site.hero.cvUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl text-sm font-semibold text-white/70 hover:text-white transition-colors"
            >
              Resume
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="px-4 py-2 rounded-xl text-sm font-semibold bg-blue-500 text-white hover:bg-blue-400 transition-colors"
            >
              Hire Me
            </a>
          </div>

          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/8"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
