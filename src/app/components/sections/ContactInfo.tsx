import { Mail, MapPin, MessageCircle } from "lucide-react";

import { GlassCard } from "@/app/components/shared/GlassCard";
import { IconByName } from "@/app/components/shared/IconByName";
import { contact } from "@/data";

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-5">
      <GlassCard className="p-6">
        <a href={`mailto:${contact.email}`} className="flex items-center gap-4 group">
          <div className="w-12 h-12 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/25 transition-colors">
            <Mail size={20} />
          </div>
          <div>
            <div className="text-white/40 text-xs mb-0.5">Email</div>
            <div className="text-white font-medium text-sm break-all">{contact.email}</div>
          </div>
        </a>
      </GlassCard>

      <GlassCard className="p-6">
        <a
          href={`https://wa.me/${contact.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 group"
        >
          <div className="w-12 h-12 rounded-xl bg-green-500/15 flex items-center justify-center text-green-400 group-hover:bg-green-500/25 transition-colors">
            <MessageCircle size={20} />
          </div>
          <div>
            <div className="text-white/40 text-xs mb-0.5">WhatsApp &amp; Phone</div>
            <div className="text-white font-medium text-sm">{contact.phone}</div>
          </div>
        </a>
      </GlassCard>

      <GlassCard className="p-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-500/15 flex items-center justify-center text-purple-400">
            <MapPin size={20} />
          </div>
          <div>
            <div className="text-white/40 text-xs mb-0.5">Location</div>
            <div className="text-white font-medium text-sm">{contact.location}</div>
          </div>
        </div>
      </GlassCard>

      <GlassCard className="p-6">
        <div className="text-white/40 text-xs mb-3">Connect With Me</div>
        <div className="flex gap-3">
          {contact.socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="w-11 h-11 rounded-xl bg-white/6 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/12 hover:border-white/20 transition-all"
            >
              <IconByName name={social.icon} size={20} />
            </a>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}
