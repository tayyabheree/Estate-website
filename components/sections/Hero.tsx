"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

const slides = [
  { src: "/images/hero.jpg", position: "object-[64%_center] sm:object-center" },
  { src: "/images/service-sales.jpg", position: "object-center" },
  { src: "/images/service-leasing.jpg", position: "object-center" },
  { src: "/images/service-newhomes.jpg", position: "object-center" }
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
      className="relative min-h-[780px] overflow-hidden bg-[#202a25] text-white sm:flex sm:min-h-[700px] sm:h-[100svh] sm:items-center"
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

      <div className="container relative z-10 pb-12 pt-[132px] sm:py-24">
        <div className="hero-copy max-w-[760px]">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[.2em] text-[#e4c58d] sm:text-[11px]">
            Melbourne&apos;s west
          </p>

          <h1 className="max-w-[720px] font-serif text-[2.45rem] font-bold leading-[1.07] tracking-[-.035em] sm:text-[clamp(3rem,6vw,4.75rem)]">
            Property handled properly.
          </h1>

          <p className="mt-5 max-w-[620px] text-[17px] leading-[1.65] text-white/88 sm:mt-6 sm:text-xl">
            Sales, leasing, property management, new homes and investment support —
            with Navin Chugh and Yogesh Bhatia involved directly.
          </p>

          <p className="mt-4 max-w-[560px] text-sm leading-relaxed text-white/68 sm:text-base">
            One local team for the practical work before, during and after a property decision.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
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

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/30 pt-4 text-sm text-white/75 sm:mt-7 sm:pt-5">
            <span className="font-semibold text-white">Direct principal service</span>
            <span className="hidden h-1 w-1 bg-[#e4c58d] sm:block" />
            <a
              href={"tel:" + site.contact.phones[0].replace(/\s/g, "")}
              className="font-bold text-white hover:underline"
            >
              {site.contact.phones[0]}
            </a>
          </div>

          <div className="mt-6 flex gap-2" aria-label="Hero image position">
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
