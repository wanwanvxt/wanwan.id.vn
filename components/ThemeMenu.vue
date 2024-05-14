<script setup lang="ts">
const { getTheme, setTheme } = useThemeStore();
</script>

<template>
  <div class="theme-menu">
    <UiMenu>
      <UiMenuButton class="menu-btn">
        <IconDroplet />
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
          <UiMenuItem v-for="theme in ThemeFlag" :key="theme" @click="setTheme(theme)">
            <button class="theme-btn">
              <span>_{{ theme }}</span>
              <IconCheck v-if="theme == getTheme()" />
            </button>
          </UiMenuItem>
        </UiMenuItems>
      </Transition>
    </UiMenu>
  </div>
</template>

<style lang="postcss" scoped>
.theme-menu {
  @apply relative select-none;

  .menu-btn {
    @apply border-l border-l-accent p-2.5 text-textCol/60;

    &:hover {
      @apply bg-accent-10-hover text-textCol;
    }

    .feather {
      @apply h-6 w-6;
    }
  }
  .menu-items {
    @apply absolute right-1 top-full mt-1 rounded bg-accent p-1 shadow;

    .theme-btn {
      @apply flex w-32 items-center justify-between rounded px-2 py-1 text-textCol ui-active:bg-primary;

      .feather {
        @apply h-4 w-4 text-primary ui-active:text-textCol;
      }
    }
  }
}
</style>
