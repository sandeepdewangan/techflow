import { model, models, Schema, Types } from "mongoose";

export interface IAccount {
    userId: Types.ObjectId;
    name: string;
    image?: string;
    password?: string;
    provider: string;
    providerAccountId: string;
}

// We’re not touching the main model and changing its type.
// We’re defining a whole new interface, IAccountDoc, to solve our use case. 
// Whenever we need to access any default Mongoose-specific fields, we’ll use IAccountDoc to define types for that result and make it typesafe.

export interface IAccountDoc extends IAccount, Document { }


const AccountSchema = new Schema<IAccount>({
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    image: { type: String },
    password: { type: String },
    provider: { type: String, required: true },
    providerAccountId: { type: String, required: true },
}, { timestamps: true });

const Account = models?.Account || model<IAccount>("Account", AccountSchema);

export default Account;