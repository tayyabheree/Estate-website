import Image from "next/image";
import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";

const blur =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0JyBoZWlnaHQ9JzMnPjxyZWN0IHdpZHRoPSc0JyBoZWlnaHQ9JzMnIGZpbGw9JyNlN2U5ZWMnLz48L3N2Zz4=";

export function AboutTrust() {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <Reveal>
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-6">
              <p className="section-label">Why WoodRidge</p>
              <h2 className="font-serif text-[1.9rem] leading-[1.2] tracking-[-.025em] text-navy sm:text-[2.25rem]">
                Direct property advice from the people leading the agency.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                Based in Truganina, WoodRidge works across Melbourne&apos;s west with homeowners,
                landlords, buyers and investors. Navin Chugh and Yogesh Bhatia stay involved
                throughout the process rather than handing clients from one department to another.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {site.trustPoints.map((point) => (
                  <div key={point} className="flex min-w-0 gap-3 border-t border-line pt-3">
                    <Check size={17} className="mt-0.5 shrink-0 text-brandBlue" />
                    <span className="text-sm font-semibold leading-snug text-navy">{point}</span>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href="#appraisal" className="btn btn--primary">
                  Book an Appraisal
                </a>
                <a href="#services" className="btn btn--outline text-navy">
                  View Services
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] overflow-hidden bg-paper">
                <Image
                  src="/images/service-invest.jpg"
                  alt="Residential neighbourhood in Melbourne's west"
                  fill
                  sizes="(max-width:1024px) 100vw,560px"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={blur}
                />
              </div>

              <div className="border-x border-b border-line bg-[#fffdf8] px-5 py-4">
                <p className="text-[10px] font-bold uppercase tracking-[.15em] text-brandBlue">
                  Principal-led service
                </p>
                <p className="mt-1 text-sm text-muted">
                  Navin Chugh &amp; Yogesh Bhatia · Melbourne&apos;s west
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
