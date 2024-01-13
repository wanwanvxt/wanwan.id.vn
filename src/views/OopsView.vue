<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
</script>

<template>
  <main class="container mx-auto flex flex-col items-center justify-center gap-8 py-16">
    <h1 class="text-3xl font-bold text-color">OOPS!</h1>
    <h3 class="text-lg font-bold text-color">Page not found: {{ route.path }}</h3>
    <button
      class="rounded bg-accent-20 px-2 py-1 shadow hover:bg-accent-20-hover active:bg-accent-30-active"
      @click="router.back()"
    >
      Back
    </button>
  </main>
</template>
