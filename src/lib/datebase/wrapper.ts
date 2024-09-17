import { eq } from "drizzle-orm";
import { db } from "./client";
import { urlTable } from "./schema";

export async function addUrl(videoUrl: string, thumbnailUrl = null, id = "") {
    if (!id) {
        id = await generateID()
    }
    db.insert(urlTable).values({id: id, video_url: videoUrl, thumbnail_url: thumbnailUrl}).run()
}

export async function getData(id: string) {
    return (await db.select().from(urlTable).where(eq(urlTable.id, id)))[0]
}

async function generateID() {
    return (Math.random() + 1).toString(36).substring(6);
}