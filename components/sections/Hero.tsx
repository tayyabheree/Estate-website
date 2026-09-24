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
    <section id="home" className="bg-navy text-white">
      <div className="container grid lg:grid-cols-12">
        <div className="flex min-h-[560px] items-center py-14 sm:min-h-[610px] lg:col-span-6 lg:min-h-[680px] lg:py-20 lg:pr-12">
          <div className="max-w-[650px]">
            <p className="border-l-4 border-teal pl-4 text-[10px] font-bold uppercase tracking-[.17em] text-white/80">
              Principal-led real estate · Melbourne&apos;s west
            </p>

            <h1 className="hero-signal mt-7 max-w-[640px] font-serif text-[2.55rem] font-bold leading-[1.08] tracking-[-.035em] sm:text-[3.15rem] lg:text-[3.9rem]">
              Property decisions deserve senior attention.
            </h1>

            <p className="mt-6 max-w-[590px] text-[16px] leading-[1.7] text-white/75 sm:text-[18px]">
              Work directly with Navin Chugh and Yogesh Bhatia across sales, leasing,
              property management, new homes and investment throughout Melbourne&apos;s west.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#appraisal" className="btn btn--primary min-h-[52px] px-7">
                Book a Free Appraisal
                <ArrowUpRight size={16} />
              </a>
              <a
                href={tel}
                className="btn min-h-[52px] border border-white/50 bg-transparent px-7 text-white hover:border-white hover:bg-white hover:text-navy"
              >
                <Phone size={16} />
                {primaryPhone}
              </a>
            </div>

            <div className="mt-10 grid max-w-[580px] grid-cols-3 border-t border-white/20 pt-5">
              {[
                ["Local", "Western suburbs"],
                ["Direct", "Principal access"],
                ["Connected", "Sales to management"]
              ].map(([top, bottom], index) => (
                <div
                  key={top}
                  className={"min-w-0 px-3 first:pl-0 " + (index > 0 ? "border-l border-white/20" : "")}
                >
                  <span className="block text-[10px] font-bold uppercase tracking-[.15em] text-teal">
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

        <div className="relative min-h-[430px] overflow-hidden border-l border-white/10 lg:col-span-6 lg:min-h-[680px]">
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

          <div className="absolute bottom-0 left-0 z-10 w-full border-t-4 border-teal bg-white p-5 text-navy sm:w-[360px]">
            <p className="text-[9px] font-bold uppercase tracking-[.17em] text-brandBlue">
              WoodRidge approach
            </p>
            <p className="mt-2 font-serif text-lg font-bold leading-snug">
              Clear advice. Direct accountability. No hand-offs.
            </p>
          </div>

          <div className="absolute right-5 top-5 z-10 flex gap-2 bg-navy p-3 sm:right-7 sm:top-7">
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setActive(index)}
                className={
                  "h-[3px] transition-all " +
                  (index === active ? "w-8 bg-teal" : "w-5 bg-white/60")
                }
                aria-label={"Show hero image " + (index + 1)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-brandBlue">
        <div className="container grid grid-cols-2 lg:grid-cols-4">
          {actions.map(([label, detail, href], index) => (
            <a
              key={label}
              href={href}
              className={
                "group flex min-h-[92px] items-center justify-between gap-3 border-white/20 px-4 py-4 transition-colors hover:bg-navy sm:px-6 " +
                (index % 2 === 1 ? "border-l " : "") +
                (index >= 2 ? "border-t lg:border-t-0 " : "") +
                (index > 0 ? "lg:border-l" : "")
              }
            >
              <span>
                <span className="block text-[11px] font-bold uppercase tracking-[.15em] text-white">
                  {label}
                </span>
                <span className="mt-1 block text-xs text-white/70">{detail}</span>
              </span>
              <ArrowUpRight size={17} className="shrink-0 text-white" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
