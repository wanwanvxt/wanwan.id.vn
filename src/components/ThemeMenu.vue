<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
import { useThemeStore, themes } from '../stores/themeStore';
import { toCapitalizedCase } from '../utils';
import DropLetIcon from './icons/DropLetIcon.vue';
import ChevronDownIcon from './icons/ChevronDownIcon.vue';
import CheckIcon from './icons/CheckIcon.vue';

const { getTheme, setTheme } = useThemeStore();
</script>

<template>
  <div class="relative select-none">
    <Menu>
      <MenuButton
        class="flex items-center justify-center rounded bg-accent px-2 py-1 text-xs text-color shadow hover:bg-accent-10-hover"
      >
        <DropLetIcon class="mr-1 h-3 w-3" />
        Theme
        <ChevronDownIcon class="ml-1 h-3 w-3" />
      </MenuButton>

      <Transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems class="absolute right-0 top-full mt-2 rounded bg-accent p-1 shadow">
          <MenuItem v-for="(theme, index) in themes" :key="index" @click="setTheme(theme)">
            <div
              class="flex w-28 cursor-pointer items-center justify-between rounded px-2 py-1 text-xs text-color ui-active:bg-primary"
            >
              {{ toCapitalizedCase(theme) }}
              <CheckIcon
                class="h-3 w-3 text-primary ui-active:text-color"
                v-if="theme == getTheme()"
              />
            </div>
          </MenuItem>
        </MenuItems>
      </Transition>
    </Menu>
  </div>
</template>
