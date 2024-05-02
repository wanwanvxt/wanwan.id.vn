<script setup lang="ts">
defineProps({
  project: {
    type: Object as () => ProjectType,
    required: true
  }
});
</script>

<template>
  <component
    :is="isExternalLink(project.link) ? 'a' : resolveComponent('NuxtLink')"
    :href="project.link"
    class="group/item grid grid-cols-[1fr_2fr] gap-3 rounded p-3 grid-areas-[thumb_content] hover:bg-accent/80 hover:shadow"
  >
    <img class="rounded area-[thumb]" :src="project.thumbnail" :alt="project.name" />

    <div
      class="grid grid-rows-[min-content_auto_min-content] gap-2 area-[content] grid-areas-[name,desc,tags]"
    >
      <h3 class="font-semibold text-textCol area-[name] group-hover/item:text-primary">
        {{ project.name }}
        <IconArrowUpRight
          class="h-4 w-4 transition group-hover/item:-translate-y-1 group-hover/item:translate-x-1"
        />
      </h3>

      <p class="text-sm text-textCol/60 area-[desc]">{{ project.description }}</p>

      <div class="flex justify-start gap-2 area-[tags]">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="rounded-lg bg-accent-20 px-2 py-0.5 text-xs text-textCol"
          >{{ tag }}</span
        >
      </div>
    </div>
  </component>
</template>
