import { z } from "zod";

const indianPhoneRegex = /^[6-9]\d{9}$/; // Matches numbers starting with 6-9 and exactly 10 digits
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Standard email validation

const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: "First name is required" }) // Required validation
    .min(3, { message: "First name should be at least 3 characters" }), // Length validation

  lastName: z
    .string()
    .min(1, { message: "Last name is required" })
    .min(3, { message: "Last name should be at least 3 characters" }),

  email: z
    .string()
    .min(1, { message: "Email is required" })
    .regex(emailRegex, "Please enter valid email format"), // Custom regex for better validation

  phoneNumber: z
    .string()
    .min(10, { message: "Phone number must be 10 digits" })
    .max(10, { message: "Phone number must be 10 digits" })
    .regex(indianPhoneRegex, "Invalid Indian phone number"), // Indian number validation

  subject: z
    .string()
    .min(1, { message: "Subject is required" })
    .min(5, { message: "Subject must be at least 5 characters" }),

  message: z
    .string()
    .min(1, { message: "Message is required" })
    .min(25, { message: "Message must be at least 25 characters" }),
});

export default contactFormSchema;
