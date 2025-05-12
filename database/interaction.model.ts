import { model, models, Schema, Types } from "mongoose";

// This model will be used by Recommender System.

export interface IInteraction {
    user: Types.ObjectId;
    action: string;
    actionId: Types.ObjectId;
    actionType: "question" | "answer";
}

export interface IInteractionDoc extends IInteraction, Document { }

const InteractionSchema = new Schema<IInteraction>(
    {
        user: { type: Schema.Types.ObjectId, ref: "User", required: true },
        action: { type: String, required: true },
        actionId: { type: Schema.Types.ObjectId, required: true },
        actionType: { type: String, enum: ["question", "answer"], required: true }, // question, answer, upvotes, downvotes
    },
    { timestamps: true }
);

const Interaction =
    models?.Interaction || model<IInteraction>("Interaction", InteractionSchema);

export default Interaction;
