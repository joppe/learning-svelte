<style lang="scss">
ul {
    list-style: disc;
    margin-left: 1em;
}
</style>

<script>
import { createEventDispatcher } from 'svelte';

let entries;
const dispatch = createEventDispatcher();

function remove(index) {
    dispatch('remove', index);
}

console.log(entries);

export { entries };
</script>

<ul>
    {#each entries as entry, index}
        <li>
            {entry}
            <button type="button" on:click="{() => remove(index)}">x</button>
        </li>
    {/each}
</ul>
