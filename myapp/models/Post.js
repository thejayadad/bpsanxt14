import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
   creator: {type: String, required: true},
   title: String

}, {timestamps: true})

export default mongoose?.models?.Post || mongoose.model("Post", PostSchema)