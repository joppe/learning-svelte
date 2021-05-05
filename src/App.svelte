<style lang="scss" global>
@import './style/main.scss';
</style>

<script>
import router from 'page';
import Home from './page/Home.svelte';
import Login from './page/Login.svelte';
import { isReady } from './firebase/firebase';
import { isLoggedIn, logout } from './firebase/useAuth';
import { user } from './store/user';

let page;
let loggedInUser;

user.subscribe((v) => {
    loggedInUser = v;
});

(async () => {
    await isReady();

    router('/', () => {
        if (!isLoggedIn()) {
            router.redirect('/login');
        }
        page = Home;
    });
    router('/login', () => {
        page = Login;
    });

    router.start();
})();
</script>

<main>
    <h1>test</h1>
    <a href="/">Home</a>
    {#if loggedInUser}
        <button type="button" on:click="{logout}">Logout</button>
    {:else}
        <a href="/login">Login</a>
    {/if}

    {#if page}
        <svelte:component this="{page}" />
    {/if}
</main>
