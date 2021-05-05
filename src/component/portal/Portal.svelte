<script>
import { portal } from './portal';

export let target = 'body';
</script>

<div use:portal="{target}" hidden>
    <slot />
</div>
