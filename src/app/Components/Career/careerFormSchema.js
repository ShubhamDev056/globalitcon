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

  zipcode: z.string().regex(/^\d{6}$/, "Pincode must be a 6-digit number"),

  state: z
    .string()
    .min(1, { message: "State is required" })
    .min(3, { message: "State should be at least 3 characters" }),

  phoneNumberHome: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^\d+$/, "Phone number must contain only numbers"), // Indian number validation

  phoneNumberWork: z
    .string()
    .regex(
      /^[6-9]\d{9}$/,
      "Phone number must be a 10-digit starting with 6, 7, 8, or 9"
    ), // Indian number validation

  workAuthorization: z
    .string()
    .min(1, { message: "Work Authorization is required" })
    .min(5, { message: "Work Authorization must be at least 5 characters" }),

  iTExperience: z
    .string()
    .min(1, { message: "IT Experience is required" })
    .min(5, { message: "IT Experience must be at least 5 characters" }),

  primarySkill: z
    .string()
    .min(1, { message: "IT Experience is required" })
    .min(5, { message: "IT Experience must be at least 5 characters" }),

  USExperience: z
    .string()
    .min(1, { message: "US Experience is required" })
    .min(5, { message: "US Experience must be at least 5 characters" }),

  skillSets: z
    .string()
    .min(1, { message: "Skill Sets is required" })
    .min(5, { message: "Skill Sets must be at least 5 characters" }),

  resume: z
    .instanceof(FileList)
    .refine((files) => files.length > 0, "Resume is required")
    .refine(
      (files) => files[0]?.size <= 2 * 1024 * 1024, // 2MB max file size
      "File must be smaller than 2MB"
    )
    .refine(
      (files) =>
        [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ].includes(files[0]?.type),
      "Only PDF or Word documents are allowed"
    ),
});

export default careerFormSchema;
