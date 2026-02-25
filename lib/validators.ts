import { z } from "zod";

const phoneRegex = /^[0-9+()\-\s]{7,20}$/;

export const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().regex(phoneRegex).optional().or(z.literal("")),
  subject: z.string().min(2),
  message: z.string().min(10),
});

export const newsletterSchema = z.object({
  email: z.string().email(),
});

export const signupSchema = z.object({
  membershipTier: z.enum(["basic", "premium", "elite"]),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().regex(phoneRegex),
  dateOfBirth: z.string().min(4),
  address: z.string().min(5),
  city: z.string().min(2),
  state: z.string().min(2),
  zipCode: z.string().min(4),
  emergencyName: z.string().min(2),
  emergencyPhone: z.string().regex(phoneRegex),
  emergencyRelation: z.string().min(2),
  fitnessGoals: z.array(z.string()).optional(),
  fitnessLevel: z
    .enum(["Beginner", "Intermediate", "Advanced", "Athlete"])
    .optional(),
  healthConditions: z.string().max(2000).optional(),
  referralSource: z
    .enum([
      "Google Search",
      "Social Media",
      "Friend/Family",
      "Drive By",
      "Event",
      "Other",
    ])
    .optional(),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "Terms must be accepted",
  }),
  waiverAccepted: z.boolean().refine((val) => val === true, {
    message: "Waiver must be accepted",
  }),
  marketingOptIn: z.boolean().optional(),
});

export const scheduleQuerySchema = z.object({
  day: z.string().optional().nullable(),
  category: z.string().optional().nullable(),
  instructor: z.string().optional().nullable(),
});
