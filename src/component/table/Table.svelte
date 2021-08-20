<style lang="scss">
@import '../../style/config/_color.scss';
@import '../../style/config/_spacing.scss';

table {
    border-spacing: 0;
    width: 100%;

    td,
    th {
        padding: map-get($spacing, 'md');
    }

    th {
        text-align: left;
        border-bottom: 1px solid $black;
    }

    tbody tr {
        &.current {
            background-color: $blue--maya;
        }

        &:nth-of-type(odd):not(.current) {
            background-color: $grey--dark-gray;
        }

        &:hover:not(.disabled) {
            background-color: $green--de-york;
            cursor: pointer;
        }
    }
}
</style>

<script>
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();

function handleClick(entry) {
    dispatch('selected', entry);
}

export let fields;
export let data;
export let styler;
</script>

<table>
    <thead>
        <tr>
            {#each fields as field}
                <th>{field.label}</th>
            {/each}
        </tr>
    </thead>

    <tbody>
        {#each data as entry}
            <tr class="{styler(entry)}" on:click="{() => handleClick(entry)}">
                {#each fields as field}
                    <td>
                        {field.mapper
                            ? field.mapper(entry[field.prop])
                            : entry[field.prop]}
                    </td>
                {/each}
            </tr>
        {/each}
    </tbody>
</table>
