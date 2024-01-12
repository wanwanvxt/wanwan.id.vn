<script setup lang="ts">
import { RouterLink } from 'vue-router';
import ThemeMenu from './ThemeMenu.vue';
</script>

<template>
  <header class="w-full sticky top-0 bg-main/80 backdrop-blur-3xl border-b border-accent z-[999]">
    <div class="container mx-auto max-sm:px-2 flex items-center h-12">
      <div class="flex-1 flex items-center justify-between">
        <RouterLink class="text-color font-medium select-none" to="/">
          <img class="feather" src="../assets/logo.svg" alt="wanwan.id.vn" />
          wanwan
        </RouterLink>

        <ThemeMenu />
      </div>
    </div>
  </header>
</template>
