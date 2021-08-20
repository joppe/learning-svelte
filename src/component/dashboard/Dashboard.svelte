<style lang="scss">
@import '../../style/config/_spacing.scss';

.date-nav {
    display: flex;
    align-items: center;
    margin-bottom: map-get($spacing, 'lg');

    &__item {
        &--previous {
            margin-right: map-get($spacing, 'md');
        }

        &--next {
            margin-left: map-get($spacing, 'md');
        }
    }
}
</style>

<script>
import router from 'page';
import { onDestroy } from 'svelte';
import { writable } from 'svelte/store';
import StatForm from './StatForm.svelte';
import Table from '../table/Table.svelte';
import Modal from '../modal/Modal.svelte';
import Portal from '../portal/Portal.svelte';
import { startOfDay } from '../../date/startOfDay';
import { addDays } from '../../date/addDays';
import { toString } from '../../date/toString';
import { useEntries } from '../../composition/useEntries';
import { fromTimestamp } from '../../date/fromTimestamp';
import { createStat, updateStat, useStats } from '../../firebase/useStats';
import { useDaysInterval } from '../../composition/useDaysInterval';
import { toTimestamp } from '../../date/toTimestamp';

let startDate = new Date();
let selected = null;
const start = writable(startDate);

$: $start = startOfDay(startDate);

const today = startOfDay(new Date());
const tomorrow = toTimestamp(addDays(today, 1));
const days = useDaysInterval(start, 7);
const stats = useStats(onDestroy);
const entries = useEntries(days, stats);
const fields = [
    {
        prop: 'date',
        label: 'Date',
        mapper(date) {
            return toString(fromTimestamp(date.seconds));
        },
    },
    { prop: 'score', label: 'Score' },
    { prop: 'stairs', label: 'Stairs' },
];

function styler(entry) {
    const classes = [];
    const timestamp = toTimestamp(today);

    if (entry.id) {
        classes.push('with-id');
    } else {
        classes.push('no-id');
    }

    if (entry.date.seconds === timestamp) {
        classes.push('current');
    } else if (entry.date.seconds > timestamp) {
        classes.push('disabled');
    }

    return classes.join('  ');
}

function handleClose() {
    selected = null;
}

function handleSave(event) {
    const stat = event.detail;
    const { id, ...rest } = stat;

    if (id) {
        updateStat(id, rest);
    } else {
        createStat(rest);
    }

    selected = null;
}

function handleNext() {
    const newDate = addDays(startDate, 7);

    router(`/period/${toString(newDate)}`);
}
function handlePrevious() {
    const newDate = addDays(startDate, -7);

    router(`/period/${toString(newDate)}`);
}

function handleSelected(event) {
    const entry = event.detail;

    if (entry.date.seconds < tomorrow) {
        selected = entry;
    }
}

export { startDate };
</script>

<h1>Dashboard</h1>

<div class="date-nav">
    <button
        type="button"
        on:click="{handlePrevious}"
        class="date-nav__item date-nav__item--previous">
        &laquo;
    </button>

    <span class="date-nav__current">{toString($start)}</span>

    <button
        type="button"
        on:click="{handleNext}"
        class="date-nav__item date-nav__item--next">
        &raquo;
    </button>
</div>

<Table
    fields="{fields}"
    data="{$entries}"
    styler="{styler}"
    on:selected="{handleSelected}" />

<Portal>
    <Modal
        title="Lorem"
        on:close="{handleClose}"
        isHidden="{selected === null}">
        {#if selected}
            <StatForm
                stat="{selected}"
                on:cancel="{handleClose}"
                on:save="{handleSave}" />
        {/if}
    </Modal>
</Portal>
