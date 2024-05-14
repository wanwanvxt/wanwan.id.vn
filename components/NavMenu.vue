<script setup lang="ts">
defineProps({
  navs: Array<HeaderNavType>
});
</script>

<template>
  <div class="nav-menu">
    <UiMenu>
      <UiMenuButton class="menu-btn">
        <IconMenu />
      </UiMenuButton>

      <Transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <UiMenuItems class="menu-items">
          <UiMenuItem v-for="(nav, index) in navs" :key="index">
            <NuxtLink :href="nav.href" class="nav-link">
              {{ nav.name }}
            </NuxtLink>
          </UiMenuItem>
        </UiMenuItems>
      </Transition>
    </UiMenu>
  </div>
</template>

<style lang="postcss" scoped>
.nav-menu {
  @apply relative select-none;

  .menu-btn {
    @apply border-l border-l-accent p-2.5 text-xs text-textCol/60;

    &:hover {
      @apply bg-accent-10-hover text-textCol;
    }

    .feather {
      @apply h-6 w-6;
    }
  }
  .menu-items {
    @apply absolute right-1 top-full mt-1 rounded bg-accent p-1 shadow;

    .nav-link {
      @apply block w-32 rounded px-2 py-1 text-textCol ui-active:bg-primary;
    }
  }
}
</style>
