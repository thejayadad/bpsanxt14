import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
   creator: {type: String, required: true},
   title: String,
   postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
   

}, {timestamps: true})

export default mongoose?.models?.Comment || mongoose.model("Comment", CommentSchema)