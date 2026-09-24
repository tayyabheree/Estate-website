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
    <span className="inline-flex rounded-full border border-white/30 bg-navy/45 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[.14em] text-white backdrop-blur">
      {status}
    </span>
  );
}

export function Listings() {
  const properties = getPropertyActivity();

  return (
    <section id="properties" className="section relative overflow-hidden bg-navy text-white">
      <div className="brand-grid-bg absolute inset-0 opacity-60" />
      <div className="absolute -right-32 top-28 h-80 w-80 rounded-full bg-teal/10 blur-3xl" />

      <div className="container relative">
        <Reveal>
          <div className="grid gap-6 border-b border-white/12 pb-9 lg:grid-cols-12 lg:items-end">
            <div className="min-w-0 lg:col-span-7">
              <p className="section-label section-label--light">Current &amp; recent</p>
              <h2 className="max-w-[720px] font-serif text-[2rem] leading-[1.14] tracking-[-.035em] text-white sm:text-[2.75rem]">
                A live view of the markets we work in.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/60 lg:col-span-5 lg:justify-self-end">
              Selected WoodRidge sales and leasing activity across Melbourne&apos;s western suburbs.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {properties.map((property, index) => (
            <Reveal key={property.id}>
              <article className="group h-full overflow-hidden bg-white text-ink shadow-[0_18px_45px_rgba(4,18,40,.18)]">
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={imageById[property.id] ?? "/images/service-sales.jpg"}
                    alt=""
                    fill
                    sizes="(max-width:640px) 100vw,50vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.035]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent" />
                  <div className="absolute left-4 top-4">
                    <Status status={property.status} />
                  </div>
                  <span className="absolute bottom-4 right-4 text-[10px] font-extrabold tracking-[.18em] text-white/80">
                    0{index + 1}
                  </span>
                </div>

                <div className="border-t-4 border-teal p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-[9px] font-extrabold uppercase tracking-[.17em] text-brandBlue">
                        {property.type}
                      </p>
                      <h3 className="mt-2 font-serif text-[1.45rem] leading-tight tracking-[-.02em] text-navy sm:text-[1.65rem]">
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

                  <p className="mt-5 font-serif text-xl text-navy">{property.price}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-8">
          <Button
            href="#contact"
            variant="outline"
            className="border-white/40 text-white hover:border-white hover:bg-white hover:text-navy"
          >
            Discuss Your Property Search
          </Button>
        </div>
      </div>
    </section>
  );
}
