// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// export async function POST(req) {
//   try {
//     const formData = await req.formData(); // ✅ Read form data
//     const firstName = formData.get("firstName");
//     const lastName = formData.get("lastName");
//     const email = formData.get("email");
//     const address = formData.get("address");
//     const city = formData.get("city");
//     const country = formData.get("country");
//     const zipcode = formData.get("zipcode");
//     const state = formData.get("state");
//     const phoneNumberHome = formData.get("phoneNumberHome");
//     const phoneNumberWork = formData.get("phoneNumberWork");
//     const workAuthorization = formData.get("workAuthorization");
//     const iTExperience = formData.get("iTExperience");
//     const primarySkill = formData.get("primarySkill");
//     const USExperience = formData.get("USExperience");
//     const skillSets = formData.get("skillSets");
//     const resume = formData.get("resume"); // ✅ Get file from FormData

//     if (!resume) {
//       return NextResponse.json(
//         { message: "Resume file is required." },
//         { status: 400 }
//       );
//     }

//     // ✅ Convert file to a buffer
//     const resumeBuffer = await resume.arrayBuffer();
//     const resumeData = Buffer.from(resumeBuffer);

//     // ✅ Setup nodemailer transporter
//     const transporter = nodemailer.createTransport({
//       host: "mail.globalitcon.com", // Replace with your BigRock SMTP server
//       port: 587, // Use 587 for TLS or 465 for SSL
//       secure: false, // Use true for port 465, false for 587
//       auth: {
//         user: process.env.EMAIL_USER, // Your BigRock email
//         pass: process.env.EMAIL_PASS, // Your BigRock email password
//       },
//     });

//     // ✅ Email options with resume attachment
//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: "recipient@example.com", // Change to your recipient email
//       subject: "New Job Application",
//       text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phoneNumberHome}`,
//       attachments: [
//         {
//           filename: resume.name, // ✅ Original file name
//           content: resumeData, // ✅ File buffer
//           contentType: resume.type, // ✅ File MIME type
//         },
//       ],
//     };

//     await transporter.sendMail(mailOptions); // ✅ Send email

//     return NextResponse.json(
//       { message: "Application submitted successfully!" },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error:", error);
//     return NextResponse.json(
//       { message: "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const formData = await req.formData(); // ✅ Read form data
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const address = formData.get("address");
    const city = formData.get("city");
    const country = formData.get("country");
    const zipcode = formData.get("zipcode");
    const state = formData.get("state");
    const phoneNumberHome = formData.get("phoneNumberHome");
    const phoneNumberWork = formData.get("phoneNumberWork");
    const workAuthorization = formData.get("workAuthorization");
    const iTExperience = formData.get("iTExperience");
    const primarySkill = formData.get("primarySkill");
    const USExperience = formData.get("USExperience");
    const skillSets = formData.get("skillSets");
    const resume = formData.get("resume"); // ✅ Get file from FormData

    if (!resume) {
      return NextResponse.json(
        { message: "Resume file is required." },
        { status: 400 }
      );
    }

    // ✅ Convert file to a buffer
    const resumeBuffer = await resume.arrayBuffer();
    const resumeData = Buffer.from(resumeBuffer);

    // ✅ HTML Email Template
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
        <h2 style="color: #2c3e50;">New Job Application Received</h2>
        <p style="font-size: 16px;">Here are the details of the applicant:</p>

        <h3 style="color: #34495e;">Personal Information</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone (Home):</strong> ${phoneNumberHome}</p>
        <p><strong>Phone (Work):</strong> ${phoneNumberWork}</p>

        <h3 style="color: #34495e;">Address</h3>
        <p>${address}, ${city}, ${state}, ${country} - ${zipcode}</p>

        <h3 style="color: #34495e;">Work Experience</h3>
        <p><strong>Work Authorization:</strong> ${workAuthorization}</p>
        <p><strong>IT Experience:</strong> ${iTExperience}</p>
        <p><strong>Primary Skill:</strong> ${primarySkill}</p>
        <p><strong>US Experience:</strong> ${USExperience}</p>
        <p><strong>Skill Sets:</strong> ${skillSets}</p>

        <h3 style="color: #e74c3c;">Resume Attached</h3>
        <p>The applicant's resume is attached to this email.</p>

        <p style="font-size: 14px; color: #7f8c8d;">This email was generated automatically. Please do not reply.</p>
      </div>
    `;

    // ✅ Setup nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "mail.globalitcon.com", // Replace with your BigRock SMTP server
      port: 587, // Use 587 for TLS or 465 for SSL
      secure: false, // Use true for port 465, false for 587
      auth: {
        user: process.env.EMAIL_USER, // Your BigRock email
        pass: process.env.EMAIL_PASS, // Your BigRock email password
      },
    });

    // ✅ Email options with HTML template and resume attachment
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "recipient@example.com", // Change to your recipient email
      subject: "New Job Application - " + firstName + " " + lastName,
      html: htmlContent, // ✅ Use the HTML email template
      attachments: [
        {
          filename: resume.name, // ✅ Original file name
          content: resumeData, // ✅ File buffer
          contentType: resume.type, // ✅ File MIME type
        },
      ],
    };

    await transporter.sendMail(mailOptions); // ✅ Send email

    return NextResponse.json(
      { message: "Application submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
