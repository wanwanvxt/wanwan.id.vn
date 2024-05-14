<script setup lang="ts">
useHead({
  title: 'Wanwan - DevBlog'
});
</script>

<template>
  <NuxtLayout>
    <main>
      <div class="greeting">
        <h4>Hi all. I am</h4>
        <h1>Vũ Xuân Trường</h1>
        <h3>&gt; A tiny developer</h3>
        <p class="github-link">
          <span>// you can see this site on my Github page</span>
          <span>
            const githubLink =
            <a href="https://github.com/wanwanvxt/wanwan.id.vn">
              'https://github.com/wanwanvxt/wanwan.id.vn'
            </a>
          </span>
        </p>
      </div>
    </main>
  </NuxtLayout>
</template>

<style lang="postcss" scoped>
main {
  @apply flex min-h-[calc(100vh-3rem)] items-center justify-center overflow-x-hidden px-5;

  .greeting {
    h4 {
      @apply text-textCol/60;
    }
    h1 {
      @apply text-3xl font-semibold text-textCol;
    }
    h3 {
      @apply text-xl text-primary;
    }
    .github-link {
      @apply mt-10 flex flex-col text-textCol/60;

      a {
        @apply hover:text-textCol hover:underline;
      }
    }
  }
}
</style>
