import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export async function POST(req) {
  const { email, subject, message } = await req.json();

  // Create a transporter using SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail',  // or your preferred email service
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // Send email
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER, // Your email where you'll receive messages
      subject: subject,
      text: `Message from: ${email}\n\n${message}`,
      html: `
        <h3>New message from your portfolio</h3>
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
