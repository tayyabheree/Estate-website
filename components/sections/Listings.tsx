import Image from "next/image";
import { ArrowUpRight, Bath, BedDouble, Car } from "lucide-react";
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
    <span className="inline-flex border border-white bg-brandBlue px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.13em] text-white">
      {status}
    </span>
  );
}

export function Listings() {
  const properties = getPropertyActivity();

  return (
    <section id="properties" className="section bg-brandBlue text-white">
      <div className="container">
        <Reveal>
          <div className="grid gap-6 border-b-4 border-teal pb-9 lg:grid-cols-12 lg:items-end">
            <div className="min-w-0 lg:col-span-7">
              <p className="section-label section-label--light">Current &amp; recent</p>
              <h2 className="max-w-[720px] font-serif text-[2rem] font-bold leading-[1.16] tracking-[-.03em] text-white sm:text-[2.7rem]">
                A live view of the markets we work in.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/80 lg:col-span-5 lg:justify-self-end">
              Selected WoodRidge sales and leasing activity across Melbourne&apos;s western suburbs.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {properties.map((property, index) => (
            <Reveal key={property.id}>
              <article className="group h-full overflow-hidden border border-white/20 bg-white text-ink">
                <div className="relative aspect-[16/11] overflow-hidden bg-navy">
                  <Image
                    src={imageById[property.id] ?? "/images/service-sales.jpg"}
                    alt=""
                    fill
                    sizes="(max-width:640px) 100vw,50vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute left-4 top-4">
                    <Status status={property.status} />
                  </div>
                  <span className="absolute bottom-4 right-4 bg-navy px-2 py-1 text-[10px] font-bold tracking-[.16em] text-white">
                    0{index + 1}
                  </span>
                </div>

                <div className="border-t-4 border-teal p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-[9px] font-bold uppercase tracking-[.16em] text-brandBlue">
                        {property.type}
                      </p>
                      <h3 className="mt-2 font-serif text-[1.4rem] font-bold leading-tight tracking-[-.02em] text-navy sm:text-[1.6rem]">
                        {property.address}
                      </h3>
                      <p className="mt-1 text-sm text-muted">{property.suburb}</p>
                    </div>
                    <ArrowUpRight className="mt-1 shrink-0 text-teal" size={18} />
                  </div>

                  {(property.beds || property.baths || property.cars) && (
                    <div className="mt-5 flex flex-wrap gap-4 border-t border-line pt-4 text-xs text-muted">
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

                  <p className="mt-5 font-serif text-xl font-bold text-navy">{property.price}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-8">
          <Button
            href="#contact"
            variant="outline"
            className="border-white text-white hover:border-navy hover:bg-navy hover:text-white"
          >
            Discuss Your Property Search
          </Button>
        </div>
      </div>
    </section>
  );
}
