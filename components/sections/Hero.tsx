"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
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

  const primaryPhone = site.contact.phones[0];
  const tel = "tel:" + primaryPhone.replace(/\s/g, "");

  return (
    <section id="home" className="bg-navy text-white">
      <div className="relative min-h-[560px] overflow-hidden sm:min-h-[610px] md:min-h-[650px]">
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

        <div className="absolute inset-0 bg-black/40" />

        <div className="container relative z-10 flex min-h-[560px] items-center pb-10 pt-12 sm:min-h-[610px] sm:pb-14 sm:pt-16 md:min-h-[650px] md:pb-24 md:pt-20">
          <div className="max-w-[620px] -translate-y-3 sm:-translate-y-5 md:-translate-y-7">
            <p className="text-[10px] font-bold uppercase tracking-[.2em] text-white/75">
              WoodRidge Real Estate · Melbourne&apos;s west
            </p>

            <h1 className="mt-3 max-w-[600px] font-serif text-[2.5rem] font-normal leading-[1.08] tracking-[-.03em] sm:text-[3.05rem] md:text-[3.8rem]">
              Sell, lease or manage your property with a local team.
            </h1>

            <p className="mt-4 max-w-[560px] text-[15px] leading-[1.6] text-white/82 sm:text-[17px]">
              Direct support from Navin Chugh and Yogesh Bhatia across sales, leasing,
              property management, new homes and investment.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="#appraisal"
                className="btn btn--primary min-h-[52px] px-6"
              >
                Book a Free Appraisal
              </a>
              <a
                href={tel}
                className="btn min-h-[52px] border border-white bg-transparent px-6 text-white hover:bg-white hover:text-ink"
              >
                <Phone size={16} />
                Call Now
              </a>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-white/62">
              No obligation. Speak directly with the principals about your property.
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-20 bg-[#fffdf8] text-ink md:-mt-[74px] md:bg-transparent">
        <div className="container">
          <div className="grid grid-cols-2 border border-line bg-[#fffdf8] md:grid-cols-[1.2fr_repeat(4,1fr)]">
            <div className="hidden min-h-[74px] items-center border-r border-line px-6 md:flex">
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
                  "flex min-h-[64px] items-center justify-between px-4 text-[11px] font-bold uppercase tracking-[.1em] transition-colors hover:bg-paper sm:px-5 md:min-h-[74px] md:border-l " +
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
