<script>
import Dashboard from '../component/dashboard/Dashboard.svelte';
import { fromString } from '../date/fromString';
import { startOfDay } from '../date/startOfDay';

export let params;
</script>

<Dashboard startDate="{startOfDay(fromString(params.date))}" />
