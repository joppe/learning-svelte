<style lang="scss">
@import '../../style/config/_color.scss';

$space: 10px;

.modal {
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    &.is-hidden {
        display: none;
    }
    .backdrop {
        position: absolute;
        z-index: 1;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.8);
    }

    .content {
        position: absolute;
        z-index: 2;
        top: $space;
        right: $space;
        bottom: $space;
        left: $space;
        padding: 20px;
        overflow: auto;
        background-color: $white;
    }

    header {
        margin-bottom: 20px;
    }

    button {
        position: absolute;
        top: $space;
        right: $space;
    }
}
</style>

<script>
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();

function close() {
    dispatch('close');
}

export let title;
export let isHidden = true;
</script>

<div class="modal" class:is-hidden="{isHidden}">
    <div class="backdrop"></div>
    <div class="content">
        <header>
            <h1>{title}</h1>
            <button type="button" on:click="{close}"> x </button>
        </header>

        <section>
            <slot />
        </section>
    </div>
</div>
