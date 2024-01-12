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
        class="bg-accent hover:bg-accent-10-hover text-color text-xs px-2 py-1 rounded shadow flex items-center justify-center"
      >
        <DropLetIcon class="w-3 h-3 mr-1" />
        Theme
        <ChevronDownIcon class="w-3 h-3 ml-1" />
      </MenuButton>

      <Transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems class="absolute top-full right-0 mt-2 p-1 bg-accent rounded shadow">
          <MenuItem
            v-slot="{ active }"
            v-for="(theme, index) in themes"
            :key="index"
            @click="setTheme(theme)"
          >
            <div
              class="px-2 py-1 w-28 rounded text-color text-xs flex justify-between items-center cursor-pointer"
              :class="{ 'bg-primary': active }"
            >
              {{ toCapitalizedCase(theme) }}
              <CheckIcon
                class="w-3 h-3"
                :class="{ 'text-primary': !active, 'text-color': active }"
                v-if="theme == getTheme()"
              />
            </div>
          </MenuItem>
        </MenuItems>
      </Transition>
    </Menu>
  </div>
</template>
