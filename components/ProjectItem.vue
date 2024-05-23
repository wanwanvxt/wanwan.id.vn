<script setup lang="ts">
import { ArrowUpRightIcon } from '@wanwanvxt/vue-feathericons';

const nl = defineNuxtLink({});

defineProps({
  data: Object as () => ProjectType
});
</script>

<template>
  <component
    :is="isExternalLink(data?.link!) ? 'a' : nl"
    :href="data?.link"
    class="group rounded border border-accent bg-accent shadow transition"
  >
    <img class="rounded" :src="data?.thumbnail" :alt="data?.name" />
    <div class="p-5">
      <h3 class="text-xl font-semibold text-textCol group-hover:text-primary">
        <span>{{ data?.name }}</span>
        <ArrowUpRightIcon
          class="h-6 w-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
        />
      </h3>
      <p class="text-textCol/60">{{ data?.description }}</p>
      <div class="mt-5 flex gap-3 overflow-x-scroll">
        <span
          v-for="tag in data?.tags"
          :key="tag"
          class="rounded-lg bg-accent-20 px-2 py-0.5 text-xs text-textCol"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </component>
</template>
