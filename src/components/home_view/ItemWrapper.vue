<script setup lang="ts">
import { type PropType } from 'vue';
import { RouterLink } from 'vue-router';
import { isExternalLink } from '../../utils';
import ArrowUpRightIcon from '../icons/ArrowUpRightIcon.vue';

type Data = {
  name: string;
  description: string;
  tags: string[];
  thumbnail: string;
  link: string;
};

defineProps({
  data: {
    type: Object as PropType<Data>,
    required: true
  }
});
</script>

<template>
  <component
    :is="isExternalLink(data.link) ? 'a' : RouterLink"
    :href="data.link"
    :to="data.link"
    :target="isExternalLink(data.link) ? '_blank' : ''"
    class="group/item grid grid-cols-[1fr_2fr] gap-3 rounded p-3 grid-areas-[thumb_content] hover:bg-accent/80 hover:shadow"
  >
    <img class="rounded area-[thumb]" :src="data.thumbnail" :alt="data.name" />
    <span
      class="grid grid-rows-[min-content_auto_min-content] gap-2 area-[content] grid-areas-[name,desc,tags]"
    >
      <h3 class="font-semibold text-color area-[name] group-hover/item:text-primary">
        {{ data.name }}
        <ArrowUpRightIcon
          class="h-4 w-4 transition group-hover/item:-translate-y-1 group-hover/item:translate-x-1"
        />
      </h3>
      <p class="text-sm text-color/60 area-[desc]">{{ data.description }}</p>
      <span class="flex justify-start gap-2 area-[tags]">
        <span
          v-for="(tag, index) in data.tags"
          :key="index"
          class="rounded-lg bg-accent-20 px-2 py-0.5 text-xs text-color"
          >{{ tag }}</span
        >
      </span>
    </span>
  </component>
</template>
