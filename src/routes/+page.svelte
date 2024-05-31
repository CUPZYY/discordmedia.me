<script>
    let file;
</script>

<section class="section is-medium">
    <h1 class="title is-1 has-text-centered">discord video</h1>
    <div class="container block">
        <div class="container has-text-centered">
            <form class="block" id="upload-form" enctype="multipart/form-data" method="post" action="https://up1.fileditch.com/upload.php">
                <div class="file is-boxed has-name is-primary is-centered">
                    <label class="file-label">
                        <input class="file-input" type="file" name="files[]" bind:files={file}>
                        <span class="file-cta">
                            <span class="file-label"> Upload! </span>
                        </span>
                        <span class="file-name"> {file?.[0].name ?? "No file uploaded"} </span>
                    </label>
                </div>
            </form>
            <input type="text" class="input is-success" readonly>

        </div>
    </div>
</section>