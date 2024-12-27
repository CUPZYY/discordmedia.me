<script>
    import { page } from "$app/stores";
</script>

<section>
    <h1 class="title is-1">{$page.status}</h1>
    <h5 class="subtitle is-5">{$page.error.message}</h5>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
