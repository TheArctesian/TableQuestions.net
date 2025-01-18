<script>
  import "../app.css";
  import { dev } from "$app/environment";
  import { injectAnalytics } from "@vercel/analytics/sveltekit";

  injectAnalytics({ mode: dev ? "development" : "production" });
</script>

<div class="wrappy">
  <slot />
</div>

<style>

  .wrappy {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-content: center;
  }
  :global(body) {
    background-color: var(--bg);
    font-family: "Fira Code", monospace;
    letter-spacing: 0.1em; /* Adjust as needed */
  }
</style>
