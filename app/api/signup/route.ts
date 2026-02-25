import { NextResponse } from "next/server";
import { signupSchema } from "@/lib/validators";
import { sendEmail } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = signupSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const data = parsed.data;
    const confirmationId = crypto.randomUUID();

    await sendEmail({
      to: data.email,
      from: process.env.EMAIL_FROM || "no-reply@ironforgefitness.com",
      subject: "Welcome to Iron Forge Fitness",
      text: `Hi ${data.firstName},\n\nWelcome to Iron Forge Fitness! Your registration is confirmed.\nMembership Tier: ${data.membershipTier}\nConfirmation ID: ${confirmationId}\n\nSee you in the Forge!`,
    });

    return NextResponse.json({ success: true, confirmationId });
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
