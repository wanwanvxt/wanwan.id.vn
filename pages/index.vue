<script setup lang="ts">
import projects from '../assets/data/projects.json';

useHead({
  title: 'Wanwan - DevBlog'
});
</script>

<template>
  <NuxtLayout>
    <main class="container mx-auto md:grid md:grid-cols-2 md:gap-4">
      <div
        class="py-16 md:sticky md:top-12 md:flex md:h-[calc((100vh-3.25rem))] md:flex-col md:justify-between"
      >
        <div class="max-sm:px-3">
          <h1 class="text-4xl font-bold text-textCol">Hi, i'm Trường</h1>
          <h2 class="text-md mt-3 font-semibold text-textCol">A student and a noob developer!</h2>
          <p class="mt-4 text-textCol/60">I build some things in my spare time.</p>

          <div class="mt-16 flex items-center justify-start gap-5 text-textCol/60">
            <a class="hover:text-primary" href="https://github.com/wanwanvxt" title="Github">
              <IconGithub />
            </a>
            <a class="hover:text-primary" href="mailto:wanwan.vxt@gmail.com" title="Email">
              <IconAtSign />
            </a>
          </div>
        </div>

        <AppCopyright class="max-md:hidden max-sm:px-3" />
      </div>

      <div class="pb-16 max-sm:px-3 md:pt-16">
        <h2 class="mb-4 text-xl font-bold text-textCol">MY FEATURED PROJECTS</h2>
        <HomeProjectItems v-if="projects.length > 0">
          <HomeProjectItem
            v-for="(project, index) in projects"
            :key="index"
            :project="project"
            class="mb-4 hover:!opacity-100 hover:!blur-none group-hover/list:opacity-50 group-hover/list:blur-[1px]"
          />
        </HomeProjectItems>

        <h3 class="mb-4 text-textCol" v-else>
          (＞﹏＜) Oops! Currently, I don't have any featured projects.
        </h3>

        <a
          class="group font-semibold text-textCol hover:text-primary"
          href="https://github.com/wanwanvxt?tab=repositories"
        >
          <span class="mr-1 underline-offset-4 group-hover:underline">See more repositories</span>
          <IconArrowRight class="h-4 w-4 transition group-hover:translate-x-1" />
        </a>

        <AppCopyright class="mt-16 md:hidden" />
      </div>
    </main>
  </NuxtLayout>
</template>
