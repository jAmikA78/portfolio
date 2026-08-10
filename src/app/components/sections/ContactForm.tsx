import emailjs from "@emailjs/browser";
import { CheckCircle, Loader2, Mail } from "lucide-react";
import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";

import { GlassCard } from "@/app/components/shared/GlassCard";
import { getEmailjsConfig } from "@/app/lib/constants";
import { contact, site } from "@/data";

const INPUT_CLASS =
  "w-full px-4 py-3 rounded-xl bg-white/6 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all";
const LABEL_CLASS = "text-white/50 text-xs font-medium mb-1.5 block";
const RESET_MS = 3000;

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const resetTimer = useRef<number | null>(null);

  const { serviceId, templateId, publicKey } = getEmailjsConfig();
  const configured = Boolean(serviceId && templateId && publicKey);

  useEffect(
    () => () => {
      if (resetTimer.current) window.clearTimeout(resetTimer.current);
    },
    []
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;

    if (!configured) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        serviceId!,
        templateId!,
        {
          name: form.name,
          email: form.email,
          message: form.message,
          time: new Date().toLocaleString(),
        },
        { publicKey: publicKey! }
      );

      setForm({ name: "", email: "", message: "" });
      setStatus("sent");
      if (resetTimer.current) window.clearTimeout(resetTimer.current);
      resetTimer.current = window.setTimeout(() => setStatus("idle"), RESET_MS);
    } catch {
      setStatus("error");
    }
  };

  const update =
    (field: keyof typeof form) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [field]: e.target.value });

  const errorMessage = configured
    ? `${site.contact.form.sendError} ${contact.email}`
    : `${site.contact.form.notConfigured} ${contact.email}`;

  return (
    <GlassCard className="p-7">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="contact-name" className={LABEL_CLASS}>
            {site.contact.form.nameLabel}
          </label>
          <input
            id="contact-name"
            required
            type="text"
            value={form.name}
            onChange={update("name")}
            placeholder={site.contact.form.namePlaceholder}
            className={INPUT_CLASS}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className={LABEL_CLASS}>
            {site.contact.form.emailLabel}
          </label>
          <input
            id="contact-email"
            required
            type="email"
            value={form.email}
            onChange={update("email")}
            placeholder={site.contact.form.emailPlaceholder}
            className={INPUT_CLASS}
          />
        </div>
        <div>
          <label htmlFor="contact-message" className={LABEL_CLASS}>
            {site.contact.form.messageLabel}
          </label>
          <textarea
            id="contact-message"
            required
            rows={5}
            value={form.message}
            onChange={update("message")}
            placeholder={site.contact.form.messagePlaceholder}
            className={`${INPUT_CLASS} resize-none`}
          />
        </div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="mt-2 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-500 text-white font-semibold text-sm hover:bg-blue-400 active:scale-95 transition-all disabled:opacity-60 disabled:hover:bg-blue-500 disabled:active:scale-100"
        >
          {status === "sent" ? (
            <>
              <CheckCircle size={16} /> {site.contact.form.sentLabel}
            </>
          ) : status === "sending" ? (
            <>
              <Loader2 size={16} className="animate-spin" /> {site.contact.form.sendingLabel}
            </>
          ) : (
            <>
              <Mail size={16} /> {site.contact.form.sendLabel}
            </>
          )}
        </button>
        {status === "error" && (
          <p className="text-red-400 text-xs" role="alert">
            {errorMessage}
          </p>
        )}
      </form>
    </GlassCard>
  );
}
