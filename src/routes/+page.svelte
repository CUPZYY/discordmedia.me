<script async>
    import DropdownBox from "$lib/client/components/DropdownBox.svelte";
    import BxUpload from "~icons/bx/upload";
    import axios from "axios";
    import { addUrl } from "$lib/client/api";
    import { uploadFile } from "$lib/client/upload";
    import "bulma-switch";

    let vidFile = false;
    let vidFileName = "No file uploaded";
    let thumbFileName = "Upload!";
    let thumbEnabled;
    let vidUrl = "";
    let thumbUrl;
    let progress = 0;

    function onVidSelect(file) {
        vidFile = true;
        vidFileName = file.srcElement.files[0].name;
        uploadFile(file.srcElement.files[0], function (progressValue) {
            progress = progressValue;
        }).then(function (directUrl) {
            addUrl(directUrl, thumbEnabled ? thumbUrl : null).then(
                function (id) {
                    vidUrl = window.location.origin + "/v/" + id;
                }
            );
        });
    }
    function onThumbSelect(file) {
        thumbFileName = file.srcElement.files[0].name;
        uploadFile(file.srcElement.files[0]).then(function (directUrl) {
            thumbUrl = directUrl;
        });
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
                class="file is-boxed has-name {vidFile
                    ? 'is-success'
                    : 'is-primary'} is-centered"
            >
                <label class="file-label">
                    <input
                        class="file-input"
                        type="file"
                        accept="video/mp4, video/quicktime"
                        on:change={onVidSelect}
                    />
                    <span class="file-cta">
                        <span class="file-label"> Upload! </span>
                    </span>
                    <span class="file-name">
                        {vidFileName}
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
                            <p class="">Use custom thumbnail:</p>
                        </div>
                        <div
                            class="column is-half is-flex is-justify-content-center"
                        >
                            <input
                                type="checkbox"
                                name="thumbnailSwitch"
                                id="thumbnailSwitch"
                                class="switch is-medium"
                                bind:checked={thumbEnabled}
                            />
                            <label for="thumbnailSwitch"></label>
                        </div>
                    </div>
                    <div class="columns is-mobile">
                        <div
                            class="column is-flex is-justify-content-center is-align-items-center"
                        >
                            <p class="">Upload custom thumbnail:</p>
                        </div>
                        <div class="column is-flex is-justify-content-center">
                            <div class="file">
                                <label class="file-label">
                                    <input
                                        class="file-input"
                                        type="file"
                                        name="resume"
                                        on:change={onThumbSelect}
                                    />
                                    <span class="file-cta">
                                        <span class="file-icon">
                                            <BxUpload />
                                        </span>
                                        <span class="file-label">
                                            {thumbFileName}
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

<style>
</style>
