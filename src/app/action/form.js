"use server";
import contactFormSchema from "@/app/Components/ContactInfo/contactFormSchema";
import { z } from "zod";
import { Resend } from "resend";
const resend = new Resend("re_8HdfNoHb_BYGGgFKE2ZcKDVo2Mr1cxms1");

export async function submitContactForm(formData) {
  console.log("form submitted data: " + JSON.stringify(formData));
  // Convert FormData to an object
  const formObject = Object.fromEntries(formData.entries());

  // Validate form data with Zod
  const validationResult = contactFormSchema.safeParse(formObject);

  if (!validationResult.success) {
    return {
      success: false,
      errors: validationResult.error.flatten().fieldErrors,
    };
  }

  try {
    // ✅ Send Email via Resend
    const emailResponse = await resend.emails.send({
      from: "056shubham@gmail.com", // Change to a verified domain email
      to: ["056shubham@gmail.com"], // Admin email to receive contact requests
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formObject.firstName}</p>
        <p><strong>Email:</strong> ${formObject.email}</p>
        <p><strong>Phone:</strong> ${formObject.phoneNumber}</p>
        <p><strong>Message:</strong> ${formObject.message}</p>
      `,
    });

    if (emailResponse.error) throw new Error(emailResponse.error);

    return {
      success: true,
      message: "Your message has been sent successfully!",
    };
  } catch (error) {
    console.error("Email send error:", error);
    return {
      success: false,
      errors: { server: ["Failed to send email. Please try again."] },
    };
  }
}
