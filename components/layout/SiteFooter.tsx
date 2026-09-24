import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer id="contact" className="site-footer relative overflow-hidden bg-[#0d2345] text-white">
      <div className="brand-grid-bg absolute inset-0 opacity-40" />
      <div className="brand-line relative z-10" />

      <div className="container relative z-10 border-b border-white/12 py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-[10px] font-extrabold uppercase tracking-[.19em] text-[#62ddd3]">
              Start a property conversation
            </p>
            <h2 className="mt-3 max-w-[760px] font-serif text-[clamp(2rem,3.2vw,3rem)] leading-[1.1] tracking-[-.04em]">
              Talk to the people who will actually handle the property.
            </h2>
          </div>

          <div className="lg:col-span-5 lg:justify-self-end">
            <div className="space-y-3 text-sm text-white/68">
              {site.contact.phones.map((phone) => (
                <a
                  key={phone}
                  href={"tel:" + phone.replace(/\s/g, "")}
                  className="flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Phone size={16} className="text-teal" />
                  {phone}
                </a>
              ))}
              {site.contact.emails.map((email) => (
                <a
                  key={email}
                  href={"mailto:" + email}
                  className="flex items-center gap-2 break-all transition-colors hover:text-white"
                >
                  <Mail size={16} className="text-teal" />
                  {email}
                </a>
              ))}
              <p className="flex gap-2">
                <MapPin className="mt-1 shrink-0 text-teal" size={16} />
                {site.contact.address}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container relative z-10 grid gap-10 border-b border-white/12 py-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <a
            href="#home"
            aria-label="WoodRidge Real Estate home"
            className="logo-plaque inline-block max-w-[260px] p-3"
          >
            <Image
              src="/images/woodridge-real-estate-logo-hd.png"
              alt="WoodRidge Real Estate"
              width={3072}
              height={1512}
              className="h-auto w-[220px]"
            />
          </a>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/58">
            Sales, leasing, management, new homes and investment support across Melbourne&apos;s west.
          </p>
        </div>

        <div className="md:col-span-3">
          <h3 className="widget-title">Explore</h3>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-white/62">
            {site.nav.map(([label, href]) => (
              <a key={href} href={href} className="transition-colors hover:text-white">
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-4">
          <h3 className="widget-title">Services</h3>
          <div className="space-y-2 text-sm text-white/62">
            {site.services.map((service) => (
              <a key={service.title} href={service.href} className="block transition-colors hover:text-white">
                {service.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container relative z-10 flex flex-col gap-2 py-5 text-xs text-white/42 md:flex-row md:items-center md:justify-between">
        <p>© 2026 WoodRidge Real Estate Pty Ltd</p>
        <p>Truganina · Melbourne&apos;s west</p>
      </div>
    </footer>
  );
}
