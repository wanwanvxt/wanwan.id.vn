<script setup lang="ts">
defineProps({
  navs: Array<HeaderNavType>
});

const IsMobile: Ref<boolean> = ref(false);

function onWindowResize() {
  if (window.innerWidth <= 640) {
    IsMobile.value = true;
    return;
  }

  IsMobile.value = false;
}

onMounted(() => {
  onWindowResize();
  window.addEventListener('resize', onWindowResize);
});
onUnmounted(() => {
  window.removeEventListener('resize', onWindowResize);
});
</script>

<template>
  <header
    class="sticky top-0 z-[999] grid h-12 w-full grid-cols-[1fr_5fr] items-center border-b border-b-accent bg-bgCol max-sm:grid-cols-[auto_min-content]"
  >
    <NuxtLink class="border-r-accent px-5 py-2.5 text-primary sm:border-r" href="/"
      >wanwan</NuxtLink
    >

    <div class="flex items-center justify-between max-sm:justify-end">
      <nav v-if="!IsMobile" class="max-sm:hidden">
        <NuxtLink
          v-for="nav in navs"
          :key="nav.name"
          class="border-r border-b-primary border-r-accent px-5 py-2.5 text-textCol/60 hover:border-b hover:text-textCol"
          active-class="border-b !text-textCol"
          :href="nav.href"
          >{{ nav.name }}</NuxtLink
        >
      </nav>

      <ThemeMenu />

      <NavMenu v-if="IsMobile" class="sm:hidden" :navs="navs" />
    </div>
  </header>
</template>
