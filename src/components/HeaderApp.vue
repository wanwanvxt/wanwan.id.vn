<script setup lang="ts">
import { RouterLink } from 'vue-router';
import ThemeMenu from './ThemeMenu.vue';
</script>

<template>
  <header class="sticky top-0 z-[999] w-full border-b border-accent bg-main/80 backdrop-blur-3xl">
    <div class="container mx-auto flex h-12 items-center max-sm:px-2">
      <div class="flex flex-1 items-center justify-between">
        <RouterLink class="select-none font-medium text-color" to="/">
          <img class="feather" src="/img/logo.svg" alt="wanwan.id.vn" />
          wanwan
        </RouterLink>

        <ThemeMenu />
      </div>
    </div>
  </header>
</template>
