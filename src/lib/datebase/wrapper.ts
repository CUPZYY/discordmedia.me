import { db } from "./client";
import { urlTable } from "./schema";

export async function addUrl(videoUrl: string, thumbnailUrl = null, id = "") {
    if (!id) {
        id = await generateID()
    }
    db.insert(urlTable).values({id: id, video_url: videoUrl, thumbnail_url: thumbnailUrl}).run()
}

async function generateID() {
    return (Math.random() + 1).toString(36).substring(6);
}