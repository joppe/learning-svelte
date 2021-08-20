<script>
import List from '../list/List.svelte';

let exercises;
const types = [
    {
        name: 'squads',
        label: 'Squads',
    },
    {
        name: 'lunges',
        label: 'Lunges',
    },
    {
        name: 'leg-extension',
        label: 'Leg extension',
    },
    {
        name: 'one-lge-squads',
        label: 'One leg squads',
    },
];

function getTypeLabel(type) {
    return (
        types.find((t) => {
            return t.name === type;
        })?.label ?? ''
    );
}

$: listData = exercises.map((entry) => {
    return `${getTypeLabel(entry.type)}: ${entry.sets} x ${
        entry.repetitions
    } x ${entry.weight}kg`;
});

export { exercises };
</script>

<div class="o-block">
    <h2>Exercise</h2>

    {#if exercises.length === 0}
        <em>No exercises found</em>
    {/if}

    <List bind:entries="{listData}" />
</div>
