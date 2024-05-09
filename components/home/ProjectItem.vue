<script setup lang="ts">
defineProps({
  data: Object as () => ProjectType
});
</script>

<template>
  <component
    :is="isExternalLink(data?.link!) ? 'a' : resolveComponent('NuxtLink')"
    :href="data?.link"
    class="group rounded border border-accent shadow hover:bg-accent/80"
  >
    <img class="rounded" :src="data?.thumbnail" :alt="data?.name" />
    <div class="p-5">
      <h3 class="text-xl font-semibold text-textCol group-hover:text-primary">
        <span>{{ data?.name }}</span>
        <IconArrowUpRight
          class="ml-1 h-5 w-5 transition group-hover:-translate-y-1 group-hover:translate-x-1"
        />
      </h3>
      <p class="text-textCol/60">{{ data?.description }}</p>
      <div class="mt-5 flex gap-3 overflow-x-scroll">
        <span
          v-for="tag in data?.tags"
          :key="tag"
          class="rounded-lg bg-accent-20 px-2 py-0.5 text-xs text-textCol"
          >{{ tag }}</span
        >
      </div>
    </div>
  </component>
</template>
