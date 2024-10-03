/** @type {import("./$types").PageServerLoad} */
import { getData } from "$lib/server/datebase/wrapper";

export async function load({ params }) {
    return await getData(params.id);
}
