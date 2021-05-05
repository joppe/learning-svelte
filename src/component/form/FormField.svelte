<style lang="scss">
@import '../../style/config/_color.scss';
@import '../../style/config/_font-size.scss';
@import '../../style/config/_spacing.scss';

div {
    &.row {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;

        label {
            margin-bottom: 10px;
        }
    }

    &.column {
        width: 150px;
        margin-right: map-get($spacing, 'md');

        &.small {
            width: 50px;
        }

        label {
            font-size: map-get($font-size, 'sm');
            color: $grey--dark-gray;
        }
    }
}
</style>

<script>
export let id;
export let label;
export let isInline = false;
export let isSmall = false;
</script>

<div class:column="{isInline}" class:row="{!isInline}" class:small="{isSmall}">
    <label for="{id}">{label}</label>
    <slot />
</div>
