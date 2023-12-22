'use server'
import db from "./db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import getServerUser from "./getServerUser";
import Post from "@/models/Post";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Comment from "@/models/Comment";
import Follower from "@/models/Follower";

export const addPost = async (formData) => {
    const userId = await getServerUser(authOptions)
    console.log("Action UserID " + userId)
    console.log("UserId Email " + userId.email)
    const { title } =
    Object.fromEntries(formData);
    try {
        db.connect()
        const newPost = new Post({
            title,
            creator:  userId.email 
        })
        await newPost.save()
    } catch (error) {
        console.log(error);
        throw new Error("Failed to create post!");

    }

    revalidatePath("/");
    redirect("/");
}
export const addComment = async (formData) => {
    const userId = await getServerUser(authOptions)
    const { title, postId } =
    Object.fromEntries(formData);
    try {
        db.connect()
        const newComment = new Comment({
            title,
            postId,
            creator:  userId.email 
        })
        await newComment.save()
    } catch (error) {
        console.log(error);
        throw new Error("Failed to create post!");

    }

    revalidatePath("/");
    redirect("/");
}

export const followUser = async(followeeEmail, followerEmail) => {
    try {
        db.connect();
    
        await Follower.create({
          owner: followerEmail,
          followers: [followeeEmail], 
        });
    
        console.log(`${followeeEmail} is now following ${followerEmail}`);
      } catch (error) {
        console.error(error);
        throw new Error('Failed to follow user ' + error);
      }

}