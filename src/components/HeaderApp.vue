<script setup>
import { useThemeStore } from '@/stores/theme';
import { BoxIcon, DropletIcon } from '@wanwanvxt/vue-feathericons';

const { getTheme, setTheme } = useThemeStore();

const toggleTheme = () => {
  if (getTheme() == 'dark') {
    setTheme('light');
  } else if (getTheme() == 'light') {
    setTheme('dark');
  }
};
</script>

<template>
  <header class="container flex items-center justify-between p-3">
    <RouterLink class="text-primary font-bold" to="/">
      <BoxIcon class="!h-10 !w-10" />
    </RouterLink>
    <button class="text-primary hover:bg-accent-hover h-10 w-10 rounded" @click="toggleTheme">
      <DropletIcon />
    </button>
  </header>
</template>
