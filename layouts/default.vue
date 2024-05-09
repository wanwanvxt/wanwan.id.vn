<script setup lang="ts">
const HeaderNavs: Array<HeaderNavType> = [
  { name: '_hello', href: '/' },
  { name: '_projects', href: '/projects' }
];
</script>

<template>
  <AppHeader :navs="HeaderNavs" />
  <slot />

  <AppFooter />
</template>
