<script async>
    import DropdownBox from "$lib/client/components/DropdownBox.svelte";
    import BxUpload from "~icons/bx/upload";
    import axios from "axios";
    import { addUrl } from "$lib/client/api";
    import { uploadFile } from "$lib/client/upload";

    let files;
    let lastFiles;
    let vidUrl = "";
    let progress = 0;
    files?.[0].name;
    $: {
        if (files?.[0] && lastFiles != files) {
            lastFiles = files;

            uploadFile(files[0], function (progressValue) {
                progress = progressValue;
            }).then(function (directUrl) {
                addUrl(directUrl).then(function (id) {
                    vidUrl = window.location.origin + "/v/" + id;
                });
            });
        }
    }
</script>

<section
    class="section is-flex is-align-items-center"
    style="zoom: 110%; height: 100%; padding-top: 0"
>
    <div
        class="container is-flex is-flex-direction-column"
        style="max-width: 600px"
    >
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
            <DropdownBox>
                <p slot="title">Advanced settings</p>
                <div slot="content" class="has-text-left">
                    <div class="columns is-mobile">
                        <div
                            class="column is-flex is-justify-content-center is-align-items-center"
                        >
                            <p class="">Custom thumbnail:</p>
                        </div>
                        <div class="column is-flex is-justify-content-center">
                            <div class="file">
                                <label class="file-label">
                                    <input
                                        class="file-input"
                                        type="file"
                                        name="resume"
                                    />
                                    <span class="file-cta">
                                        <span class="file-icon">
                                            <BxUpload />
                                        </span>
                                        <span class="file-label">
                                            Upload!
                                        </span>
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </DropdownBox>
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
