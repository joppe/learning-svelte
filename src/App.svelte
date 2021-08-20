<style lang="scss">
:global {
    @import './style/main.scss';
}

@import './style/config/_spacing.scss';

nav {
    ul {
        display: flex;
        justify-content: flex-end;
    }

    li {
        position: relative;
        padding: 0 map-get($spacing, 'sm');

        &:before {
            content: '|';
            position: absolute;
            left: 0;
            top: 0;
        }

        &:first-of-type:before {
            content: '';
        }

        &:last-of-type {
            padding-right: 0;
        }
    }

    button {
        margin: 0;
        padding: 0;
        background-color: transparent;
        border: none;
        cursor: pointer;
        text-decoration: underline;
        line-height: 1.2em;
    }
}
</style>

<script>
import router from 'page';
import Home from './page/Home.svelte';
import Period from './page/Period.svelte';
import Login from './page/Login.svelte';
import NotFound from './page/NotFound.svelte';
import { isReady } from './firebase/firebase';
import { isLoggedIn, logout } from './firebase/useAuth';
import { user } from './store/user';

let page;
let params;
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
    router(
        '/period/:date',
        (ctx, next) => {
            params = ctx.params;
            next();
        },
        () => {
            if (!isLoggedIn()) {
                router.redirect('/login');
            }
            page = Period;
        },
    );
    router('/login', () => {
        page = Login;
    });
    router('*', () => {
        page = NotFound;
    });

    router.start();
})();
</script>

<header class="o-container">
    <nav>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                {#if loggedInUser}
                    <button type="button" on:click="{logout}">Logout</button>
                {:else}
                    <a href="/login">Login</a>
                {/if}
            </li>
        </ul>
    </nav>
</header>

<main>
    {#if page}
        <svelte:component this="{page}" params="{params}" />
    {/if}
</main>
