<style lang="scss"></style>

<script>
import { createEventDispatcher } from 'svelte';

import ActivityForm from './ActivityForm.svelte';
import ExerciseForm from './ExerciseForm.svelte';
import Form from '../form/Form.svelte';
import FormField from '../form/FormField.svelte';
import RangeField from '../form/field/RangeField.svelte';
import { toString } from '../../date/toString';
import { fromTimestamp } from '../../date/fromTimestamp';

let stat;
const dispatch = createEventDispatcher();
const date = fromTimestamp(stat.date.seconds);
let { score, stairs, remark, muscleStrain } = stat;
let exercises = stat.exercises ? stat.exercises.slice() : [];
let activities = stat.activities ? stat.activities.slice() : [];

function save() {
    const payload = {
        id: stat.id,
        date: {
            ...stat.date,
        },
        score,
        stairs,
        exercises,
        activities,
        muscleStrain,
        remark,
    };

    dispatch('save', payload);
}

function cancel() {
    dispatch('cancel');
}

export { stat };
</script>

<Form>
    <svelte:fragment slot="fields">
        <FormField id="form-field-date" label="Date">
            <input
                type="date"
                id="form-field-date"
                value="{toString(date)}"
                disabled />
        </FormField>

        <FormField id="form-field-score" label="Sore">
            <RangeField
                id="form-field-score"
                min="{0}"
                max="{10}"
                step="{1}"
                bind:value="{score}" />
        </FormField>

        <FormField id="form-field-stairs" label="Stairs">
            <RangeField
                id="form-field-stairs"
                min="{0}"
                max="{10}"
                step="{1}"
                bind:value="{stairs}" />
        </FormField>

        <FormField id="form-field-muscle-strain" label="Muscle strain">
            <RangeField
                id="form-field-muscle-strain"
                min="{0}"
                max="{10}"
                step="{1}"
                bind:value="{muscleStrain}" />
        </FormField>

        <ActivityForm bind:activities />

        <ExerciseForm bind:exercises />

        <FormField id="form-field-remark" label="Remark">
            <textarea id="form-field-remark" bind:value="{remark}"></textarea>
        </FormField>
    </svelte:fragment>

    <svelte:fragment slot="actions">
        <button type="button" on:click="{save}"> save </button>
        <button type="button" on:click="{cancel}"> cancel </button>
    </svelte:fragment>
</Form>
