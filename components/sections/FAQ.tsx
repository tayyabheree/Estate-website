import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const faqs = [
  {
    question: "Do you handle both sales and rentals?",
    answer:
      "Yes. WoodRidge works across residential sales, leasing and ongoing property management, so owners can keep those services with one agency."
  },
  {
    question: "Can WoodRidge help with new homes and house-and-land packages?",
    answer:
      "Yes. The team can assist with new-home and house-and-land options, including broader project coordination where required."
  },
  {
    question: "Do you work with property investors?",
    answer:
      "Yes. WoodRidge supports investors with acquisitions, leasing, management and project coordination across the property lifecycle."
  },
  {
    question: "How do I request a property appraisal?",
    answer:
      "Use the appraisal form on this page or call 0470 378 505. A WoodRidge principal will follow up directly."
  }
];

export function FAQ() {
  return (
    <section className="section section--alt" aria-labelledby="faq-heading">
      <div className="container grid gap-12 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              label="Common questions"
              title="A few things clients usually ask first"
            />
          </div>
        </Reveal>

        <Reveal className="lg:col-span-8">
          <div className="border-t border-line">
            {faqs.map((item) => (
              <details key={item.question} className="group border-b border-line">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-serif text-xl leading-tight text-navy marker:content-none sm:text-2xl">
                  <span>{item.question}</span>
                  <span
                    aria-hidden="true"
                    className="text-2xl font-light text-brandBlue transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-2xl pb-6 pr-10 text-sm leading-relaxed text-muted">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
