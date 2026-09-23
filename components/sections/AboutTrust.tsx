import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";

const blur =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0JyBoZWlnaHQ9JzMnPjxyZWN0IHdpZHRoPSc0JyBoZWlnaHQ9JzMnIGZpbGw9JyNlN2U5ZWMnLz48L3N2Zz4=";

export function AboutTrust() {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-9">
              <p className="section-label">About WoodRidge</p>
              <h2 className="max-w-[920px] font-serif text-[clamp(1.95rem,3.3vw,3rem)] leading-[1.12] tracking-[-.035em] text-navy">
                A local agency built around direct involvement, not layers of hand-offs.
              </h2>
            </div>
          </div>

          <div className="mt-9 grid gap-8 border-t border-line pt-8 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <p className="font-serif text-[1.35rem] leading-[1.45] text-navy">
                Navin Chugh and Yogesh Bhatia stay close to the work—from appraisal
                and campaign decisions through to leasing, management and project coordination.
              </p>
              <Button href="#appraisal" variant="outline" className="mt-7">
                Book an Appraisal
              </Button>
            </div>

            <div className="lg:col-span-8">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="text-sm leading-relaxed text-muted">
                  <p>
                    WoodRidge is based in Truganina and works across Melbourne&apos;s west.
                    The agency handles residential sales, leasing and property management,
                    with support for new homes, house-and-land packages and investment.
                  </p>
                </div>
                <div className="text-sm leading-relaxed text-muted">
                  <p>
                    When a property matter extends beyond the agency transaction, the team can
                    also coordinate finance, construction and maintenance so the moving parts
                    stay connected.
                  </p>
                </div>
              </div>

              <div className="mt-10 grid border-l border-t border-line sm:grid-cols-2">
                {site.trustPoints.map((point) => (
                  <div
                    key={point}
                    className="border-b border-r border-line px-5 py-5 text-sm font-semibold text-navy"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <div className="relative aspect-[16/7] min-h-[280px] overflow-hidden">
            <Image
              src="/images/service-invest.jpg"
              alt="Residential neighbourhood in Melbourne's west"
              fill
              sizes="100vw"
              className="object-cover"
              placeholder="blur"
              blurDataURL={blur}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
