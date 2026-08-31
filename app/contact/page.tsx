import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { socialLinks } from "@/data/socialLinks";
import SocialLinks from "@/components/SocialLinks";

export const metadata: Metadata = {
  title: "Contact — Yog M Creations",
  description:
    "Get in touch with Yog M Creations — for collaborations, questions, or just to say hello.",
};

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="container-content grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="eyebrow mb-4 text-marigold-dark">Contact</p>
          <h1 className="font-display text-4xl font-medium leading-tight text-ink sm:text-5xl">
            Say hello
          </h1>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-soft">
            For collaborations, questions about any of the three brands, or
            just to share what a story meant to you — this reaches me
            directly.
          </p>

          <div className="mt-10 space-y-6">
            {socialLinks.map((brand) => (
              <div key={brand.brand}>
                <p className="mb-2 text-xs text-ink-faint">{brand.label}</p>
                <SocialLinks links={brand.links} />
              </div>
            ))}
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
