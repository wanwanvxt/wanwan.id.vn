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
    class="group/item p-3 gap-3 rounded hover:bg-accent/80 hover:shadow grid grid-areas-[thumb_content] grid-cols-[1fr_2fr]"
  >
    <img class="area-[thumb] rounded" :src="data.thumbnail" :alt="data.name" />
    <span
      class="area-[content] grid gap-2 grid-areas-[name,desc,tags] grid-rows-[min-content_auto_min-content]"
    >
      <h3 class="area-[name] font-semibold text-color group-hover/item:text-primary">
        {{ data.name }}
        <ArrowUpRightIcon
          class="w-4 h-4 transition group-hover/item:-translate-y-1 group-hover/item:translate-x-1"
        />
      </h3>
      <p class="area-[desc] text-color/60 text-sm">{{ data.description }}</p>
      <span class="area-[tags] flex justify-start gap-2">
        <span
          v-for="(tag, index) in data.tags"
          :key="index"
          class="px-2 py-0.5 rounded-lg bg-accent-20 text-color text-xs"
          >{{ tag }}</span
        >
      </span>
    </span>
  </component>
</template>
