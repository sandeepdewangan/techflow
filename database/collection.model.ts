import { model, models, Schema, Types } from "mongoose";

// Starred or bookmarked colelction of questions.

export interface ICollection {
    author: Types.ObjectId;
    question: Types.ObjectId;
}

export interface ICollectionDoc extends ICollection, Document { }

const CollectionSchema = new Schema<ICollection>(
    {
        author: { type: Schema.Types.ObjectId, ref: "User", required: true },
        question: { type: Schema.Types.ObjectId, ref: "Question", required: true },
    },
    { timestamps: true }
);

const Collection =
    models?.Collection || model<ICollection>("Collection", CollectionSchema);

export default Collection;
