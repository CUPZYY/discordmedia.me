<script>
    import axios from "axios";

    let files;
    let data;
    let vidUrl;
    let progress = 0;
    files?.[0].name
    $: {
        if (files?.[0]) {
            data = new FormData()
            data.append("files[]", files[0])
            axios.post("https://up1.fileditch.com/upload.php", data, {
                onUploadProgress: (progressEvent) => {
                    if (progressEvent.bytes) {
                        progress = Math.round((progressEvent.loaded / progressEvent.total) * 100)
                    }
                }
            }).then(function (response) {
                    vidUrl = response?.["data"]?.["files"]?.[0]?.["url"]
                    progress = 100
            })
        }
    }
</script>

<section class="section is-medium">
    <h1 class="title is-1 has-text-centered">discord video</h1>
    <div class="container block">
        <div class="container has-text-centered">
            <div class="file is-boxed has-name is-primary is-centered">
                <label class="file-label">
                    <input class="file-input" type="file" accept="video/mp4, video/mov" bind:files={files}>
                    <span class="file-cta">
                        <span class="file-label"> Upload! </span>
                    </span>
                    <span class="file-name"> {files?.[0].name ?? "No file uploaded"} </span>
                </label>
            </div>
            <progress class="progress is-link" value="{progress}" max="100"></progress>
            <input type="text" value="{vidUrl ?? ""}" placeholder="No file uploaded" class="input is-success" readonly>
        </div>
    </div>
</section>