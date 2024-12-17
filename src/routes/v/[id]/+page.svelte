<script>
    /** @type {import("./$types").PageData}*/
    import { page } from "$app/stores";

    const id = $page.params.id;
    export let data;
</script>

<svelte:head>
    <meta property="og:type" content="video.other" />
    <meta property="og:video:url" content={data.video_url} />
    <meta property="og:image" content={data.thumbnail_url} />
    <meta http-equiv="refresh" content="0; url=/" />
</svelte:head>
