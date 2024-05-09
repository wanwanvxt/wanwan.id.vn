<script setup lang="ts">
useHead({
  title: 'Wanwan - DevBlog'
});
</script>

<template>
  <NuxtLayout>
    <main class="flex min-h-[calc(100vh-3rem)] items-center justify-center overflow-x-hidden px-5">
      <div>
        <p class="text-textCol/60">Hi all. I am</p>
        <h1 class="text-3xl font-semibold text-textCol">Vũ Xuân Trường</h1>
        <h3 class="text-xl text-primary">&gt; A tiny developer</h3>
        <p class="mt-10 text-textCol/60">// you can see this site on my Github page</p>
        <p class="text-textCol/60">
          const githubLink =
          <a
            class="hover:text-textCol hover:underline"
            href="https://github.com/wanwanvxt/wanwan.id.vn"
          >
            'https://github.com/wanwanvxt/wanwan.id.vn'
          </a>
        </p>
      </div>
    </main>
  </NuxtLayout>
</template>
