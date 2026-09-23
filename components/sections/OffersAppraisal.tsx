"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { site } from "@/content/site";
import { FormField } from "@/components/ui/FormField";
import { SectionHeading } from "@/components/ui/SectionHeading";

const schema = z.object({
  name: z.string().min(2, "Please enter your name."),
  phone: z.string().min(8, "Please enter a valid phone number."),
  email: z.string().email("Please enter a valid email."),
  suburb: z.string().min(2, "Please enter a suburb or address."),
  interest: z.enum(["Sell", "Lease", "Manage", "Invest"]),
  message: z.string().max(1000, "Please keep the message under 1000 characters.").optional()
});

type Values = z.infer<typeof schema>;

export function OffersAppraisal() {
  const [prepared, setPrepared] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { interest: "Sell" }
  });

  const onSubmit = (values: Values) => {
    const subject = encodeURIComponent("Free appraisal enquiry — " + values.suburb);
    const body = encodeURIComponent(
      [
        "Hello WoodRidge,",
        "",
        "I would like to request a free property appraisal.",
        "",
        "Name: " + values.name,
        "Phone: " + values.phone,
        "Email: " + values.email,
        "Property / suburb: " + values.suburb,
        "Interested in: " + values.interest,
        "",
        "Message:",
        values.message?.trim() || "No additional message.",
        "",
        "Sent from the WoodRidge website."
      ].join("\n")
    );

    setPrepared(true);
    window.location.href =
      "mailto:" + site.contact.emails.join(",") + "?subject=" + subject + "&body=" + body;
    reset();
  };

  return (
    <section id="offers" className="section section--alt">
      <div className="container grid gap-0 border border-line bg-white lg:grid-cols-12">
        <div className="bg-navy p-7 text-white sm:p-10 lg:col-span-6 lg:p-12">
          <SectionHeading
            label="Appraisal & offers"
            title="Thinking about selling or leasing?"
            light
          />

          <p className="mt-7 max-w-xl text-base leading-relaxed text-white/75">
            Start with a conversation about the property, the timing and what you want to
            achieve. WoodRidge can then recommend the next practical step.
          </p>

          <div className="mt-10">
            {site.offers.map((offer) => (
              <article key={offer.title} className="border-t border-white/20 py-6">
                <h3 className="font-serif text-2xl leading-tight">
                  {offer.title}
                </h3>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/70">
                  {offer.terms}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-6 border-l-2 border-brandBlue pl-5">
            <p className="text-sm font-bold text-white">Prefer to talk first?</p>
            <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm text-white/75">
              {site.contact.phones.map((phone) => (
                <a
                  key={phone}
                  href={"tel:" + phone.replace(/\s/g, "")}
                  className="hover:text-white hover:underline"
                >
                  {phone}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          id="appraisal"
          className="scroll-mt-24 bg-white p-7 text-ink sm:p-10 lg:col-span-6 lg:p-12"
        >
          <p className="text-[11px] font-bold uppercase tracking-[.16em] text-brandBlue">
            No obligation
          </p>
          <h2 className="mt-2 font-serif text-3xl leading-tight text-navy sm:text-4xl">
            Book a free appraisal
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Share the basics below and your email app will prepare the request for WoodRidge.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-7 grid gap-5 sm:grid-cols-2"
          >
            <FormField label="Name" id="name" register={register("name")} error={errors.name} />
            <FormField label="Phone" id="phone" type="tel" register={register("phone")} error={errors.phone} />
            <FormField label="Email" id="email" type="email" register={register("email")} error={errors.email} />
            <FormField label="Suburb / address" id="suburb" register={register("suburb")} error={errors.suburb} />

            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm font-bold">I&apos;m interested in</span>
              <select
                {...register("interest")}
                className="min-h-12 w-full rounded-none border border-line bg-white px-4"
              >
                <option>Sell</option>
                <option>Lease</option>
                <option>Manage</option>
                <option>Invest</option>
              </select>
            </label>

            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm font-bold">
                Message <span className="font-normal text-muted">(optional)</span>
              </span>
              <textarea
                {...register("message")}
                rows={4}
                className="w-full rounded-none border border-line p-4"
              />
              {errors.message && (
                <span className="mt-1 block text-sm text-[#7A3C36]">
                  {errors.message.message}
                </span>
              )}
            </label>

            <div className="sm:col-span-2">
              <button className="btn btn--primary w-full sm:w-auto" type="submit">
                Request My Appraisal
              </button>

              {prepared && (
                <p role="status" className="mt-4 text-sm font-bold text-navy">
                  Your email app should now be open with the enquiry ready to send.
                </p>
              )}

              <p className="mt-4 text-xs leading-relaxed text-muted">
                The form prepares an email to Navin Chugh and Yogesh Bhatia. Your details
                are not stored by this website.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
