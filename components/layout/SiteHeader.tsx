"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { MobileMenu } from "./MobileMenu";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActive("#" + visible.target.id);
      },
      { rootMargin: "-35% 0px -55%", threshold: [0, 0.2, 0.6] }
    );

    site.nav.forEach(([, href]) => {
      const element = document.getElementById(href.slice(1));
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="site-header fixed inset-x-0 top-0 z-50 border-b border-line bg-white text-navy shadow-[0_4px_16px_rgba(16,40,79,.06)]">
        <div className="brand-line absolute inset-x-0 top-0" />
        <div className="container flex h-full items-center justify-between">
          <a
            href="#home"
            className="flex min-w-0 items-center"
            aria-label="WoodRidge Real Estate home"
          >
            <Image
              src="/images/woodridge-real-estate-logo-hd.png"
              alt="WoodRidge Real Estate"
              width={3072}
              height={1512}
              priority
              className="h-[48px] w-auto object-contain sm:h-[52px]"
            />
          </a>

          <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
            {site.nav.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className={
                  "relative py-7 text-[10px] font-bold uppercase tracking-[.13em] text-[rgba(16,40,79,.72)] transition-colors hover:text-navy " +
                  (active === href
                    ? "after:absolute after:bottom-[19px] after:left-0 after:h-[3px] after:w-full after:bg-teal"
                    : "")
                }
              >
                {label}
              </a>
            ))}
          </nav>

          <a href="#appraisal" className="header-appraisal btn btn--primary min-h-11 px-5">
            Free Appraisal
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex min-h-11 min-w-11 flex-col items-end justify-center gap-1.5 text-navy lg:hidden"
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <span className="h-[2px] w-7 bg-current" />
            <span className="h-[2px] w-5 bg-teal" />
            <span className="h-[2px] w-7 bg-current" />
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
