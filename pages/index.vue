<script setup lang="ts">
import projects from '../assets/data/projects.json';
import { FacebookIcon, TwitterIcon, GithubIcon, AtSignIcon } from '@wanwanvxt/vue-feathericons';

useHead({
  title: 'Wanwan',
  meta: [
    { name: 'description', content: 'A tiny devblog' },
    { property: 'og:image', content: 'https://wanwan.id.vn/img/wanwan.png' },
    { name: 'twitter:image', content: 'https://wanwan.id.vn/img/wanwan.png' },
    { name: 'twitter:card', content: 'summary' }
  ]
});
</script>

<template>
  <NuxtLayout>
    <main class="container mx-auto flex flex-col gap-16 px-10 py-16">
      <div>
        <h1 class="mb-4 text-5xl font-bold text-textCol">Vũ Xuân Trường</h1>
        <p class="mb-8 text-lg text-textCol/80">
          Currently, I am a student majoring in information technology.
        </p>
        <div>
          <a class="mr-6 text-textCol/80 hover:text-primary" href="https://fb.com/wanwanvxt">
            <FacebookIcon />
          </a>
          <a class="mr-6 text-textCol/80 hover:text-primary" href="https://x.com/wanwanvxt">
            <TwitterIcon />
          </a>
          <a class="mr-6 text-textCol/80 hover:text-primary" href="https://github.com/wanwanvxt">
            <GithubIcon />
          </a>
          <a class="text-textCol/80 hover:text-primary" href="mailto:wanwan.vxt@gmail.com">
            <AtSignIcon />
          </a>
        </div>
      </div>

      <div>
        <h2 class="mb-8 text-3xl font-bold text-textCol">Projects</h2>
        <div
          class="mb-8 grid grid-cols-1 grid-rows-[min-content] gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          <ProjectItem v-for="project in projects" :key="project.name" :data="project" />
        </div>
        <a
          class="text-lg text-textCol underline hover:text-primary"
          href="https://github.com/wanwanvxt?tab=repositories"
        >
          Visit Github to explore my other projects
        </a>
      </div>
    </main>
  </NuxtLayout>
</template>
