import nodemailer from "nodemailer";
import { type InsertContact } from "@shared/schema";

interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

// Check if email configuration is present
const hasEmailConfig =
  process.env.EMAIL_HOST &&
  process.env.EMAIL_USER &&
  process.env.EMAIL_PASS;

let transporter: nodemailer.Transporter | null = null;

if (hasEmailConfig) {
  transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || "587"),
    secure: process.env.EMAIL_SECURE === "true", // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
}

/**
 * Sends a notification email for a new contact form submission.
 * If email is not configured, logs the message to console instead.
 */
export async function sendContactEmail(contact: InsertContact): Promise<boolean> {
  const { name, email, subject, message } = contact;

  const emailContent = `
    New Contact Form Submission

    Name: ${name}
    Email: ${email}
    Subject: ${subject}

    Message:
    ${message}
  `;

  if (!transporter) {
    console.log("Email configuration missing. Logging email content instead:");
    console.log("----------------------------------------");
    console.log(emailContent);
    console.log("----------------------------------------");
    return true; // Return true as we successfully "handled" it by logging
  }

  try {
    // Determine where to send the email.
    // In a real app this might go to the site owner.
    // We'll default to the EMAIL_USER if not specified otherwise.
    const recipient = process.env.EMAIL_TO || process.env.EMAIL_USER;

    if (!recipient) {
      throw new Error("No recipient email configured (EMAIL_TO or EMAIL_USER)");
    }

    await transporter.sendMail({
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER, // Sender address
      to: recipient, // List of receivers
      replyTo: email, // Set reply-to as the person who filled the form
      subject: `Portfolio Contact: ${subject}`, // Subject line
      text: emailContent, // Plain text body
      // html: ... // Could add HTML version later
    });

    console.log(`Contact email sent successfully to ${recipient}`);
    return true;
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return false;
  }
}
