import { useStorage } from '@vueuse/core';
import { defineStore } from 'pinia';

export const themes = ['light', 'dark', 'slate', 'dracula', 'system'];

export const useThemeStore = defineStore('theme', () => {
  const currentTheme = useStorage('theme', 'system');

  function getTheme() {
    return currentTheme.value;
  }
  async function setTheme(value: string) {
    if (themes.includes(value)) {
      currentTheme.value = value;
      document.documentElement.dataset['theme'] = value;
      return;
    }

    currentTheme.value = 'system';
    document.documentElement.dataset['theme'] = 'system';
  }

  return { currentTheme, getTheme, setTheme };
});
