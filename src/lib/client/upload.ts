import axios from "axios";

export async function uploadFile(
    file: File,
    onProgress?: (progress: number) => void
) {
    let url;
    let uploadData = new FormData();
    uploadData.append("files[]", file);

    await axios
        .post("https://up1.fileditch.com/upload.php", uploadData, {
            onUploadProgress: (progressEvent) => {
                if (onProgress) {
                    if (progressEvent.bytes) {
                        onProgress(
                            Math.round(
                                (progressEvent.loaded /
                                    (progressEvent.total || 0)) *
                                    100
                            )
                        );
                    }
                }
            },
        })
        .then(function (response) {
            if (onProgress) {
                onProgress(100);
            }
            url = response?.["data"]?.["files"]?.[0]?.["url"];
        });
    return url;
}
