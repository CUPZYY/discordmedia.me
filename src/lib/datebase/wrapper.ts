import { insertUrl } from "./client";

export async function addUrl(videoUrl: string, thumbnailUrl = null, id = "") {
    if (!id) {
        id = await generateID()
    }
    insertUrl({id: id, video_url: videoUrl, thumbnail_url: thumbnailUrl})
}

async function generateID() {
    return (Math.random() + 1).toString(36).substring(6);
}