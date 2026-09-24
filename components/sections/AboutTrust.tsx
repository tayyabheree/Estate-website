import Image from "next/image";
import { Check, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";

const blur =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0JyBoZWlnaHQ9JzMnPjxyZWN0IHdpZHRoPSc0JyBoZWlnaHQ9JzMnIGZpbGw9JyNlN2U5ZWMnLz48L3N2Zz4=";

export function AboutTrust() {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <Reveal>
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="order-2 lg:order-1 lg:col-span-6">
              <div className="relative">
                <div className="relative aspect-[5/4] overflow-hidden border border-line bg-paper">
                  <Image
                    src="/images/service-invest.jpg"
                    alt="Residential neighbourhood in Melbourne's west"
                    fill
                    sizes="(max-width:1024px) 100vw,600px"
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL={blur}
                  />
                </div>

                <div className="border-x border-b border-line bg-paper p-5 sm:grid sm:grid-cols-[1fr_auto] sm:items-end sm:gap-5">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[.17em] text-teal">
                      Principal-led service
                    </p>
                    <p className="mt-2 font-serif text-lg font-bold leading-snug text-navy">
                      Navin Chugh &amp; Yogesh Bhatia
                    </p>
                  </div>
                  <p className="mt-2 text-xs text-muted sm:mt-0">Truganina · Melbourne&apos;s west</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 lg:col-span-6">
              <p className="section-label">Why WoodRidge</p>
              <h2 className="font-serif text-[2rem] font-bold leading-[1.18] tracking-[-.03em] text-navy sm:text-[2.6rem]">
                A smaller chain of communication. A higher level of ownership.
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                Based in Truganina, WoodRidge works across Melbourne&apos;s west with homeowners,
                landlords, buyers and investors. The principals stay involved through the
                process, keeping advice, decisions and accountability close to the client.
              </p>

              <div className="mt-8 grid gap-x-6 gap-y-4 sm:grid-cols-2">
                {site.trustPoints.map((point) => (
                  <div key={point} className="flex min-w-0 gap-3 border-t border-line pt-4">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center border border-teal bg-white text-teal">
                      <Check size={15} strokeWidth={2.4} />
                    </span>
                    <span className="text-sm font-semibold leading-snug text-navy">{point}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#appraisal" className="btn btn--primary">
                  Book an Appraisal
                  <ArrowUpRight size={15} />
                </a>
                <a href="#services" className="btn btn--outline text-navy">
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
