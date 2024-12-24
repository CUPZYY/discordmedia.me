<script>
    /** @type {import("./$types").PageData}*/
    import { page } from "$app/stores";
    import Title from "$lib/client/components/Title.svelte";
    import Footer from "$lib/client/components/Footer.svelte";

    const id = $page.params.id;
    export let data;
</script>

<svelte:head>
    <meta property="og:type" content="video.other" />
    <meta property="og:video:url" content={data.video_url} />
    <meta property="og:image" content={data.thumbnail_url} />
</svelte:head>

<section
    class="section is-flex is-align-items-center"
    style="zoom: 110%; height: 100%; width: 100%"
>
    <div
        class="container is-flex is-flex-direction-column"
        style="max-width: 600px"
    >
        <Title></Title>
        <div class="video-mask block">
            <!-- svelte-ignore a11y-media-has-caption -->
            <video
                poster={data.thumbnail_url}
                controls
                controlslist="noplaybackrate nodownload"
                disablepictureinpicture
                disableremoteplayback
            >
                <source src={data.video_url} type="video/mp4" />
            </video>
        </div>
        <Footer></Footer>
    </div>
</section>

<style>
    .video-mask {
        overflow: hidden;
        border-radius: 20px;
        line-height: 0;
    }
</style>
