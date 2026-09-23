import Image from "next/image";
import { Bath, BedDouble, Car } from "lucide-react";
import { getPropertyActivity } from "@/data/listings";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const imageById: Record<string, string> = {
  "01": "/images/service-invest.jpg",
  "02": "/images/service-leasing.jpg",
  "03": "/images/service-sales.jpg",
  "04": "/images/hero.jpg"
};

function Status({ status }: { status: string }) {
  return (
    <span className="inline-flex border border-white/35 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[.14em] text-white/85">
      {status}
    </span>
  );
}

export function Listings() {
  const properties = getPropertyActivity();

  return (
    <section id="properties" className="section bg-navy text-white">
      <div className="container">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="section-label section-label--light">Current & recent</p>
              <h2 className="max-w-[720px] font-serif text-[clamp(2.1rem,4vw,3.6rem)] leading-[1.12] tracking-[-.03em] text-white">
                Property activity across Melbourne&apos;s west.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/65 lg:col-span-5 lg:justify-self-end">
              A selection of current and recent WoodRidge sales and leasing activity.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 no-scrollbar">
          {properties.map((property) => (
            <Reveal
              key={property.id}
              className="min-w-[86%] snap-start sm:min-w-[55%] lg:min-w-[31%]"
            >
              <article className="h-full bg-[#fffdf8] text-ink">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={imageById[property.id] ?? "/images/service-sales.jpg"}
                    alt=""
                    fill
                    sizes="(max-width:768px) 86vw,(max-width:1024px) 55vw,360px"
                    className="object-cover"
                  />
                  <div className="absolute left-4 top-4">
                    <Status status={property.status} />
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[.14em] text-brandBlue">
                    {property.type}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl leading-tight text-navy">
                    {property.address}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{property.suburb}</p>

                  {(property.beds || property.baths || property.cars) && (
                    <div className="mt-4 flex gap-4 border-t border-line pt-4 text-xs text-muted">
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

                  <p className="mt-5 font-serif text-xl text-navy">{property.price}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-7">
          <Button href="#contact" variant="outline" className="border-white text-white hover:bg-white hover:text-navy">
            Discuss Your Property Search
          </Button>
        </div>
      </div>
    </section>
  );
}
