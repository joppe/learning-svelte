<script>
import router from 'page';

import Form from '../component/form/Form.svelte';
import FormField from '../component/form/FormField.svelte';
import { login } from '../firebase/useAuth';

let username;
let password;

async function handleLogin() {
    const result = await login(username, password);

    if (result === true) {
        router.redirect('/');
    }
}
</script>

<h1>Login</h1>

<Form>
    <svelte:fragment slot="fields">
        <FormField id="form-field-username" label="Username">
            <input
                type="text"
                id="form-field-username"
                autocomplete="username"
                bind:value="{username}" />
        </FormField>

        <FormField id="form-field-password" label="Password">
            <input
                type="password"
                id="form-field-password"
                autocomplete="current-password"
                bind:value="{password}" />
        </FormField>
    </svelte:fragment>

    <svelte:fragment slot="actions">
        <button type="button" on:click="{handleLogin}">Login</button>
    </svelte:fragment>
</Form>
