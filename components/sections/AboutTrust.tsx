import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/content/site";

const blur =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0JyBoZWlnaHQ9JzUnPjxyZWN0IHdpZHRoPSc0JyBoZWlnaHQ9JzUnIGZpbGw9JyNkZGRmZTInLz48L3N2Zz4=";

export function AboutTrust() {
  return (
    <section id="about" className="section bg-[#fffaf2]">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-6">
            <div className="relative">
              <div className="relative aspect-[5/4] overflow-hidden bg-paper">
                <Image
                  src="/images/service-invest.jpg"
                  alt="Melbourne western suburbs residential neighbourhood"
                  fill
                  sizes="(max-width:1024px) 100vw,560px"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={blur}
                />
              </div>
              <div className="relative -mt-14 ml-6 max-w-[360px] border border-line bg-white p-6 sm:ml-10">
                <p className="text-[11px] font-bold uppercase tracking-[.16em] text-brandBlue">
                  Led by the principals
                </p>
                <p className="mt-2 font-serif text-2xl leading-tight text-navy">
                  Navin Chugh &amp; Yogesh Bhatia
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  A hands-on approach to sales, leasing, investment and property management.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-6">
            <SectionHeading
              label="About WoodRidge"
              title="Local property advice, without the hand-offs."
            />

            <div className="entry-content mt-8 max-w-xl text-muted">
              <p>
                WoodRidge Real Estate is a full-service agency focused on Melbourne&apos;s
                west. Homeowners, investors, tenants and first-home buyers can deal with
                one team across sales, leasing, management, new homes and investment.
              </p>
              <p>
                The approach is simple: clear advice, professional presentation and
                direct communication. When a project needs more than an agency service,
                WoodRidge can also coordinate finance, construction and ongoing maintenance.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#appraisal">Book a Free Appraisal</Button>
              <Button href="#services" variant="outline">
                Explore Services
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid border-y border-line sm:grid-cols-2 lg:grid-cols-4">
          {site.trustPoints.map((point, index) => (
            <div
              key={point}
              className={
                "py-5 text-sm font-bold leading-snug text-navy lg:px-6 " +
                (index > 0 ? "border-t border-line sm:border-t-0 lg:border-l " : "") +
                (index % 2 === 1 ? "sm:border-l " : "")
              }
            >
              <span className="mr-3 text-teal">—</span>
              {point}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
