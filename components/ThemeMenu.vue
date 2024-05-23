<script setup lang="ts">
import { DropletIcon, CheckIcon } from '@wanwanvxt/vue-feathericons';
const { getTheme, setTheme } = useThemeStore();
</script>

<template>
  <div class="relative select-none">
    <UiMenu>
      <UiMenuButton
        class="flex h-14 w-14 items-center justify-center border-l border-l-accent text-textCol/60 hover:bg-accent-10-hover hover:text-textCol"
      >
        <DropletIcon class="!h-6 !w-6" />
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
          <UiMenuItem v-for="theme in ThemeFlag" :key="theme" @click="setTheme(theme)">
            <button
              class="flex w-32 items-center justify-between rounded px-2 py-1 text-base text-textCol ui-active:bg-primary"
            >
              <span>{{ toCapitalizedCase(theme) }}</span>
              <CheckIcon
                v-if="theme == getTheme()"
                class="h-4 w-4 text-primary ui-active:text-textCol"
              />
            </button>
          </UiMenuItem>
        </UiMenuItems>
      </Transition>
    </UiMenu>
  </div>
</template>
