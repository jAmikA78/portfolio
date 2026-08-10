import { AnimatePresence, motion } from "motion/react";

import { contact, site } from "@/data";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="fixed inset-x-0 top-16 z-40 bg-background/95 backdrop-blur-xl border-b border-white/8 p-6 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {site.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="text-left px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/8 transition-all text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href={site.hero.cvUrl}
              target="_blank"
              rel="noreferrer"
              onClick={onClose}
              className="text-left px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/8 transition-all text-sm font-medium"
            >
              Resume
            </a>
            <a
              href={`mailto:${contact.email}`}
              onClick={onClose}
              className="mt-3 px-4 py-3 rounded-xl text-sm font-semibold bg-blue-500 text-white text-center"
            >
              Hire Me
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
