import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";

export function Services() {
  return (
    <section id="services" className="section section--alt">
      <div className="container">
        <Reveal>
          <div className="grid gap-8 border-b border-line pb-10 lg:grid-cols-12 lg:items-end lg:gap-14">
            <div className="lg:col-span-7">
              <p className="section-label">Property services</p>
              <h2 className="font-serif text-[clamp(2rem,3.4vw,3rem)] leading-[1.12] tracking-[-.04em] text-navy">
                One relationship, across the property decisions that matter.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="max-w-lg text-sm leading-relaxed text-muted lg:ml-auto">
                Sales, leasing, management, new homes and investment support are kept connected,
                so the next property decision does not start from zero.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-2">
          {site.services.map((service, index) => (
            <Reveal key={service.title}>
              <a
                href={service.href}
                className="group grid min-w-0 gap-5 border-b border-line py-7 sm:grid-cols-[72px_140px_minmax(0,1fr)_44px] sm:items-center lg:grid-cols-[86px_180px_minmax(0,1fr)_54px] lg:py-8"
              >
                <span className="text-[11px] font-extrabold tracking-[.18em] text-brandBlue">
                  0{index + 1}
                </span>

                <div className="relative hidden aspect-[4/3] overflow-hidden sm:block">
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    sizes="180px"
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-teal to-brandBlue" />
                </div>

                <div className="min-w-0">
                  <h3 className="font-serif text-[1.55rem] leading-tight tracking-[-.025em] text-navy sm:text-[1.75rem] lg:text-[2rem]">
                    {service.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                </div>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-navy transition-all group-hover:border-teal group-hover:bg-teal group-hover:text-white sm:justify-self-end">
                  <ArrowUpRight size={16} />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
