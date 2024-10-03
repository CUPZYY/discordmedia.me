<script async>
    import BxsChevronRight from "~icons/bxs/chevron-right";
    let messageBody;
    let chevronDeg;
    function clickEvent(elmnt) {
        if (messageBody.classList.contains("closed")) {
            messageBody.classList.remove("closed");
            chevronDeg = "90deg";
        } else {
            messageBody.classList.add("closed");
            chevronDeg = "0deg";
        }
    }
</script>

<article class="message">
    <!-- svelte-ignore a11y-click-events-have-key-events (because of reasons) -->
    <div
        class="is-justify-content-center message-header"
        on:click={clickEvent}
        role="button"
        tabindex=""
    >
        <slot name="title" class="has-text-centered"></slot>
        <BxsChevronRight
            id="ff"
            style="transform: rotate({chevronDeg}); transition: transform 1s ease"
        ></BxsChevronRight>
    </div>
    <div class="message-body closed" bind:this={messageBody}>
        <slot name="content"></slot>
    </div>
</article>

<style>
    .message-body {
        transition:
            height 1s ease,
            padding 1s ease;
        overflow-y: hidden;
        height: 200px;
    }
    .closed {
        height: 0;
        padding-top: 0;
        padding-bottom: 0;
    }
    .message-header {
        cursor: pointer;
    }
</style>
