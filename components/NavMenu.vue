<script setup lang="ts">
defineProps({
  navs: Array<HeaderNavType>
});
</script>

<template>
  <div class="relative select-none">
    <UiMenu>
      <UiMenuButton
        class="border-l border-l-accent p-2.5 text-xs text-textCol/60 hover:bg-accent-10-hover hover:text-textCol"
      >
        <IconMenu class="h-6 w-6" />
      </UiMenuButton>

      <Transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <UiMenuItems class="absolute right-1 top-full mt-1 rounded bg-accent p-1 shadow">
          <UiMenuItem v-for="(nav, index) in navs" :key="index">
            <NuxtLink
              :href="nav.href"
              class="block w-32 rounded px-2 py-1 text-textCol ui-active:bg-primary"
            >
              {{ nav.name }}
            </NuxtLink>
          </UiMenuItem>
        </UiMenuItems>
      </Transition>
    </UiMenu>
  </div>
</template>
