<template>
  <header
    class="sticky top-0 z-[999] flex h-14 w-full items-center justify-between border-b border-b-accent bg-bgCol"
  >
    <NuxtLink
      class="flex h-14 items-center justify-start gap-1 border-r-accent px-5 py-2.5 text-xl font-semibold text-primary"
      href="/"
    >
      <img class="h-6 w-6" src="/img/brand.svg" alt="Wanwan" />
      <span>wanwan</span>
    </NuxtLink>

    <div class="flex items-center justify-end">
      <ThemeMenu />
    </div>
  </header>
</template>
