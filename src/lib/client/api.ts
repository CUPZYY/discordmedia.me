import axios from "axios";

export async function addUrl(videoUrl: string, thumbnailUrl?: string) {
    let returnUrl: string | null = null;
    await axios
        .post("/api/addUrl", { videoUrl: videoUrl, thumbnailUrl: thumbnailUrl })
        .then(function (response) {
            returnUrl = response.data.id;
        });
    return returnUrl;
}
