"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

const slides = [
  {
    src: "/images/hero.jpg",
    position: "object-[64%_center] sm:object-center"
  },
  {
    src: "/images/service-sales.jpg",
    position: "object-center"
  },
  {
    src: "/images/service-leasing.jpg",
    position: "object-center"
  },
  {
    src: "/images/service-newhomes.jpg",
    position: "object-center"
  }
];

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reduced.matches) {
      return;
    }

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative flex h-[94svh] min-h-[660px] items-center overflow-hidden bg-[#202a25] text-white sm:h-[100svh] sm:min-h-[700px]"
    >
      <div className="absolute inset-0" aria-hidden="true">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={"hero-slide absolute inset-0 " + (index === active ? "is-active" : "")}
          >
            <Image
              src={slide.src}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              className={"object-cover " + slide.position}
            />
          </div>
        ))}
      </div>

      <div className="hero-overlay absolute inset-0" />

      <div className="container relative z-10 pt-14 sm:pt-20">
        <div className="hero-copy max-w-[820px]">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[.2em] text-[#e4c58d]">
            Melbourne&apos;s west · residential property
          </p>

          <h1 className="max-w-[790px] font-serif text-[clamp(2.65rem,6.4vw,5rem)] font-bold leading-[1.02] tracking-[-.035em]">
            Property handled properly, from first conversation to final handover.
          </h1>

          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-white/85 sm:text-xl">
            Sales, leasing, property management, new homes and investment support
            led directly by Navin Chugh and Yogesh Bhatia.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#appraisal" className="min-h-[54px] px-7">
              Book a Free Appraisal
            </Button>
            <Button
              href="#properties"
              variant="outline"
              className="min-h-[54px] border-white px-7 text-white hover:border-[#fffdf8] hover:bg-[#fffdf8] hover:text-ink"
            >
              View Current Property
            </Button>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/30 pt-5 text-sm text-white/75">
            <span className="font-semibold text-white">Direct principal service</span>
            <span className="hidden h-1 w-1 bg-[#e4c58d] sm:block" />
            <a
              href={"tel:" + site.contact.phones[0].replace(/\s/g, "")}
              className="font-bold text-white hover:underline"
            >
              {site.contact.phones[0]}
            </a>
          </div>

          <div className="mt-7 flex gap-2" aria-label="Hero image position">
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setActive(index)}
                aria-label={"Show hero image " + (index + 1)}
                aria-current={index === active ? "true" : undefined}
                className={
                  "h-1 transition-all " +
                  (index === active
                    ? "w-10 bg-[#e4c58d]"
                    : "w-6 bg-white/45 hover:bg-white/75")
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
