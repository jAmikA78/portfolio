import { Reveal } from "@/app/components/shared/Reveal";
import { SectionGlow } from "@/app/components/shared/SectionGlow";
import { SectionHeading } from "@/app/components/shared/SectionHeading";
import { site } from "@/data";

import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <SectionGlow variant="contact" />

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <SectionHeading
            label="Contact"
            title={site.contact.title}
            subtitle={site.contact.subtitle}
            align="center"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Reveal x={-30} y={0} delay={0.2}>
            <ContactInfo />
          </Reveal>
          <Reveal x={30} y={0} delay={0.3}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
