<template>
  <header class="sticky top-0 z-[999] w-full border-b border-accent bg-bgCol/80 backdrop-blur-3xl">
    <div class="container mx-auto flex h-12 items-center max-sm:px-2">
      <div class="flex flex-1 items-center justify-between">
        <NuxtLink class="-translate-y-1 font-yuruka text-2xl font-bold" to="/">
          <span class="text-textCol">wan</span>
          <span class="text-primary">wan</span>
        </NuxtLink>

        <ThemeMenu />
      </div>
    </div>
  </header>
</template>
