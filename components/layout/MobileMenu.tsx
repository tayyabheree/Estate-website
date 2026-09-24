"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Phone } from "lucide-react";
import { site } from "@/content/site";

export function MobileMenu({
  open,
  onClose
}: {
  open: boolean;
  onClose: () => void;
}) {
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const previous = document.activeElement as HTMLElement | null;
    const node = panel.current;
    if (!node) return;

    const focusable = Array.from(
      node.querySelectorAll<HTMLElement>(
        'a,button,[tabindex]:not([tabindex="-1"])'
      )
    );

    focusable[0]?.focus();

    const key = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab" || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", key);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", key);
      document.body.style.overflow = "";
      previous?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] bg-[rgba(16,40,79,.55)] md:hidden"
      role="presentation"
      onMouseDown={(event) => {
        if (event.currentTarget === event.target) onClose();
      }}
    >
      <div
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className="ml-auto flex h-full w-[90%] max-w-sm flex-col overflow-y-auto bg-white px-5 pb-[calc(20px+env(safe-area-inset-bottom))] pt-[calc(20px+env(safe-area-inset-top))] text-navy shadow-2xl"
      >
        <div className="brand-line -mx-5 -mt-5 mb-4" />
        <div className="flex items-center justify-between border-b border-line pb-4">
          <Image
            src="/images/woodridge-real-estate-logo-hd.png"
            alt="WoodRidge Real Estate"
            width={3072}
            height={1512}
            className="h-[48px] w-auto object-contain"
          />
          <button
            type="button"
            onClick={onClose}
            className="min-h-11 min-w-11 text-3xl font-light text-navy"
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        <nav className="mt-4 flex flex-col">
          {site.nav.map(([label, href], index) => (
            <a
              key={href}
              href={href}
              onClick={onClose}
              className="group flex items-center justify-between border-b border-line py-4 font-semibold"
            >
              <span>{label}</span>
              <span className="text-xs font-extrabold tracking-widest text-teal">
                0{index + 1}
              </span>
            </a>
          ))}
        </nav>

        <div className="mt-auto pt-7">
          <p className="mb-3 text-xs leading-relaxed text-muted">
            Speak directly with the WoodRidge team about sales, leasing or management.
          </p>
          <a
            href={"tel:" + site.contact.phones[0].replace(/\s/g, "")}
            className="btn btn--primary w-full"
          >
            <Phone size={17} />
            Call {site.contact.phones[0]}
          </a>
        </div>
      </div>
    </div>
  );
}
