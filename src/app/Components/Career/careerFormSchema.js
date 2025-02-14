import { z } from "zod";

const indianPhoneRegex = /^[6-9]\d{9}$/; // Matches numbers starting with 6-9 and exactly 10 digits
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Standard email validation

const careerFormSchema = z.object({
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

  address: z
    .string()
    .min(1, { message: "Address is required" })
    .min(3, { message: "Address should be at least 3 characters" }),

  city: z
    .string()
    .min(1, { message: "City is required" })
    .min(3, { message: "City should be at least 3 characters" }),

  country: z
    .string()
    .min(1, { message: "Country is required" })
    .min(3, { message: "Country should be at least 3 characters" }),

  zipcode: z.coerce
    .number() // Force it to be a number
    .int() // Make sure it's an integer
    .gte(6) // Greater than or equal to the smallest 5 digit int
    .lte(6), // Less than or equal to the largest 5 digit int

  // .number({
  //   required_error: "Zipcode is required",
  //   invalid_type_error: "Zipcode must be a number",
  // })
  // .gte(6)
  // .lte(6),

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

export default careerFormSchema;
