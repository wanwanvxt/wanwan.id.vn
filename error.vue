<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
  error: Object as () => NuxtError,
})
</script>

<template>
  <main
    class="flex flex-col justify-center items-center"
    style="grid-area: appBody"
  >
    <h1 class="text-6xl font-bold text-red-500">
      {{ error.statusCode }}
    </h1>
    <p class="text-lg">
      {{ error.message }}
    </p>
    <NuxtLink
      class="mt-6 px-3 py-2 bg-gray-600 hover:bg-gray-700 rounded"
      to="/"
    >
      Home
    </NuxtLink>
  </main>
</template>
