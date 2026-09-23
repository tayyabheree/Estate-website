import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="site-footer bg-navy pb-24 pt-16 text-white md:pb-0"
    >
      <div className="container grid gap-10 border-b border-white/20 pb-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="widget lg:pr-8">
          <a href="#home" aria-label="WoodRidge Real Estate home">
            <span className="block font-serif text-3xl">WoodRidge</span>
            <span className="mt-1 block text-[10px] font-bold tracking-[.3em] text-white/70">
              REAL ESTATE
            </span>
          </a>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
            Sales, leasing, property management, new homes and investment support across
            Melbourne&apos;s west.
          </p>
        </div>

        <div className="widget">
          <h3 className="widget-title">Explore</h3>
          <div className="flex flex-col gap-2.5 text-sm text-white/75">
            {site.nav.map(([label, href]) => (
              <a key={href} href={href} className="hover:text-white">
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="widget">
          <h3 className="widget-title">Services</h3>
          <div className="flex flex-col gap-2.5 text-sm text-white/75">
            {site.services.map((service) => (
              <a
                key={service.title}
                href={service.href}
                className="hover:text-white"
              >
                {service.title}
              </a>
            ))}
          </div>
        </div>

        <div className="widget">
          <h3 className="widget-title">Contact</h3>
          <div className="space-y-3 text-sm text-white/75">
            <p className="flex gap-2">
              <MapPin className="mt-1 shrink-0" size={16} />
              {site.contact.address}
            </p>

            {site.contact.phones.map((phone) => (
              <a
                key={phone}
                href={"tel:" + phone.replace(/\s/g, "")}
                className="flex items-center gap-2 hover:text-white"
              >
                <Phone size={16} />
                {phone}
              </a>
            ))}

            {site.contact.emails.map((email) => (
              <a
                key={email}
                href={"mailto:" + email}
                className="flex items-center gap-2 break-all hover:text-white"
              >
                <Mail size={16} />
                {email}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container flex flex-col gap-2 py-5 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
        <p>© 2026 WoodRidge Real Estate Pty Ltd</p>
        <p>11 Hyams Way, Truganina VIC 3029</p>
      </div>
    </footer>
  );
}
