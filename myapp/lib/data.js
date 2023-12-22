import db from "./db";
import Post from "@/models/Post";
import mongoose from "mongoose";
import Comment from "@/models/Comment";
import User from "@/models/User";

export const fetchPosts = async () => {
try {
    db.connect()
    const posts = await Post.find({})
    return posts
} catch (error) {
    console.log("Error " + error)
    throw new Error("Failed to fetch posts!");

}

}

export const fetchPost = async (id) => {
    try {
      db.connect
      const post = await Post.findById(id);
      return post;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch post!");
    }
  };
  export const fetchComments = async (postId) => {
    try {
        db.connect()

      const comments = await Comment.find( { postId: postId})
  
      console.log("Comments: ", comments);  
      return comments;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch comments!");
    }
  };
  export const fetchPostByUser = async (postCreator) => {
    try {
        db.connect()
      const posts = await Post.find( { creator: postCreator})
  
      console.log("Users: ", posts);  
      return posts;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch posts!");
    }
  };
  
