import { NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/validators";
import { sendEmail } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = newsletterSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const data = parsed.data;
    await sendEmail({
      to: process.env.NEWSLETTER_EMAIL_TO || "newsletter@ironforgefitness.com",
      from: process.env.EMAIL_FROM || "no-reply@ironforgefitness.com",
      subject: "New Newsletter Signup",
      text: `New subscriber: ${data.email}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Newsletter error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
