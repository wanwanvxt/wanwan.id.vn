<script setup lang="ts">
import projects from '../assets/data/projects.json';

useHead({
  title: 'Projects | Wanwan - DevBlog'
});
</script>

<template>
  <NuxtLayout>
    <main>
      <h1 class="heading">MY FEATURED PROJECTS</h1>
      <div class="project-wrapper">
        <HomeProjectItem v-for="(project, index) in projects" :key="index" :data="project" />
      </div>
    </main>
  </NuxtLayout>
</template>

<style lang="postcss" scoped>
main {
  @apply min-h-[calc(100vh-3rem)] p-5 pb-12;

  .heading {
    @apply text-xl font-semibold text-textCol;
  }
  .project-wrapper {
    @apply mt-5 grid grid-cols-4 grid-rows-[min-content] gap-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1;
  }
}
</style>
