"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { site } from "@/content/site";
import { FormField } from "@/components/ui/FormField";
import { Reveal } from "@/components/ui/Reveal";

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
    <section id="offers" className="bg-white">
      <Reveal>
        <div className="relative min-h-[330px] overflow-hidden bg-navy sm:min-h-[390px]">
          <Image
            src="/images/appraisal-bg.jpg"
            alt="Melbourne residential street at twilight"
            fill
            sizes="100vw"
            className="object-cover opacity-40"
          />

          <div className="container relative z-10 flex min-h-[330px] items-center py-12 text-white sm:min-h-[390px] sm:py-16">
            <div className="max-w-[760px] border-l-4 border-teal pl-6">
              <p className="text-[10px] font-bold uppercase tracking-[.18em] text-white">
                Free property appraisal
              </p>
              <h2 className="mt-4 font-serif text-[clamp(2rem,3.5vw,3.2rem)] font-bold leading-[1.14] tracking-[-.03em]">
                Better property decisions start with a clear view of value.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
                Get a no-obligation appraisal and speak directly with the WoodRidge principals.
              </p>
              <a href="#appraisal" className="btn btn--primary mt-7">
                Request an appraisal
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="section section--alt">
        <div className="container grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="section-label">Current offers</p>
            <h2 className="font-serif text-[clamp(1.95rem,2.9vw,2.65rem)] font-bold leading-[1.16] tracking-[-.03em] text-navy">
              Useful incentives, with the important details kept clear.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Ask the team about current seller and property-management offers when you enquire.
            </p>

            <div className="mt-8 border-t-4 border-brandBlue">
              {site.offers.map((offer, index) => (
                <article key={offer.title} className="grid grid-cols-[44px_1fr] gap-4 border-b border-line bg-white px-4 py-5">
                  <span className="pt-1 text-[10px] font-bold tracking-[.15em] text-brandBlue">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-bold leading-tight text-navy">
                      {offer.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {offer.terms}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7">
            <div
              id="appraisal"
              className="soft-panel min-w-0 border-t-4 border-t-teal bg-white p-5 sm:p-9"
            >
              <div className="border-b border-line pb-5">
                <p className="text-[10px] font-bold uppercase tracking-[.16em] text-brandBlue">
                  No obligation
                </p>
                <h2 className="mt-2 font-serif text-3xl font-bold leading-tight tracking-[-.025em] text-navy">
                  Book a free appraisal
                </h2>
              </div>

              <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted">
                Tell us the property and what you are considering. The form prepares an email
                directly to Navin and Yogesh.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="mt-7 grid min-w-0 gap-4 sm:grid-cols-2 sm:gap-5">
                <FormField label="Name" id="name" register={register("name")} error={errors.name} />
                <FormField label="Phone" id="phone" type="tel" register={register("phone")} error={errors.phone} />
                <FormField label="Email" id="email" type="email" register={register("email")} error={errors.email} />
                <FormField label="Suburb / address" id="suburb" register={register("suburb")} error={errors.suburb} />

                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-sm font-bold text-navy">I&apos;m interested in</span>
                  <select
                    {...register("interest")}
                    className="min-h-12 w-full border border-line bg-white px-4 text-ink focus:border-teal"
                  >
                    <option>Sell</option>
                    <option>Lease</option>
                    <option>Manage</option>
                    <option>Invest</option>
                  </select>
                </label>

                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-sm font-bold text-navy">
                    Message <span className="font-normal text-muted">(optional)</span>
                  </span>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className="w-full border border-line bg-white p-4 text-ink focus:border-teal"
                  />
                  {errors.message && (
                    <span className="mt-1 block text-sm text-[#9A3F45]">
                      {errors.message.message}
                    </span>
                  )}
                </label>

                <div className="sm:col-span-2">
                  <button className="btn btn--primary w-full sm:w-auto" type="submit">
                    Request My Appraisal
                    <ArrowUpRight size={15} />
                  </button>
                  {prepared && (
                    <p role="status" className="mt-4 text-sm font-bold text-navy">
                      Your email app should now be open with the enquiry ready to send.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
