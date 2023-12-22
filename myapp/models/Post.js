import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
   creator: {type: String, required: true},
   title: String,
   comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],

}, {timestamps: true})

export default mongoose?.models?.Post || mongoose.model("Post", PostSchema)