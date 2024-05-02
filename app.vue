<script setup lang="ts">
const { getTheme, setTheme } = useThemeStore();

provideHeadlessUseId(() => useId());

onBeforeMount(() => {
  setTheme(getTheme());
});
</script>

<template>
  <NuxtPage />
</template>
