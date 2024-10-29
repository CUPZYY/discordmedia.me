<script async>
    import DropdownBox from "$lib/client/components/DropdownBox.svelte";
    import SettingRow from "$lib/client/components/SettingRow.svelte";
    import BxUpload from "~icons/bx/upload";
    import axios from "axios";
    import { addUrl } from "$lib/client/api";
    import { uploadFile } from "$lib/client/upload";
    import "bulma-switch";

    let vidFile = false;
    let vidFileName = "No file uploaded";
    let thumbFileName = "Upload!";
    let uploadThumbRow;
    let vidUrl = "";
    let thumbUrl;
    let progress = 0;

    function onVidSelect(file) {
        vidFile = true;
        vidFileName = file.srcElement.files[0].name;
        uploadFile(file.srcElement.files[0], function (progressValue) {
            progress = progressValue;
        }).then(function (directUrl) {
            addUrl(directUrl, uploadThumbRow.closed ? null : thumbUrl).then(
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
            <DropdownBox title={"Advanced settings"}>
                <SettingRow title={"Use custom thumbnail:"}>
                    <input
                        type="checkbox"
                        name="thumbnailSwitch"
                        id="thumbnailSwitch"
                        class="switch is-medium"
                        on:change={uploadThumbRow.openClose()}
                    />
                    <label for="thumbnailSwitch"></label>
                </SettingRow>
                <SettingRow
                    title={"Upload custom thumbnail:"}
                    closed={true}
                    bind:this={uploadThumbRow}
                >
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
                </SettingRow>
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
