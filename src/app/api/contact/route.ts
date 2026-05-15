import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

const MAX_FIELD_LENGTH = 500;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+]?[\d\s\-().]{7,20}$/;

const submissions = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW = 60_000;

function sanitize(str: string): string {
  return str
    .replace(/[<>]/g, "")
    .replace(/&/g, "&amp;")
    .trim()
    .slice(0, MAX_FIELD_LENGTH);
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = submissions.get(ip);

  if (!entry || now > entry.resetAt) {
    submissions.set(ip, { count: 1, resetAt: now + RATE_WINDOW });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT;
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const { name, email, phone, projectType, message, honeypot } = body;

    // Honeypot spam check
    if (honeypot) {
      return NextResponse.json({ success: true });
    }

    // Required field validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Email format validation
    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Phone format validation (if provided)
    if (phone && !PHONE_REGEX.test(phone)) {
      return NextResponse.json(
        { error: "Please provide a valid phone number." },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const cleanName = sanitize(name);
    const cleanEmail = sanitize(email);
    const cleanPhone = phone ? sanitize(phone) : null;
    const cleanProjectType = projectType ? sanitize(projectType) : null;
    const cleanMessage = sanitize(message);

    if (!supabase) {
      console.warn("Supabase not configured — logging contact form submission:");
      console.log({
        name: cleanName,
        email: cleanEmail,
        phone: cleanPhone,
        projectType: cleanProjectType,
        message: cleanMessage,
      });
      return NextResponse.json({ success: true });
    }

    const { error } = await supabase.from("contacts").insert([
      {
        name: cleanName,
        email: cleanEmail,
        phone: cleanPhone,
        project_type: cleanProjectType,
        message: cleanMessage,
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Failed to save message." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}
