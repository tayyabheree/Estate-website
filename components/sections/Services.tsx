import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/content/site";

const blur =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0JyBoZWlnaHQ9JzMnPjxyZWN0IHdpZHRoPSc0JyBoZWlnaHQ9JzMnIGZpbGw9JyNlN2U5ZWMnLz48L3N2Zz4=";

export function Services() {
  return (
    <section id="services" className="section section--alt">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionHeading
              label="What we do"
              title="The property work, handled in one place"
            />
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted lg:col-span-5 lg:justify-self-end">
            The four core areas WoodRidge handles for homeowners, landlords, buyers and investors.
          </p>
        </div>

        <div className="mt-12 grid border-l border-t border-line md:grid-cols-2">
          {site.services.map((service, index) => (
            <Reveal key={service.title}>
              <article className="group h-full border-b border-r border-line bg-white">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title + " property service"}
                    fill
                    sizes="(max-width:768px) 100vw,600px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                    placeholder="blur"
                    blurDataURL={blur}
                  />
                </div>

                <div className="grid gap-4 p-6 sm:grid-cols-[48px_1fr] sm:p-8">
                  <span className="text-[10px] font-bold tracking-[.16em] text-brandBlue">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl leading-tight text-navy">
                      {service.title}
                    </h3>
                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted">
                      {service.description}
                    </p>
                    <a
                      href={service.href}
                      className="mt-5 inline-block text-xs font-bold uppercase tracking-[.1em] text-navy underline decoration-brandBlue decoration-1 underline-offset-4"
                    >
                      {service.link}
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
