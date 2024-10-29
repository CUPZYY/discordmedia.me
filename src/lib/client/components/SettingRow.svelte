<svelte:options accessors={true} />

<script>
    import { onMount } from "svelte";

    export let title;

    let row;

    export let closed = false;
    export function close() {
        row.classList.add("closed");
        closed = true;
    }
    export function open() {
        row.classList.remove("closed");
        closed = false;
    }
    export function openClose() {
        if (closed) {
            open();
        } else {
            close();
        }
    }

    onMount(() => {
        if (closed) {
            row.classList.add("closed");
        }
    });
</script>

<div class="columns is-mobile" id="settingRow" bind:this={row}>
    <div class="column is-flex is-justify-content-center is-align-items-center">
        <p class="">{title}</p>
    </div>
    <div class="column is-flex is-justify-content-center">
        <slot></slot>
    </div>
</div>

<style>
    #settingRow {
        max-height: 80px;
        overflow-y: hidden;
        transition: max-height ease 1s;
    }
    :is(.closed) {
        max-height: 0 !important;
    }
</style>
