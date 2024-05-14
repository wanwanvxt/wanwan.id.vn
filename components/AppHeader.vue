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
  <header>
    <NuxtLink class="brand" href="/">wanwan</NuxtLink>

    <div class="navbar">
      <nav v-if="!IsMobile">
        <NuxtLink
          v-for="nav in navs"
          :key="nav.name"
          class="nav-link"
          active-class="active"
          :href="nav.href"
          >{{ nav.name }}</NuxtLink
        >
      </nav>

      <ThemeMenu />

      <NavMenu v-if="IsMobile" :navs="navs" />
    </div>
  </header>
</template>

<style lang="postcss" scoped>
header {
  @apply sticky top-0 z-[999] grid h-12 w-full grid-cols-[1fr_5fr] items-center border-b border-b-accent bg-bgCol max-sm:grid-cols-[auto_min-content];

  .brand {
    @apply border-r-accent px-5 py-2.5 text-primary sm:border-r;
  }
  .navbar {
    @apply flex items-center justify-between max-sm:justify-end;

    nav {
      @apply max-sm:hidden;

      .nav-link {
        @apply border-r border-b-primary border-r-accent px-5 py-2.5 text-textCol/60;

        &:hover {
          @apply border-b text-textCol;
        }

        &.active {
          @apply border-b !text-textCol;
        }
      }
    }
    .nav-menu {
      @apply sm:hidden;
    }
  }
}
</style>
