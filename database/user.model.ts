import { Document, model, models, Schema } from "mongoose";

// Model for our code to access (Local Model)
export interface IUser {
    name: string;
    username: string;
    email: string;
    bio?: string;
    image?: string;
    location?: string;
    portfolio?: string;
    reputation?: number;
}

export interface IUserDoc extends IUser, Document { }

// Declare MongoDb Schema
const UserSchema = new Schema<IUser>({
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    bio: { type: String },
    image: { type: String },
    location: { type: String },
    portfolio: { type: String },
    reputation: { type: Number, default: 0 },
}, { timestamps: true });

// Create User Model
// If models user already exists return it
// <IUser> tells mongoose to map with our local model.
const User = models?.User || model<IUser>("User", UserSchema);

export default User;