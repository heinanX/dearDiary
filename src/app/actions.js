"use server"
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { revalidatePath } from "next/cache";

export async function createPost(
    prevState,
    formData,
) {
    try {
        const entryValue = formData.get("entry");
        const post = await prisma.post.create({
            data: {
                body: entryValue
            }
        })
        revalidatePath("/");
        return { status: "success", message: `Added entry ${post.id}`, id: post.id};
    } catch (error) {
        return { status: "failed", message: `failed to add diary entry` };
    }
}

export async function getPosts(
) {
    const posts = await prisma.post.findMany({
        orderBy: {
            id:'desc'
        }
    })
    revalidatePath("/");
    console.log('new posts',posts);
    return posts;
}

export const getPost = async(
) => {
    const posts = await prisma.post.find({
        orderBy: {
            id:'desc'
        }
    })
    revalidatePath("/create-entry/:id");
    console.log('new posts',posts);
    return posts;
}

export async function getRecentPost(
) {
    const posts = await prisma.post.findMany({
        take:3,
        orderBy: {
            id:'desc'
        }
    })
    revalidatePath("/");
    console.log('new posts',posts);
    return posts;
}

