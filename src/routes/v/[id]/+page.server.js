/** @type {import("./$types").PageServerLoad} */
import { getData } from "$lib/server/database/wrapper";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
    let data = await getData(params.id);
    if (data) {
        return await data;
    } else {
        error(404, "Not Found");
    }
}
