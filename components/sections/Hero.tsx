"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUpRight, Phone } from "lucide-react";
import { site } from "@/content/site";

const slides = [
  { src: "/images/hero.jpg", position: "object-[62%_center] sm:object-center" },
  { src: "/images/service-sales.jpg", position: "object-center" },
  { src: "/images/service-leasing.jpg", position: "object-center" },
  { src: "/images/service-newhomes.jpg", position: "object-center" }
];

const actions = [
  ["Sell", "Start with value", "#appraisal"],
  ["Lease", "Find the right tenant", "#appraisal"],
  ["Manage", "Protect the asset", "#services"],
  ["Buy", "Explore opportunities", "#properties"]
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

  const primaryPhone = site.contact.phones[0];
  const tel = "tel:" + primaryPhone.replace(/\s/g, "");

  return (
    <section id="home" className="relative overflow-hidden bg-navy text-white">
      <div className="brand-grid-bg absolute inset-y-0 left-0 hidden w-[58%] lg:block" />

      <div className="container relative grid lg:grid-cols-12">
        <div className="relative z-10 flex min-h-[560px] items-center py-14 sm:min-h-[610px] lg:col-span-6 lg:min-h-[680px] lg:py-20 lg:pr-10">
          <div className="max-w-[650px]">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[.06] px-4 py-2 text-[10px] font-extrabold uppercase tracking-[.18em] text-white/78">
              <span className="h-2 w-2 rounded-full bg-teal" />
              Principal-led real estate · Melbourne&apos;s west
            </div>

            <h1 className="hero-signal mt-7 max-w-[640px] font-serif text-[2.65rem] font-normal leading-[1.04] tracking-[-.045em] sm:text-[3.35rem] lg:text-[4.15rem]">
              Property decisions deserve senior attention.
            </h1>

            <p className="mt-6 max-w-[590px] text-[16px] leading-[1.7] text-white/74 sm:text-[18px]">
              Work directly with Navin Chugh and Yogesh Bhatia across sales, leasing,
              property management, new homes and investment throughout Melbourne&apos;s west.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#appraisal" className="btn btn--primary min-h-[54px] px-7">
                Book a Free Appraisal
                <ArrowUpRight size={16} />
              </a>
              <a
                href={tel}
                className="btn min-h-[54px] border border-white/45 bg-white/[.04] px-7 text-white hover:border-white hover:bg-white hover:text-navy"
              >
                <Phone size={16} />
                {primaryPhone}
              </a>
            </div>

            <div className="mt-10 grid max-w-[560px] grid-cols-3 gap-4 border-t border-white/14 pt-5">
              {[
                ["Local", "Western suburbs"],
                ["Direct", "Principal access"],
                ["Connected", "Sales to management"]
              ].map(([top, bottom]) => (
                <div key={top} className="min-w-0">
                  <span className="block text-[10px] font-extrabold uppercase tracking-[.16em] text-[#62ddd3]">
                    {top}
                  </span>
                  <span className="mt-1 block text-xs leading-snug text-white/60">
                    {bottom}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-visual relative min-h-[430px] overflow-hidden lg:col-span-6 lg:min-h-[680px]">
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
                  sizes="(max-width:1024px) 100vw,55vw"
                  className={"object-cover " + slide.position}
                />
              </div>
            ))}
          </div>

          <div className="absolute bottom-5 left-5 z-10 max-w-[290px] border-l-4 border-teal bg-white/95 p-5 text-navy shadow-2xl backdrop-blur sm:bottom-7 sm:left-7">
            <p className="text-[9px] font-extrabold uppercase tracking-[.18em] text-brandBlue">
              WoodRidge approach
            </p>
            <p className="mt-2 font-serif text-xl leading-tight">
              Clear advice. Direct accountability. No hand-offs.
            </p>
          </div>

          <div className="absolute right-5 top-5 z-10 flex gap-1.5 sm:right-7 sm:top-7">
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setActive(index)}
                className={
                  "h-1.5 rounded-full transition-all " +
                  (index === active ? "w-8 bg-teal" : "w-3 bg-white/65")
                }
                aria-label={"Show hero image " + (index + 1)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#0d2345]">
        <div className="container grid grid-cols-2 lg:grid-cols-4">
          {actions.map(([label, detail, href], index) => (
            <a
              key={label}
              href={href}
              className={
                "group flex min-h-[92px] items-center justify-between gap-3 border-white/10 px-4 py-4 transition-colors hover:bg-white/[.06] sm:px-6 " +
                (index % 2 === 1 ? "border-l " : "") +
                (index >= 2 ? "border-t lg:border-t-0 " : "") +
                (index > 0 ? "lg:border-l" : "")
              }
            >
              <span>
                <span className="block text-[11px] font-extrabold uppercase tracking-[.16em] text-white">
                  {label}
                </span>
                <span className="mt-1 block text-xs text-white/48">{detail}</span>
              </span>
              <ArrowUpRight
                size={17}
                className="shrink-0 text-teal transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
