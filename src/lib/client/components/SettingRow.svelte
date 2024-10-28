<script>
    export let title;
</script>

<div class="columns is-mobile">
    <div class="column is-flex is-justify-content-center is-align-items-center">
        <p class="">{title}</p>
    </div>
    <div class="column is-flex is-justify-content-center">
        <slot></slot>
    </div>
</div>
