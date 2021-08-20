<style lang="scss">
@import '../../../style/config/_color.scss';
@import '../../../style/config/_font-size.scss';
@import '../../../style/config/_spacing.scss';

div {
    display: flex;
}

span {
    margin-right: map-get($spacing, 'lg');
    padding: map-get($spacing, 'md');
    border: 1px solid $black;
    border-radius: 3px;
    font-size: map-get($font-size, 'xl');
}

input {
    width: 100%;
}
</style>

<script>
export let id;
export let min;
export let max;
export let step;
export let value;
</script>

<div class="range">
    <span class="range__value">{value}</span>
    <input type="range" min="0" max="10" step="1" bind:value />
</div>
