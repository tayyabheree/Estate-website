import Image from "next/image";
import { Bath, BedDouble, Car, MapPin } from "lucide-react";
import { getPropertyActivity } from "@/data/listings";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const blur =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0JyBoZWlnaHQ9JzMnPjxyZWN0IHdpZHRoPSc0JyBoZWlnaHQ9JzMnIGZpbGw9JyNlN2U5ZWMnLz48L3N2Zz4=";

function Status({ status }: { status: string }) {
  const dark = status === "For Sale";
  const closed = status === "Sold" || status === "Leased";

  return (
    <span
      className={
        "inline-flex rounded-[2px] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.14em] " +
        (dark
          ? "bg-navy text-white"
          : closed
            ? "bg-brandBlue text-white"
            : "border border-navy text-navy")
      }
    >
      {status}
    </span>
  );
}

export function Listings() {
  const [featured, ...recent] = getPropertyActivity();

  return (
    <section id="properties" className="section bg-white">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionHeading
              label="Current & recent"
              title="Properties WoodRidge is working with"
            />
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted lg:col-span-5 lg:justify-self-end">
            A selection of current and recent WoodRidge activity across sales and leasing in Melbourne&apos;s west.
          </p>
        </div>

        <Reveal className="mt-10">
          <div className="grid overflow-hidden border border-line bg-paper lg:grid-cols-12">
            <div className="relative min-h-[330px] lg:col-span-7 lg:min-h-[520px]">
              <Image
                src="/images/service-invest.jpg"
                alt="Residential neighbourhood in Melbourne"
                fill
                sizes="(max-width:1024px) 100vw,700px"
                className="object-cover"
                placeholder="blur"
                blurDataURL={blur}
              />
              <div className="absolute left-5 top-5">
                <Status status={featured.status} />
              </div>
              <p className="absolute bottom-4 left-5 bg-white/95 px-3 py-2 text-[11px] font-medium text-muted">
                Neighbourhood image
              </p>
            </div>

            <div className="flex flex-col justify-between p-7 sm:p-10 lg:col-span-5 lg:p-12">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[.16em] text-brandBlue">
                  {featured.type}
                </p>
                <h3 className="mt-4 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1.02] text-navy">
                  {featured.address}
                </h3>
                <p className="mt-4 flex items-center gap-2 text-sm text-muted">
                  <MapPin size={17} />
                  {featured.suburb}
                </p>

                <div className="my-8 h-px bg-line" />

                <p className="text-xs font-bold uppercase tracking-[.14em] text-muted">
                  Asking price
                </p>
                <p className="mt-2 font-serif text-4xl text-navy">
                  {featured.price}
                </p>

                <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
                  Speak directly with WoodRidge for property details, availability and
                  inspection information.
                </p>
              </div>

              <div className="mt-10">
                <Button href="#contact">
                  Enquire About This Property
                </Button>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 border-t border-line">
          {recent.map((property) => (
            <Reveal key={property.id}>
              <article className="grid gap-5 border-b border-line py-6 md:grid-cols-[140px_1fr_auto] md:items-center">
                <div>
                  <Status status={property.status} />
                </div>

                <div>
                  <h3 className="font-serif text-2xl leading-tight text-navy">
                    {property.address}
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    {property.suburb} · {property.type}
                  </p>
                  {(property.beds || property.baths || property.cars) && (
                    <div className="mt-3 flex flex-wrap gap-4 text-xs font-medium text-muted">
                      {property.beds && (
                        <span className="flex items-center gap-1.5">
                          <BedDouble size={15} />
                          {property.beds}
                        </span>
                      )}
                      {property.baths && (
                        <span className="flex items-center gap-1.5">
                          <Bath size={15} />
                          {property.baths}
                        </span>
                      )}
                      {property.cars && (
                        <span className="flex items-center gap-1.5">
                          <Car size={15} />
                          {property.cars}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                <p className="font-serif text-2xl text-navy md:text-right">
                  {property.price}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-5 border-l-2 border-brandBlue pl-5 sm:flex-row sm:items-center">
          <p className="max-w-2xl text-sm leading-relaxed text-muted">
            Looking for something specific? Tell us the suburb, property type and budget
            and the team can discuss current opportunities directly.
          </p>
          <Button href="#contact" variant="outline">
            Discuss Your Search
          </Button>
        </div>
      </div>
    </section>
  );
}
