<script setup lang="ts">
import type { NuxtError } from '#app';

const { getTheme, setTheme } = useThemeStore();

defineProps({
  error: Object as () => NuxtError
});

onBeforeMount(() => {
  setTheme(getTheme());
});
</script>

<template>
  <main>
    <h1 class="status-code">Error: {{ error?.statusCode }}</h1>
    <p class="status-msg">{{ error?.statusMessage }}</p>
    <NuxtLink class="home-btn" to="/"> Home </NuxtLink>
    <a
      class="report-link"
      :href="`mailto:wanwan.vxt@gmail.com?subject=Problem report: ${JSON.stringify(error)}`"
    >
      Send feedback
    </a>
  </main>
</template>

<style lang="postcss" scoped>
main {
  @apply container mx-auto flex min-h-screen flex-col items-center justify-center gap-8 py-8 text-center;

  .status-code {
    @apply text-5xl font-bold text-danger;
  }
  .status-msg {
    @apply font-semibold text-textCol;
  }
  .home-btn {
    @apply rounded bg-accent-20 px-2 py-1 text-textCol shadow hover:bg-accent-20-hover active:bg-accent-30-active;
  }
  .report-link {
    @apply underline;
  }
}
</style>
