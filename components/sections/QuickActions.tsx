import { ArrowRight } from "lucide-react";

const links = [
  { kicker: "01", title: "Sell a property", copy: "Start with a free appraisal and a clear campaign plan.", href: "#appraisal" },
  { kicker: "02", title: "Find a property", copy: "See current and recent WoodRidge activity across Melbourne's west.", href: "#properties" },
  { kicker: "03", title: "Property management", copy: "Leasing and day-to-day management with direct principal oversight.", href: "#services" },
  { kicker: "04", title: "New homes & investment", copy: "Discuss house-and-land, acquisitions and project coordination.", href: "#services" }
];

export function QuickActions() {
  return (
    <section className="border-b border-line bg-[#fffaf2]" aria-label="Property services shortcuts">
      <div className="container grid sm:grid-cols-2 lg:grid-cols-4">
        {links.map((item, index) => (
          <a
            key={item.title}
            href={item.href}
            className={
              "group block py-7 sm:px-6 lg:py-8 " +
              (index > 0 ? "border-t border-line sm:border-t-0 sm:border-l" : "")
            }
          >
            <span className="text-[10px] font-bold tracking-[.18em] text-brandBlue">
              {item.kicker}
            </span>
            <h2 className="mt-2 font-serif text-xl leading-tight text-navy">
              {item.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {item.copy}
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.1em] text-navy">
              Go to section
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
