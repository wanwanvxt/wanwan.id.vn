<script setup lang="ts">
const { getTheme, setTheme } = useThemeStore();
</script>

<template>
  <div class="relative select-none">
    <UiMenu>
      <UiMenuButton
        class="flex items-center justify-center rounded bg-accent px-2 py-1 text-xs text-textCol shadow hover:bg-accent-10-hover"
      >
        <IconDroplet class="mr-1 h-3 w-3" />
        Theme
        <IconChevronDown class="ml-1 h-3 w-3" />
      </UiMenuButton>

      <Transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <UiMenuItems class="absolute right-0 top-full mt-2 rounded bg-accent p-1 shadow">
          <UiMenuItem v-for="theme in ThemeFlag" :key="theme" @click="setTheme(theme)">
            <div
              class="flex w-28 cursor-pointer items-center justify-between rounded px-2 py-1 text-xs text-textCol ui-active:bg-primary"
            >
              {{ toCapitalizedCase(theme) }}
              <IconCheck
                class="h-3 w-3 text-primary ui-active:text-textCol"
                v-if="theme == getTheme()"
              />
            </div>
          </UiMenuItem>
        </UiMenuItems>
      </Transition>
    </UiMenu>
  </div>
</template>
