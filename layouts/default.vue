<script setup lang="ts">
const HeaderNavs: Array<NavType> = [
  { name: '_hello', href: '/' },
  { name: '_projects', href: '/projects' }
];
</script>

<template>
  <AppHeader :navs="HeaderNavs" />
  <slot />

  <AppFooter />
</template>
