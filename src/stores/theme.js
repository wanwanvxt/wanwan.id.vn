import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';

export const useThemeStore = defineStore('theme', () => {
  const theme = useLocalStorage('theme', 'dark');

  function getTheme() {
    return theme.value;
  }

  function setTheme(value) {
    if (value != 'light' && value != 'dark') {
      value = 'dark';
    }

    theme.value = value;
    document.documentElement.dataset['theme'] = value;
  }

  return { getTheme, setTheme };
});
