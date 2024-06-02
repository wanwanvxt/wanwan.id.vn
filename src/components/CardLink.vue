<script setup>
import { RouterLink } from 'vue-router';

defineProps({
  data: Object
});
</script>

<template>
  <component
    :is="data?.url.startsWith('http') ? 'a' : RouterLink"
    :to="data?.url"
    :href="data?.url"
    class="border-accent relative rounded border p-3 transition-transform hover:-translate-y-1 hover:shadow"
  >
    <span class="bg-primary absolute left-0 top-0 h-1 w-full rounded-t"></span>
    <h4 class="text-lg font-bold">{{ data?.name }}</h4>
    <p class="text-textCol/80 mb-3">{{ data?.description }}</p>
    <div class="flex items-center justify-start gap-3">
      <span class="bg-accent-20 rounded px-1 py-0.5 text-xs" v-for="tag in data?.tags" :key="tag">
        {{ tag }}
      </span>
    </div>
  </component>
</template>
