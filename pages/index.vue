<script setup lang="ts">
useHead({
  title: 'Vũ Xuân Trường',
  meta: [
    { name: 'description', content: 'Hi, i\'m Vũ Xuân Trường!' },
  ],
})

const contacts = [
  { name: 'Facebook', url: 'https://facebook.com/wanwanvxt', username: 'fb.com/wanwanvxt' },
  { name: 'Github', url: 'https://github.com/wanwanvxt', username: 'github.com/wanwanvxt' },
  { name: 'Email', url: 'mailto:wanwan.vxt@gmail.com', username: 'wanwan.vxt@gmail.com' },
]

const projects = []
</script>

<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <main style="grid-area: appBody">
    <div class="bg-surface mb-20">
      <div class="container mx-auto px-8 py-12">
        <h1 class="text-4xl mb-8">
          Hi!
        </h1>
        <p class="text-justify">
          I'm Vũ Xuân Trường, a developer with a passion for crafting web applications, games, and desktop software.
          In my free time, I enjoy building a variety of apps and libraries.
          Check out my projects on Github and lend your support with a star ⭐!
        </p>
      </div>
    </div>

    <div class="container mx-auto mb-20 px-8">
      <h1
        id="projects"
        class="text-4xl mb-4"
      >
        Projects
      </h1>
      <ul
        v-if="projects.length > 0"
        class="mb-4 grid gap-8 grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1"
      >
        <li
          v-for="project in projects"
          :key="project.name"
          class="flex"
        >
          <NuxtLink
            class="
              group flex flex-col bg-surface rounded shadow border border-surface overflow-hidden transition-all
              hover:border-primary hover:shadow-xl hover:no-underline hover:-translate-y-1
            "
            :to="project.url"
          >
            <div class="h-48 bg-surface">
              <img
                class="w-full h-full object-cover shadow transition-all group-hover:scale-90"
                :src="project.thumbnail"
                :alt="project.name"
              >
            </div>
            <div class="p-4">
              <h3 class="text-2xl">
                {{ project.name }}
              </h3>
              <p class="text-white">
                {{ project.description }}
              </p>
            </div>
          </NuxtLink>
        </li>
      </ul>
      <a href="https://github.com/wanwanvxt?tab=repositories">See more &rarr;</a>
    </div>

    <div class="container mx-auto mb-20 px-8">
      <h1
        id="contacts"
        class="text-4xl mb-4"
      >
        Contacts
      </h1>
      <ul class="list-disc ml-6">
        <li
          v-for="contact in contacts"
          :key="contact.name"
        >
          <span>{{ contact.name }}: </span>
          <a :href="contact.url">{{ contact.username }}</a>
        </li>
      </ul>
    </div>
  </main>

  <footer
    class="bg-surface py-4"
    style="grid-area: appFooter"
  >
    <p class="text-center">
      <small>Copyright &copy; 2024 <b>Vũ Xuân Trường</b></small>
    </p>
  </footer>
</template>
