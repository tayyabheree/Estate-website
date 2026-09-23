import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer id="contact" className="site-footer bg-[#202a25] pb-24 text-white md:pb-0">
      <div className="container border-b border-white/15 py-11 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-[10px] font-bold uppercase tracking-[.18em] text-brandBlue">
              WoodRidge Real Estate
            </p>
            <h2 className="mt-3 max-w-[720px] font-serif text-[clamp(1.85rem,3vw,2.8rem)] leading-[1.12] tracking-[-.03em]">
              Talk to the people who will actually handle the property.
            </h2>
          </div>

          <div className="lg:col-span-5 lg:justify-self-end">
            <div className="space-y-3 text-sm text-white/70">
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
              <p className="flex gap-2">
                <MapPin className="mt-1 shrink-0" size={16} />
                {site.contact.address}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container grid gap-10 border-b border-white/15 py-10 md:grid-cols-3">
        <div>
          <a href="#home" aria-label="WoodRidge Real Estate home">
            <span className="block font-serif text-3xl">WoodRidge</span>
            <span className="mt-1 block text-[9px] font-bold tracking-[.3em] text-white/55">
              REAL ESTATE
            </span>
          </a>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            Sales, leasing, management, new homes and investment support across Melbourne&apos;s west.
          </p>
        </div>

        <div>
          <h3 className="widget-title">Explore</h3>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-white/65">
            {site.nav.map(([label, href]) => (
              <a key={href} href={href} className="hover:text-white">
                {label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="widget-title">Services</h3>
          <div className="space-y-2 text-sm text-white/65">
            {site.services.map((service) => (
              <a key={service.title} href={service.href} className="block hover:text-white">
                {service.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container flex flex-col gap-2 py-5 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
        <p>© 2026 WoodRidge Real Estate Pty Ltd</p>
        <p>Truganina · Melbourne&apos;s west</p>
      </div>
    </footer>
  );
}
