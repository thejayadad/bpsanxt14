'use server'
import db from "./db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import getServerUser from "./getServerUser";
import Post from "@/models/Post";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const addPost = async (formData) => {
    const userId = await getServerUser(authOptions)
    console.log("UserId" + userId._id)
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