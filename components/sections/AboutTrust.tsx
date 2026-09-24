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
                <div className="relative aspect-[5/4] overflow-hidden bg-paper">
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

                <div className="absolute -bottom-6 right-0 w-[72%] border-l-4 border-brandBlue bg-white p-5 shadow-[0_20px_55px_rgba(16,40,79,.12)] sm:right-6 sm:w-[62%]">
                  <p className="text-[9px] font-extrabold uppercase tracking-[.18em] text-teal">
                    Principal-led service
                  </p>
                  <p className="mt-2 font-serif text-lg leading-snug text-navy">
                    Navin Chugh &amp; Yogesh Bhatia
                  </p>
                  <p className="mt-1 text-xs text-muted">Truganina · Melbourne&apos;s west</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 lg:col-span-6">
              <p className="section-label">Why WoodRidge</p>
              <h2 className="font-serif text-[2rem] leading-[1.14] tracking-[-.035em] text-navy sm:text-[2.65rem]">
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
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[rgba(12,167,156,.10)] text-teal">
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
