<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <main class="flex min-h-screen flex-col items-center justify-center gap-3 text-center">
    <h1 class="text-danger text-5xl font-bold">404</h1>
    <h4>Page not found: {{ route.fullPath }}</h4>
    <RouterLink class="bg-accent rounded px-2 py-1" to="/">Home</RouterLink>
  </main>
</template>
