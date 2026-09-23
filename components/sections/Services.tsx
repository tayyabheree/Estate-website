import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";

const blur =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0JyBoZWlnaHQ9JzMnPjxyZWN0IHdpZHRoPSc0JyBoZWlnaHQ9JzMnIGZpbGw9JyNlN2U5ZWMnLz48L3N2Zz4=";

export function Services() {
  return (
    <section id="services" className="section section--alt">
      <div className="container">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="section-label">Property services</p>
              <h2 className="font-serif text-[clamp(1.9rem,3vw,2.7rem)] leading-[1.14] tracking-[-.03em] text-navy">
                One agency for the property work that usually sits across several desks.
              </h2>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
                Choose the service you need now. If the job expands later, the same team
                can keep the related property work connected.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden bg-white">
                <Image
                  src="/images/service-sales.jpg"
                  alt="Contemporary Australian home interior"
                  fill
                  sizes="(max-width:1024px) 100vw,700px"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={blur}
                />
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 border-t border-line">
          {site.services.map((service, index) => (
            <Reveal key={service.title}>
              <a
                href={service.href}
                className="group relative grid min-w-0 grid-cols-[36px_minmax(0,1fr)] gap-3 border-b border-line py-5 pr-8 sm:grid-cols-[70px_minmax(0,1fr)_auto] sm:items-center sm:gap-4 sm:py-6 sm:pr-0"
              >
                <span className="text-[10px] font-bold tracking-[.16em] text-brandBlue">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="font-serif text-[1.45rem] leading-tight text-navy sm:text-[1.75rem]">
                    {service.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                </div>
                <span className="absolute right-0 top-6 text-sm font-semibold text-navy transition-transform group-hover:translate-x-1 sm:static">
                  →
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
