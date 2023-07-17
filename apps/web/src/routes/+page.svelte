<script lang="ts">
  import { MyCounterButton } from "ui";
</script>

<h1>Web</h1>
<MyCounterButton />

<button
  on:click={() => {
    throw new Error("Is it sourcemapped, though?");
  }}
>
  Throw test error
</button>

<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
