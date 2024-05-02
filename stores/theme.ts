import { useLocalStorage } from '@vueuse/core';

export enum ThemeFlag {
  Light = 'light',
  Dark = 'dark',
  Slate = 'slate',
  Dracula = 'dracula',
  System = 'system'
};

export const useThemeStore = defineStore('theme', () => {
  const currentTheme = useLocalStorage('theme', ThemeFlag.System);

  function getTheme() {
    return currentTheme.value;
  }
  async function setTheme(value: ThemeFlag | string) {
    if (!Object.values(ThemeFlag).includes(value as ThemeFlag)) {
      value = ThemeFlag.System;
    }

    currentTheme.value = value;
    document.documentElement.dataset['theme'] = value;
  }

  return { getTheme, setTheme };
});