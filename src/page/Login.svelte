<script>
import router from 'page';

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

<form>
    <div>
        <label for="form-field-username">Username</label>
        <input
            type="text"
            id="form-field-username"
            autocomplete="username"
            bind:value="{username}" />
    </div>
    <div>
        <label for="form-field-password">Password</label>
        <input
            type="password"
            id="form-field-password"
            autocomplete="current-password"
            bind:value="{password}" />
    </div>
    <button type="button" on:click="{handleLogin}">Login</button>
</form>
