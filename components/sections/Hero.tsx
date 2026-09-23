"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { site } from "@/content/site";

const slides = [
  { src: "/images/hero.jpg", position: "object-[62%_center] sm:object-center" },
  { src: "/images/service-sales.jpg", position: "object-center" },
  { src: "/images/service-leasing.jpg", position: "object-center" },
  { src: "/images/service-newhomes.jpg", position: "object-center" }
];

const actions = [
  ["Sell", "#appraisal"],
  ["Lease", "#appraisal"],
  ["Manage", "#services"],
  ["Buy", "#properties"]
] as const;

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-[650px] overflow-hidden bg-navy text-white md:min-h-[720px]">
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

      <div className="absolute inset-0 bg-black/35" />

      <div className="container relative z-10 flex min-h-[650px] items-end pb-[122px] pt-16 md:min-h-[720px] md:pb-[138px]">
        <div className="max-w-[650px]">
          <p className="text-[10px] font-bold uppercase tracking-[.2em] text-white/75">
            WoodRidge Real Estate · Melbourne&apos;s west
          </p>

          <h1 className="mt-4 max-w-[620px] font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-normal leading-[1.08] tracking-[-.035em]">
            Local property, handled end to end.
          </h1>

          <p className="mt-5 max-w-[580px] text-base leading-relaxed text-white/80 sm:text-lg">
            Sales, leasing, management, new homes and investment support with direct
            access to principals Navin Chugh and Yogesh Bhatia.
          </p>

          <a
            href={"tel:" + site.contact.phones[0].replace(/\s/g, "")}
            className="mt-6 inline-flex border-b border-white/55 pb-1 text-sm font-semibold text-white"
          >
            Call {site.contact.phones[0]}
          </a>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-20">
        <div className="container">
          <div className="grid border border-line bg-[#fffdf8] text-ink sm:grid-cols-[1.2fr_repeat(4,1fr)]">
            <div className="hidden min-h-[82px] items-center border-r border-line px-6 sm:flex">
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[.15em] text-brandBlue">
                  What can we help with?
                </span>
                <span className="mt-1 block text-sm text-muted">
                  Start with the property goal.
                </span>
              </div>
            </div>

            {actions.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="flex min-h-[58px] items-center justify-between border-t border-line px-5 text-xs font-bold uppercase tracking-[.11em] transition-colors hover:bg-paper sm:min-h-[82px] sm:border-l sm:border-t-0"
              >
                {label}
                <span aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
