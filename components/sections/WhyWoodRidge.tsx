import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const principles = [
  {
    number: "01",
    title: "Straight conversations",
    copy:
      "Clear advice on what is happening, what needs attention and what the next step is."
  },
  {
    number: "02",
    title: "The details are followed through",
    copy:
      "From presentation and enquiries to paperwork and follow-up, the small details are treated as part of the job."
  },
  {
    number: "03",
    title: "Digital where it helps",
    copy:
      "Online marketing and current market information are used to make the process clearer and more efficient, not more complicated."
  },
  {
    number: "04",
    title: "More than the agency transaction",
    copy:
      "When required, finance coordination, construction and maintenance can stay connected to the same property plan."
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
              title="A practical way to run property matters."
              light
            />
            <p className="mt-7 max-w-md text-base leading-relaxed text-white/70">
              The agency model is deliberately hands-on. Clients can speak to the principals, keep related work connected and avoid being passed between separate providers.
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
