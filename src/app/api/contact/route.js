import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { firstName, lastName, phoneNumber, subject, email, message } = body;
    console.log("body: " + JSON.stringify(body));

    if (
      !firstName ||
      !lastName ||
      !phoneNumber ||
      !subject ||
      !email ||
      !message
    ) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "mail.globalitcon.com", // Replace with your BigRock SMTP server
      port: 587, // Use 587 for TLS or 465 for SSL
      secure: false, // Use true for port 465, false for 587
      auth: {
        user: process.env.EMAIL_USER, // Your BigRock email
        pass: process.env.EMAIL_PASS, // Your BigRock email password
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Contact Form Submission: ${subject}`,
      text: message,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 20px; border-radius: 5px;">
          <div style="text-align: center; padding-bottom: 20px;">
            <p  style="font-size: 25px; font-weight: bold;">GlobalITCon</p>
          </div>
          <h2 style="color: #0056b3; text-align: center;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Phone Number:</strong> ${phoneNumber}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <hr>
          <footer style="text-align: center; font-size: 12px; color: #777;">
            <p>&copy; ${new Date().getFullYear()} GlobalITCon. All rights reserved.</p>
          </footer>
        </div>
      `,
    });

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error sending message.", error: error.message },
      { status: 500 }
    );
  }
}
