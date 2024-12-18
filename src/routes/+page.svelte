<script async>
    import DropdownBox from "$lib/client/components/DropdownBox.svelte";
    import SettingRow from "$lib/client/components/SettingRow.svelte";
    import BxUpload from "~icons/bx/upload";
    import { addUrl } from "$lib/client/api";
    import { uploadFile } from "$lib/client/upload";
    import "bulma-switch";

    let vidFile;
    let thumbFile;
    let uploadThumbRow;
    let vidUrl = "";
    let progress = 0;

    function onVidSelect(file) {
        vidFile = file.srcElement.files[0];
    }

    function onThumbSelect(file) {
        thumbFile = file.srcElement.files[0];
    }

    function updateProgress(progressValue) {
        progress = progressValue;
    }

    async function upload(vidFile, thumbFile) {
        let thumbnail;
        let video;
        await uploadFile(vidFile, updateProgress).then(function (url) {
            video = url;
        });
        if (!uploadThumbRow.closed) {
            await uploadFile(thumbFile).then(function (url) {
                thumbnail = url;
            });
        }
        return { video: video, thumbnail: thumbnail };
    }

    function uploadBtnEvent() {
        upload(vidFile, thumbFile).then(function (urls) {
            addUrl(urls.video, urls.thumbnail).then(function (id) {
                vidUrl = window.location.origin + "/v/" + id;
            });
        });
    }
</script>

<section
    class="section is-flex is-align-items-center"
    style="zoom: 110%; height: 100%; width: 100%"
>
    <div
        class="container is-flex is-flex-direction-column"
        style="max-width: 600px"
    >
        <div class="block has-text-centered">
            <a href=".">
                <h1 class="title is-1">upload your videos</h1>
            </a>
            <h5>Free video uploading for discord! Max size is 5GB</h5>
        </div>
        <div class="container has-text-centered" style="padding-bottom: 10%;">
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
                        <span class="file-label">Select file</span>
                    </span>
                    <span class="file-name">
                        {#if vidFile}
                            {vidFile.name}
                        {:else}
                            No file uploaded
                        {/if}
                    </span>
                </label>
            </div>
            <DropdownBox title={"Advanced settings"}>
                <SettingRow title={"Use custom thumbnail:"}>
                    <input
                        type="checkbox"
                        name="thumbnailSwitch"
                        id="thumbnailSwitch"
                        class="switch is-medium is-success"
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
                                    {#if thumbFile}
                                        {thumbFile.name}
                                    {:else}
                                        Select file
                                    {/if}
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
                class="input block {vidUrl ? 'is-success' : 'is-primary'}"
                readonly
            />
            <button class="button is-primary block" on:click={uploadBtnEvent}
                >Upload!</button
            >
        </div>
        <div class="content has-text-centered">
            <p>
                <strong>discordmedia.me</strong> by
                <a href="https://github.com/CUPZYY">CUPZYY</a>
            </p>
            <p>
                Donations are greatly appreciated, and it helps keep our tools
                ad-free
                <br />
                <a
                    href="https://www.paypal.com/donate/?hosted_button_id=ED86J8GEUGTQL"
                    ><strong>Donate here!</strong></a
                >
            </p>
        </div>
    </div>
</section>

<style>
</style>
