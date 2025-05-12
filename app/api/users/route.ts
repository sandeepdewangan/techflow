import User from "@/database/user.model";
import handleError from "@/lib/handlers/error";
import { ValidationError } from "@/lib/http-errors";
import dbConnect from "@/lib/mongoose";
import { UserSchema } from "@/lib/validations";
import { APIErrorResponse } from "@/types/global";
import { NextResponse } from "next/server";

// get all the users
export async function GET() {
    try {
        const users = await User.find();
        return NextResponse.json({ success: true, data: users }, { status: 200 });
    } catch (error) {
        handleError(error, "api") as APIErrorResponse;
    }
}

// create user
export async function POST(request: Request) {
    try {
        await dbConnect();
        const body = await request.json();
        const validatedData = UserSchema.safeParse(body);
        if (!validatedData.success) {
            throw new ValidationError(validatedData.error.flatten().fieldErrors);
        }
        const { email, username } = validatedData.data;

        const existingEmail = await User.findOne({ email });
        if (existingEmail) throw new Error("Email id already exists.");

        const existingUsername = await User.findOne({ username });
        if (existingUsername) throw new Error("Username already exists.");

        const newUser = await User.create(validatedData.data);

        return NextResponse.json({ success: true, data: newUser }, { status: 201 });

    } catch (error) {
        return handleError(error, "api") as APIErrorResponse;
    }
}