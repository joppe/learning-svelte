<style lang="scss" global>
</style>

<script>
import router from 'page';
import Home from './page/Home.svelte';
import Login from './page/Login.svelte';

let page;

router('/', () => {
    page = Home;
});
router('/login', () => {
    page = Login;
});

router.start();
</script>

<main>
    <h1>test</h1>
    <a href="/">Home</a>
    <a href="/login">Login</a>
    <svelte:component this="{page}" />
</main>
