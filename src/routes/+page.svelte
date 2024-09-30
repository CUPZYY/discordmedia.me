<script async>
    import axios from "axios";

    let files;
    let lastFiles;
    let vidUrl = "";
    let progress = 0;
    files?.[0].name;
    $: {
        if (files?.[0] && lastFiles != files) {
            lastFiles = files;
            let uploadData = new FormData();
            uploadData.append("files[]", files[0]);
            axios
                .post("https://up1.fileditch.com/upload.php", uploadData, {
                    onUploadProgress: (progressEvent) => {
                        if (progressEvent.bytes) {
                            progress = Math.round(
                                (progressEvent.loaded / progressEvent.total) *
                                    100
                            );
                        }
                    },
                })
                .then(function (response) {
                    let directUrl = response?.["data"]?.["files"]?.[0]?.["url"];
                    progress = 100;

                    let dbData = { videoUrl: directUrl };

                    axios.post("/api/addUrl", dbData).then(function (response) {
                        vidUrl =
                            window.location.origin + "/v/" + response.data.id;
                    });
                });
        }
    }
</script>

<section class="section is-medium" style="zoom: 110%;">
    <div class="container" style="max-width: 600px;">
        <div class="block">
            <a href=".">
                <h1 class="title is-1 has-text-centered">discord video</h1>
            </a>
        </div>
        <div class="container has-text-centered">
            <div
                class="file is-boxed has-name {files?.[0]
                    ? 'is-success'
                    : 'is-primary'} is-centered"
            >
                <label class="file-label">
                    <input
                        class="file-input"
                        type="file"
                        accept="video/mp4, video/quicktime"
                        bind:files
                    />
                    <span class="file-cta">
                        <span class="file-label"> Upload! </span>
                    </span>
                    <span class="file-name">
                        {files?.[0].name ?? "No file uploaded"}
                    </span>
                </label>
            </div>
            <progress class="progress is-primary" value={progress} max="100"
            ></progress>
            <input
                type="text"
                placeholder="No file uploaded"
                value={vidUrl}
                class="input {vidUrl ? 'is-success' : 'is-primary'}"
                readonly
            />
        </div>
    </div>
</section>
