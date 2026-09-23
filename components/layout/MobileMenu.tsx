"use client";

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
      className="fixed inset-0 z-[80] bg-navy/45 md:hidden"
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
        className="ml-auto flex h-full w-[88%] max-w-sm flex-col overflow-y-auto bg-[#fffaf2] px-5 pb-[calc(20px+env(safe-area-inset-bottom))] pt-[calc(20px+env(safe-area-inset-top))] text-navy"
      >
        <div className="flex items-center justify-between border-b border-line pb-4">
          <span className="font-serif text-2xl">WoodRidge</span>
          <button
            type="button"
            onClick={onClose}
            className="min-h-11 min-w-11 text-2xl"
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        <nav className="mt-4 flex flex-col">
          {site.nav.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={onClose}
              className="border-b border-line py-3.5 font-medium"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href={"tel:" + site.contact.phones[0].replace(/\s/g, "")}
          className="btn btn--primary mt-6 sm:mt-auto"
        >
          <Phone size={17} />
          Call {site.contact.phones[0]}
        </a>
      </div>
    </div>
  );
}
