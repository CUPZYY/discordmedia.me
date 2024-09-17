import { addUrl } from '$lib/datebase/wrapper';
import { json } from '@sveltejs/kit';


export async function POST({request, cookies}) {
    const data = await request.json();
    addUrl(data["videoUrl"])

    return json({"message": "testinggg"});
}