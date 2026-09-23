import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { getListings } from "@/data/listings";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const blur =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0JyBoZWlnaHQ9JzMnPjxyZWN0IHdpZHRoPSc0JyBoZWlnaHQ9JzMnIGZpbGw9JyNlN2U5ZWMnLz48L3N2Zz4=";

export function Listings() {
  const [listing] = getListings();

  return (
    <section id="properties" className="section bg-white">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionHeading
              label="Property spotlight"
              title="A current opportunity in Bacchus Marsh"
            />
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted lg:col-span-5 lg:justify-self-end">
            Looking for something different? Tell us what you are buying, leasing or
            investing in and we can discuss suitable opportunities across Melbourne&apos;s west.
          </p>
        </div>

        <Reveal className="mt-10">
          <div className="grid overflow-hidden border border-line bg-paper lg:grid-cols-12">
            <div className="relative min-h-[330px] lg:col-span-7 lg:min-h-[520px]">
              <Image
                src="/images/service-invest.jpg"
                alt="Residential growth area in Melbourne's west"
                fill
                sizes="(max-width:1024px) 100vw,700px"
                className="object-cover"
                placeholder="blur"
                blurDataURL={blur}
              />
              <div className="absolute left-5 top-5 bg-navy px-3 py-2 text-[11px] font-bold uppercase tracking-[.14em] text-white">
                {listing.status}
              </div>
              <p className="absolute bottom-4 left-5 bg-white/95 px-3 py-2 text-[11px] font-medium text-muted">
                Area image used for presentation
              </p>
            </div>

            <div className="flex flex-col justify-between p-7 sm:p-10 lg:col-span-5 lg:p-12">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[.16em] text-brandBlue">
                  {listing.type}
                </p>
                <h3 className="mt-4 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1.02] text-navy">
                  {listing.address}
                </h3>
                <p className="mt-4 flex items-center gap-2 text-sm text-muted">
                  <MapPin size={17} />
                  {listing.suburb}
                </p>

                <div className="my-8 h-px bg-line" />

                <p className="text-xs font-bold uppercase tracking-[.14em] text-muted">
                  Asking price
                </p>
                <p className="mt-2 font-serif text-4xl text-navy">
                  {listing.price}
                </p>

                <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
                  Speak directly with WoodRidge for property details, availability and
                  inspection information.
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Button href="#contact">
                  Enquire About This Property
                </Button>
                <a
                  href="#appraisal"
                  className="inline-flex min-h-12 items-center gap-2 text-sm font-bold text-navy"
                >
                  Selling instead?
                  <ArrowRight size={17} />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
