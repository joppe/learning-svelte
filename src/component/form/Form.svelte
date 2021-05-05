<style lang="scss">
@import '../../style/config/_spacing.scss';

form {
    padding: map-get($spacing, 'md');

    &.inline {
        display: flex;
        padding: 0;
    }
}

.actions {
    display: flex;
    justify-content: flex-end;

    form.inline & {
        margin-top: auto;
    }
}
</style>

<script>
export let isInline = false;
</script>

<form class:inline="{isInline}">
    <slot name="fields" />

    <div class="actions">
        <slot name="actions" />
    </div>
</form>
