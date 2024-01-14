<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { RouterView } from 'vue-router';
import { useThemeStore } from './stores/themeStore';
import HeaderApp from './components/HeaderApp.vue';

const { getTheme, setTheme } = useThemeStore();

onBeforeMount(() => {
  setTheme(getTheme());
});
</script>

<template>
  <HeaderApp />
  <RouterView />
</template>
