<script setup>
import projects from '../data/projects.json';
import { FacebookIcon, GithubIcon, AtSignIcon, ArrowRightIcon } from '@wanwanvxt/vue-feathericons';
import HeaderApp from '../components/HeaderApp.vue';
import CardLink from '../components/CardLink.vue';
</script>

<template>
  <main class="container mx-auto flex flex-col items-center justify-start gap-8 py-6">
    <HeaderApp />

    <div class="container p-3">
      <h1 class="mb-3 text-5xl font-bold">Vũ Xuân Trường</h1>
      <p class="text-textCol/80 mb-3 text-xl">
        Currently, I am a student majoring in information technology.
      </p>
      <div class="text-textCol/80 flex gap-3">
        <a class="hover:text-primary" href="https://fb.com/wanwanvxt"><FacebookIcon /></a>
        <a class="hover:text-primary" href="https://github.com/wanwanvxt"><GithubIcon /></a>
        <a class="hover:text-primary" href="mailto:wanwan.vxt@gmail.com"><AtSignIcon /></a>
      </div>
    </div>

    <div class="container p-3">
      <h2 class="mb-3 text-3xl font-bold">Projects</h2>
      <div class="mb-3 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        <CardLink v-for="(project, index) in projects" :key="index" :data="project" />
      </div>
      <a
        class="text-primary group text-lg hover:underline"
        href="https://github.com/wanwanvxt?tab=repositories"
      >
        <span>Visit Github to explore my other projects</span>
        <ArrowRightIcon class="transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  </main>
</template>
