import db from "./db";
import Post from "@/models/Post";

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
  
