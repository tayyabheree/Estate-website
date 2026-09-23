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
    <section id="home" className="bg-navy text-white">
      <div className="relative min-h-[610px] overflow-hidden md:min-h-[720px]">
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

        <div className="container relative z-10 flex min-h-[610px] items-end pb-12 pt-20 md:min-h-[720px] md:pb-32 md:pt-24">
          <div className="max-w-[650px]">
            <p className="text-[10px] font-bold uppercase tracking-[.2em] text-white/75">
              WoodRidge Real Estate · Melbourne&apos;s west
            </p>

            <h1 className="mt-4 max-w-[620px] font-serif text-[2.4rem] font-normal leading-[1.08] tracking-[-.035em] sm:text-[3.2rem] md:text-[4.3rem]">
              Local property, handled end to end.
            </h1>

            <p className="mt-5 max-w-[560px] text-[15px] leading-[1.65] text-white/80 sm:text-lg">
              Sales, leasing, management, new homes and investment support with direct
              access to principals Navin Chugh and Yogesh Bhatia.
            </p>

            <a
              href={"tel:" + site.contact.phones[0].replace(/\s/g, "")}
              className="mt-5 inline-flex border-b border-white/55 pb-1 text-sm font-semibold text-white"
            >
              Call {site.contact.phones[0]}
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-20 bg-[#fffdf8] text-ink md:-mt-[84px] md:bg-transparent">
        <div className="container">
          <div className="grid grid-cols-2 border border-line bg-[#fffdf8] md:grid-cols-[1.2fr_repeat(4,1fr)]">
            <div className="hidden min-h-[82px] items-center border-r border-line px-6 md:flex">
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[.15em] text-brandBlue">
                  What can we help with?
                </span>
                <span className="mt-1 block text-sm text-muted">
                  Start with the property goal.
                </span>
              </div>
            </div>

            {actions.map(([label, href], index) => (
              <a
                key={label}
                href={href}
                className={
                  "flex min-h-[76px] items-center justify-between px-5 text-xs font-bold uppercase tracking-[.11em] transition-colors hover:bg-paper md:min-h-[82px] md:border-l " +
                  (index >= 2 ? "border-t border-line md:border-t-0 " : "") +
                  (index % 2 === 1 ? "border-l border-line md:border-l" : "")
                }
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
