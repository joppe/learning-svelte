<script>
import List from '../list/List.svelte';

let activities;
const types = [
    {
        name: 'cycling',
        label: 'Cycling',
    },
    {
        name: 'tandem',
        label: 'Tandem',
    },
    {
        name: 'walking',
        label: 'Walking',
    },
    {
        name: 'surfing',
        label: 'Surfing',
    },
];

function getTypeLabel(type) {
    return (
        types.find((t) => {
            return t.name === type;
        })?.label ?? ''
    );
}

$: listData = activities.map((entry) => {
    return `${getTypeLabel(entry.type)}: ${entry.duration} minutes - ${
        entry.intensity
    } intensity`;
});

export { activities };
</script>

<div class="o-block">
    <h2>Activity</h2>

    {#if activities.length === 0}
        <em>No activities found</em>
    {/if}

    <List entries="[]" />
</div>
