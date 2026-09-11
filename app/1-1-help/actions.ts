"use server";

import { Resend } from "resend";
import { INDUSTRIES } from "@/lib/industries";

export type HelpFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const VALID_INDUSTRY_LABELS = [...INDUSTRIES.map((i) => i.name), "Other"];

export async function sendHelpRequest(
  _prevState: HelpFormState,
  formData: FormData,
): Promise<HelpFormState> {
  // Honeypot: real visitors never fill this in.
  if (formData.get("company")) {
    return { status: "success" };
  }

  const name = formData.get("name")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const businessName = formData.get("businessName")?.toString().trim() ?? "";
  const industry = formData.get("industry")?.toString().trim() ?? "";
  const problem = formData.get("problem")?.toString().trim() ?? "";
  const triedGuides = formData.get("triedGuides")?.toString().trim() ?? "";
  const contactPreference =
    formData.get("contactPreference")?.toString().trim() ?? "";

  if (!name || !email || !businessName || !industry || !problem) {
    return {
      status: "error",
      message: "Please fill in every required field.",
    };
  }

  if (!EMAIL_PATTERN.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  if (!VALID_INDUSTRY_LABELS.includes(industry)) {
    return { status: "error", message: "Please choose a valid industry." };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const bodyLines = [
    `From: ${name} <${email}>`,
    `Business: ${businessName}`,
    `Industry: ${industry}`,
    "",
    "What they're trying to work through:",
    problem,
  ];

  if (triedGuides) {
    bodyLines.push("", "Guides already tried:", triedGuides);
  }

  if (contactPreference) {
    bodyLines.push("", `Best way/time to reach them: ${contactPreference}`);
  }

  try {
    const { error } = await resend.emails.send({
      from: "NextGen Tools <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `[1:1 Help Request] ${name} — ${businessName}`,
      text: bodyLines.join("\n"),
    });

    if (error) {
      return {
        status: "error",
        message: "Something went wrong. Please try again in a moment.",
      };
    }

    return { status: "success" };
  } catch {
    return {
      status: "error",
      message: "Something went wrong. Please try again in a moment.",
    };
  }
}
