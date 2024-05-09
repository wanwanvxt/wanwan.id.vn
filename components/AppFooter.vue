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
  <footer
    class="fixed bottom-0 left-0 z-[999] flex h-7 w-full items-center justify-between border-t border-t-accent bg-bgCol"
  >
    <nav>
      <span class="border-r border-r-accent px-2 py-1 text-sm text-textCol/60">contact me</span>
      <a
        v-for="contact in Contacts"
        :key="contact.name"
        :href="contact.href"
        class="border-r border-r-accent px-2 py-1 text-sm text-textCol/60 hover:bg-accent-10-hover hover:text-textCol"
      >
        <component class="h-4 w-4" :is="contact.icon" />
      </a>
    </nav>

    <span class="border-l border-l-accent px-2 py-1 text-sm text-textCol/60 max-sm:hidden">
      special thank to:
      <a
        class="hover:text-textCol hover:underline"
        href="https://www.behance.net/gallery/142207047/Portfolio-Concept-V2"
      >
        Yanka Darelova
      </a>
    </span>
  </footer>
</template>
