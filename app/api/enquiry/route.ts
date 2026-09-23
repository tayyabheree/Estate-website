import { NextResponse } from "next/server";
import { z } from "zod";

const enquirySchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(8),
  email: z.string().email(),
  suburb: z.string().min(2),
  interest: z.enum(["Sell", "Lease", "Manage", "Invest"]),
  message: z.string().max(1000).optional()
});

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const enquiry = enquirySchema.parse(body);

    // TODO: Replace this stub with Resend, SMTP or the client's CRM/webhook.
    console.info("WoodRidge appraisal enquiry", enquiry);

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { ok: false, error: "Invalid enquiry", fields: error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { ok: false, error: "Unable to process enquiry" },
      { status: 500 }
    );
  }
}
