"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { MobileMenu } from "./MobileMenu";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActive("#" + visible.target.id);
        }
      },
      { rootMargin: "-35% 0px -55%", threshold: [0, 0.2, 0.6] }
    );

    site.nav.forEach(([, href]) => {
      const element = document.getElementById(href.slice(1));
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const transparent = !scrolled;

  return (
    <>
      <header
        className={
          "site-header sticky top-0 z-50 h-[72px] transition-colors md:h-[76px] " +
          (scrolled
            ? "border-b border-line bg-[#fffaf2] text-navy"
            : "bg-transparent text-white")
        }
        style={{ marginBottom: "-72px" }}
      >
        <div className="container flex h-full items-center justify-between">
          <a
            href="#home"
            className="min-w-0 leading-none"
            aria-label="WoodRidge Real Estate home"
          >
            <span
              className={
                "block font-serif text-[25px] tracking-[-.02em] " +
                (transparent ? "text-white" : "text-navy")
              }
            >
              WoodRidge
            </span>
            <span className="mt-1 block text-[8px] font-bold tracking-[.31em]">
              REAL ESTATE
            </span>
          </a>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-6 lg:flex"
          >
            {site.nav.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className={
                  "relative py-6 text-[12px] font-bold uppercase tracking-[.08em] " +
                  (active === href
                    ? "after:absolute after:bottom-4 after:left-0 after:h-0.5 after:w-full after:bg-teal"
                    : "")
                }
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href="#appraisal"
            className="header-appraisal btn btn--primary min-h-11 px-4"
          >
            Free Appraisal
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex min-h-11 min-w-11 flex-col items-end justify-center gap-1.5 lg:hidden"
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <span className="h-px w-7 bg-current" />
            <span className="h-px w-5 bg-current" />
            <span className="h-px w-7 bg-current" />
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
