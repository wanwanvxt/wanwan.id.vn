<script setup lang="ts">
import FacebookIcon from '../components/icons/FacebookIcon.vue';
import GithubIcon from '../components/icons/GithubIcon.vue';
import AtSignIcon from '../components/icons/AtSignIcon.vue';
import CreditApp from '../components/home_view/CreditApp.vue';
import ListWrapper from '../components/home_view/ListWrapper.vue';
</script>

<template>
  <main class="container mx-auto md:grid md:grid-cols-2 md:gap-4">
    <!-- left -->
    <div
      class="py-16 md:sticky md:top-12 md:flex md:h-[calc((100vh-3.25rem))] md:flex-col md:justify-between"
    >
      <div class="max-sm:px-3">
        <h1 class="text-4xl font-bold text-color">Hi, i'm Trường</h1>
        <h2 class="text-md mt-3 font-semibold text-color">A student and a noob developer!</h2>
        <p class="mt-4 text-color/60">I build some things in my spare time.</p>

        <span class="mt-16 flex items-center justify-start gap-5 text-color/60">
          <a
            class="hover:text-primary"
            href="https://fb.com/wanwanvxt"
            target="_blank"
            title="Facebook"
          >
            <FacebookIcon />
          </a>
          <a
            class="hover:text-primary"
            href="https://github.com/wanwanvxt"
            target="_blank"
            title="Github"
          >
            <GithubIcon />
          </a>
          <a
            class="hover:text-primary"
            href="mailto:wanwan.vxt@gmail.com"
            target="_blank"
            title="Email"
          >
            <AtSignIcon />
          </a>
        </span>
      </div>

      <CreditApp class="max-md:hidden max-sm:px-3" />
    </div>
    <!-- right -->
    <div class="pb-16 max-sm:px-3 md:pt-16">
      <ListWrapper />
      <CreditApp class="mt-16 md:hidden" />
    </div>
  </main>
</template>
