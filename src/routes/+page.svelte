<script>
    let files;
    let data;
    let vidUrl;
    files?.[0].name
    $: {
        console.log("1")
        if (files?.[0]) {
            data = new FormData()
            data.append("files[]", files[0])
            const res = fetch("https://up1.fileditch.com/upload.php", {
                method: "POST",
                body: data
            })
            res.then((response) => {
                console.log(response)
                response.json().then((responseData) => {
                    console.log(responseData)
                    vidUrl = responseData?.["files"]?.[0]?.["url"]
                })
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
                    <input class="file-input" type="file" name="files[]" bind:files={files}>
                    <span class="file-cta">
                        <span class="file-label"> Upload! </span>
                    </span>
                    <span class="file-name"> {files?.[0].name ?? "No file uploaded"} </span>
                </label>
            </div>
            <input type="text" value="{vidUrl ?? ""}" placeholder="No file uploaded" class="input is-success" readonly>
        </div>
    </div>
</section>