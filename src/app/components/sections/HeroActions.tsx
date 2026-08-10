import { ArrowRight, FileText, Mail } from "lucide-react";
import { motion } from "motion/react";

import { contact, site } from "@/data";

export function HeroActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className="flex flex-wrap justify-center lg:justify-start gap-4"
    >
      <a
        href="#projects"
        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-white bg-blue-500 hover:bg-blue-400 transition-colors text-sm shadow-lg shadow-blue-500/25"
      >
        View Projects <ArrowRight size={16} />
      </a>
      <a
        href={`mailto:${contact.email}`}
        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-white border border-white/15 hover:bg-white/8 transition-colors text-sm"
      >
        <Mail size={16} /> Get In Touch
      </a>
      <a
        href={site.hero.cvUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-white border border-white/15 hover:bg-white/8 transition-colors text-sm"
      >
        <FileText size={16} /> Download CV
      </a>
    </motion.div>
  );
}
