import { z } from "zod";

export const SignInSchema = z.object({
    email: z.string().min(1, { message: "Email field is required" }).email({ message: "Please provide a valid email." }),
    password: z.string().min(6, { message: "Password must be of atleast 6 characters long." }).max(50, { message: "Password cannot exceed 50 characters." }),
});

export const SignUpSchema = z.object({
    username: z.string()
        .min(3, { message: "Username must of atleast 3 characters." })
        .max(30, { message: "Username cannot exceed 30 characters" })
        .regex(/^[a-zA-Z0-9_]+$/, { message: "Username can contain only characters, numbers and underscore." }),
    name: z.string()
        .min(1, { message: "Name field must contain atleast 1 character" })
        .max(15, { message: "Name field should be less than 15 characters" })
        .regex(/^[a-zA-Z\s]+$/, { message: "Name field must contain characters and space." }),
    email: z.string()
        .min(1, { message: "Email field is required" })
        .email({ message: "Please provide a valid email." }),
    password: z.string()
        .min(6, { message: "Password must be of atleast 6 characters long." })
        .max(50, { message: "Password cannot exceed 50 characters." })
        .regex(/[A-Z]/, { message: "Password must contain atleast one uppercase character" })
        .regex(/[a-z]/, { message: "Password must contain atleast one lowecase character" })
        .regex(/[0-9]/, { message: "Password must contain atleast one letter" })
        .regex(/[!@#$%^&*]/, { message: "Password must contain atleast one special characters from ! @ # $ % ^ & *" })
});

export const AskQuestionSchema = z.object({
    title: z.string().min(5, { message: "Title should contain atleast 5 characters." })
        .max(100, { message: "Title cannot exceed max of 100 characters." }),
    content: z.string().min(5, { message: "Content be of atleast 5 characters." }),
    tags: z.array(
        z.string()
            .min(1, { message: "Tag legth should be of atleast 1 character." })
            .max(30, { message: "Tag length should be less than 30 characters." }))
        .min(1, { message: "Min 1 tag required." })
        .max(3, { message: "Cannot add more than 3 tags." }),

});

export const UserSchema = z.object({
    name: z.string().min(1, { message: "Name is required." }),
    username: z
        .string()
        .min(3, { message: "Username must be at least 3 characters long." }),
    email: z.string().email({ message: "Please provide a valid email address." }),
    bio: z.string().optional(),
    image: z.string().url({ message: "Please provide a valid URL." }).optional(),
    location: z.string().optional(),
    portfolio: z
        .string()
        .url({ message: "Please provide a valid URL." })
        .optional(),
    reputation: z.number().optional(),
});

export const AccountSchema = z.object({
    userId: z.string().min(1, { message: "UserId is required." }),
    name: z.string().min(1, { message: "Name is required." }),
    image: z
        .string()
        .url({ message: "Please provide a valid image URL." })
        .optional(),
    password: z.string()
        .min(6, { message: "Password must be of atleast 6 characters long." })
        .max(50, { message: "Password cannot exceed 50 characters." })
        .regex(/[A-Z]/, { message: "Password must contain atleast one uppercase character" })
        .regex(/[a-z]/, { message: "Password must contain atleast one lowecase character" })
        .regex(/[0-9]/, { message: "Password must contain atleast one letter" })
        .regex(/[!@#$%^&*]/, { message: "Password must contain atleast one special characters from ! @ # $ % ^ & *" }).optional(),
    provider: z.string().min(1, { message: "Provider is required." }),
    providerAccountId: z.string().min(1, { message: "Provider account ID is required." }),
});
