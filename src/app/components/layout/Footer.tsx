import { IconByName } from "@/app/components/shared/IconByName";
import { contact, site } from "@/data";

export function Footer() {
  return (
    <footer className="border-t border-white/8 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 w-full">
          <div className="font-bold text-white font-display">
            <span className="text-blue-400">{site.brand.firstName}</span> {site.brand.lastName}
            <span className="text-white/30 font-normal text-sm ml-3">{site.brand.tagline}</span>
          </div>
          <div className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} {site.brand.firstName} {site.brand.lastName}.{" "}
            {site.footer.rights}
          </div>
          <div className="flex gap-3">
            {contact.socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all"
              >
                <IconByName name={social.icon} size={15} />
              </a>
            ))}
          </div>
        </div>
        <p className="text-white/25 text-sm text-center max-w-md">{site.footer.tagline}</p>
      </div>
    </footer>
  );
}
