<script>
    /** @type {import("./$types").PageData}*/
    import { page } from "$app/stores";

    const id = $page.params.id
    export let data;
</script>

<svelte:head>
    <meta property="og:video:url" content={data.video_url}>
</svelte:head>

<section class="section">
    <video width="500" class="" controls>
        <source src="{data.video_url}" type="video/mp4">
        <track kind="captions">
    </video> 
</section>