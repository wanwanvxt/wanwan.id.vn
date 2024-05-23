<script setup lang="ts">
useHead({
  title: 'Vue Feather Icons | Wanwan',
  meta: [
    { name: 'description', content: 'A tiny devblog' },
    { property: 'og:image', content: 'https://wanwan.id.vn/img/vue-feathericons.png' },
    { name: 'twitter:image', content: 'https://wanwan.id.vn/img/vue-feathericons.png' },
    { name: 'twitter:card', content: 'summary' }
  ]
});
</script>

<template>
  <NuxtLayout>
    <main class="container mx-auto flex flex-col gap-16 px-10 py-16">
      <div>
        <h1 class="mb-4 text-5xl font-bold text-textCol">Vue Feather Icons</h1>
        <p class="text-lg text-textCol/80">
          Vue Feather Icons offers a rich set of Feather icon components for Vue.js. Visit the
          <a class="text-primary" href="https://feathericons.com">Feather homepage</a> to explore
          and search icons.
        </p>
      </div>

      <div>
        <h2 class="mb-3 text-3xl font-bold text-textCol">Usage</h2>

        <p class="mb-3 text-textCol">1. Install</p>
        <div class="rounded bg-accent p-5 font-mono text-textCol/80">
          <p># npm</p>
          <p>npm install @wanwanvxt/vue-feathericons</p>
          <br />
          <p># yarn</p>
          <p>yarn add @wanwanvxt/vue-feathericons</p>
        </div>

        <p class="my-3 text-textCol">2. Import individually the icon as a Vue component:</p>
        <div class="rounded bg-accent p-5 font-mono text-textCol/80">
          <p>&lt;script setup&gt;</p>
          <p>&emsp;import { GithubIcon } from '@wanwanvxt/vue-feathericons';</p>
          <p>&lt;/script&gt;</p>
          <br />
          <p>&lt;template&gt;</p>
          <p>&emsp;&lt;GithubIcon/&gt;</p>
          <p>&emsp;&lt;div&gt;...&lt;/div&gt;</p>
          <p>&lt;/template&gt;</p>
        </div>
      </div>

      <div>
        <h2 class="mb-3 text-3xl font-bold text-textCol">License</h2>
        <p class="text-textCol">This library is MIT licensed.</p>
      </div>

      <div>
        <a
          class="text-lg text-textCol underline hover:text-primary"
          href="https://github.com/wanwanvxt/vue-feathericons"
        >
          View source
        </a>
      </div>
    </main>
  </NuxtLayout>
</template>
