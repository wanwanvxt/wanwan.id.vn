<script setup lang="ts">
import ItemWrapper from './ItemWrapper.vue';
import ArrowRight from '../icons/ArrowRight.vue';
import projects from '../../data/projects.json';
</script>

<template>
  <h2 class="mb-4 font-bold text-color">MY PROJECTS</h2>
  <div class="group/list mb-4 flex flex-col items-center" v-if="projects.length > 0">
    <ItemWrapper
      v-for="(project, index) in projects"
      :key="index"
      :data="project"
      class="mb-4 hover:!opacity-100 hover:!blur-none group-hover/list:opacity-50 group-hover/list:blur-[1px]"
    />
  </div>

  <h3 class="mb-4 text-color" v-else>🙁 Oops! Currently, I don't have any featured projects.</h3>

  <a
    class="group font-semibold text-color hover:text-primary"
    href="https://github.com/wanwanvxt?tab=repositories"
    target="_blank"
  >
    <span class="mr-1 underline-offset-4 group-hover:underline">See more repositories</span>
    <ArrowRight class="h-4 w-4 transition group-hover:translate-x-1" />
  </a>
</template>
