import { NextRequest, NextResponse } from "next/server";

// Minimal API route for the contact form.
// Wire this up to a real email service (Resend, SendGrid, Nodemailer, etc.)
// before going live — right now it validates input and logs the message.

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body as {
      name?: string;
      email?: string;
      message?: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Name, email and message are all required." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // TODO: replace with a real email/notification integration.
    console.log("New contact message:", { name, email, message });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
