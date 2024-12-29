import { addUrl, generateID } from "$lib/server/database/wrapper";
import { json } from "@sveltejs/kit";

export async function POST({ request, cookies }) {
    const data = await request.json();
    const id = await generateID();
    await addUrl(id, data["videoUrl"], data?.["thumbnailUrl"]);

    return json({ id: id });
}
