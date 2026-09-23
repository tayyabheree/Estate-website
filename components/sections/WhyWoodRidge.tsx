import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const principles = [
  {
    number: "01",
    title: "Integrity & transparency",
    copy:
      "Clear communication, practical advice and straightforward conversations from the first meeting onward."
  },
  {
    number: "02",
    title: "Professional service",
    copy:
      "Careful presentation, responsive communication and attention to the details that shape a property result."
  },
  {
    number: "03",
    title: "Modern property thinking",
    copy:
      "Digital marketing, current market information and efficient systems used where they genuinely improve the process."
  },
  {
    number: "04",
    title: "End-to-end support",
    copy:
      "Sales, leasing, management, finance coordination, construction and maintenance can stay connected through one team."
  }
];

export function WhyWoodRidge() {
  return (
    <section className="section section--dark" aria-labelledby="why-woodridge">
      <div className="container grid gap-12 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              label="Why WoodRidge"
              title="One team, from the first decision to the final handover."
              light
            />
            <p className="mt-7 max-w-md text-base leading-relaxed text-white/70">
              WoodRidge combines agency services with broader property support, so clients
              can keep fewer moving parts and deal directly with the people leading the work.
            </p>

            <div className="mt-9 border-l-2 border-teal pl-5 text-sm leading-relaxed text-white/65">
              Finance coordination · Construction · Property management · Maintenance
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          {principles.map((principle, index) => (
            <Reveal key={principle.number}>
              <article
                className={
                  "grid gap-4 border-white/20 py-7 sm:grid-cols-[72px_1fr] " +
                  (index === 0 ? "border-t" : "border-t")
                }
              >
                <p className="text-xs font-bold tracking-[.14em] text-teal">
                  {principle.number}
                </p>
                <div>
                  <h3 className="font-serif text-2xl leading-tight text-white sm:text-3xl">
                    {principle.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/65">
                    {principle.copy}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
