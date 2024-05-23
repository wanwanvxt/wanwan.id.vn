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
  <main
    class="container mx-auto flex min-h-screen flex-col items-center justify-center gap-8 py-8 text-center"
  >
    <h1 class="text-5xl font-bold text-danger">Error: {{ error?.statusCode }}</h1>
    <p class="font-semibold text-textCol">{{ error?.statusMessage }}</p>
    <NuxtLink
      class="rounded bg-accent-20 px-2 py-1 text-textCol shadow hover:bg-accent-20-hover active:bg-accent-30-active"
      href="/"
    >
      Home
    </NuxtLink>
    <a
      class="underline"
      :href="`mailto:wanwan.vxt@gmail.com?subject=Problem report: ${JSON.stringify(error)}`"
    >
      Send feedback
    </a>
  </main>
</template>
