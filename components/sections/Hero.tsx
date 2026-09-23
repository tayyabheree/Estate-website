import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

const blur =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNicgaGVpZ2h0PSc5Jz48cmVjdCB3aWR0aD0nMTYnIGhlaWdodD0nOScgZmlsbD0nIzFlMzQ0YScvPjwvc3ZnPg==";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[680px] h-[100svh] items-end overflow-hidden bg-navy text-white sm:items-center"
    >
      <Image
        src="/images/hero.jpg"
        alt="Modern Australian family home in Melbourne's west"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[62%_center] sm:object-center"
        placeholder="blur"
        blurDataURL={blur}
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,31,58,.9)_0%,rgba(11,31,58,.68)_42%,rgba(11,31,58,.12)_78%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(11,31,58,.72)_0%,rgba(11,31,58,.12)_58%)] sm:hidden" />

      <div className="container relative z-10 pb-16 pt-28 sm:pb-0 sm:pt-20">
        <div className="max-w-[760px]">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-0.5 w-10 bg-teal" aria-hidden="true" />
            <p className="text-[11px] font-bold uppercase tracking-[.18em] text-white/90">
              Melbourne&apos;s west
            </p>
          </div>

          <h1 className="max-w-[720px] font-serif text-[clamp(2.8rem,6vw,4.6rem)] font-normal leading-[.98] tracking-[-.025em]">
            Your One-Stop Property Solution
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg md:text-xl">
            Sales, leasing and property management led directly by principals
            Navin Chugh and Yogesh Bhatia.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#appraisal">Book a Free Appraisal</Button>
            <Button
              href="#properties"
              variant="outline"
              className="border-white text-white hover:border-white hover:bg-white hover:text-navy"
            >
              View Property
            </Button>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/25 pt-5 text-sm text-white/75">
            <span>Direct principal service</span>
            <span className="hidden h-1 w-1 bg-teal sm:block" />
            <a
              href={"tel:" + site.contact.phones[0].replace(/\s/g, "")}
              className="font-bold text-white hover:underline"
            >
              {site.contact.phones[0]}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
