<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
</script>

<template>
  <main class="container mx-auto py-16 flex flex-col gap-8 justify-center items-center">
    <h1 class="font-bold text-color text-3xl">OOPS!</h1>
    <h3 class="font-bold text-color text-lg">Page not found: {{ route.path }}</h3>
    <button
      class="py-1 px-2 rounded shadow bg-accent-20 hover:bg-accent-20-hover active:bg-accent-30-active"
      @click="router.back()"
    >
      Back
    </button>
  </main>
</template>
