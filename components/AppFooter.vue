<script setup lang="ts">
import { IconAtSign, IconFacebook, IconGithub, IconTwitter } from '#components';

const Contacts: Array<ContactType> = [
  { name: 'Github', href: 'https://github.com/wanwanvxt', icon: IconGithub },
  { name: 'Facebook', href: 'https://fb.com/wanwanvxt', icon: IconFacebook },
  { name: 'Twitter', href: 'https://x.com/wanwanvxt', icon: IconTwitter },
  { name: 'Email', href: 'mailto:wanwan.vxt@gmail.com', icon: IconAtSign }
];
</script>

<template>
  <footer>
    <nav class="contact">
      <span>contact me</span>
      <a v-for="contact in Contacts" :key="contact.name" :href="contact.href" class="contact-link">
        <component :is="contact.icon" />
      </a>
    </nav>

    <span class="thanks">
      special thank to:
      <a href="https://www.behance.net/gallery/142207047/Portfolio-Concept-V2">Yanka Darelova</a>
    </span>
  </footer>
</template>

<style lang="postcss" scoped>
footer {
  @apply fixed bottom-0 left-0 z-[999] flex h-7 w-full items-center justify-between border-t border-t-accent bg-bgCol;

  .contact {
    span {
      @apply border-r border-r-accent px-2 py-1 text-sm text-textCol/60;
    }
    .contact-link {
      @apply border-r border-r-accent px-2 py-1 text-sm text-textCol/60;

      &:hover {
        @apply bg-accent-10-hover text-textCol;
      }

      .feather {
        @apply h-4 w-4;
      }
    }
  }
  .thanks {
    @apply border-l border-l-accent px-2 py-1 text-sm text-textCol/60 max-sm:hidden;

    a {
      @apply hover:text-textCol hover:underline;
    }
  }
}
</style>
