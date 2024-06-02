<script setup>
import { onBeforeMount } from 'vue';
import { useThemeStore } from './stores/theme';

const { getTheme, setTheme } = useThemeStore();

onBeforeMount(() => {
  setTheme(getTheme());
});
</script>

<template>
  <RouterView />
</template>
