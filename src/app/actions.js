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
        return { message: `Added entry ${post.id}` };
    } catch (error) {
        return { message: `failed to add diary entry` };
    }
}

export async function getPost(
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

