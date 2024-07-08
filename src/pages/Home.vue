<script setup>
import { onMounted, ref } from 'vue';
import { useHead } from '@unhead/vue';
import randomSentence from 'random-sentence';
import { PhCodeBlock, PhListHeart, PhArrowRight } from '@phosphor-icons/vue';

const randomWords = ref('');
const myFavLangs = [
  { name: 'C#', color: '#280068' },
  { name: 'Java', color: '#EA2A30' },
  { name: 'C/C++', color: '#5E97D0' },
  { name: 'Javascript', color: '#F7DF1E' },
  { name: 'PHP', color: '#4F5B93' },
  { name: 'Haxe', color: '#F68712' }
];
const myFeatProjects = [];

const contacts = [
  { name: 'Github', url: 'https://github.com/wanwanvxt' },
  { name: 'Facebook', url: 'https://facebook.com/wanwanvxt' },
  { name: 'Email', url: 'mailto:wanwan.vxt@gmail.com' }
];

const updateRandomWords = () => {
  setInterval(() => {
    randomWords.value = randomSentence({ min: 1, max: 10 });
  }, 3000);
};

onMounted(() => {
  updateRandomWords();
});

useHead({
  title: 'Wanwan',
  meta: [
    {
      name: 'description',
      content: 'Vu Xuan Truong - wanwan.id.vn'
    }
  ]
});
</script>

<template>
  <main class="container mx-auto p-4 max-w-xl">
    <section class="text-center mb-10">
      <a href="/"><h1 class="text-3xl font-semibold">wanwan.id.vn</h1></a>
      <p title="Random words">🎲 {{ randomWords }}</p>
    </section>

    <section class="flex justify-center items-center gap-5 max-sm:flex-col">
      <img class="rounded-full w-20" src="/img/me.jpg" />
      <p class="flex-1 py-3 font-medium">
        Hi there! I'm Vu Xuan Truong, an aspiring programmer currently studying at East Asia
        University of Technology.
      </p>
    </section>

    <hr class="my-5 h-px bg-gray-300" />

    <section class="mb-5">
      <h3 class="mb-3 text-xl font-semibold text-nowrap text-sky-800">
        <PhCodeBlock :size="32" class="inline-block" />
        My favorite languages
      </h3>
      <ul class="flex gap-1 flex-wrap">
        <li
          v-for="lang in myFavLangs"
          class="text-slate-100 px-1 py-0.5 rounded-sm"
          :style="`background-color: ${lang.color}`"
        >
          {{ lang.name }}
        </li>
      </ul>
    </section>

    <section class="mb-5">
      <h3 class="mb-3 text-xl font-semibold text-nowrap text-sky-800">
        <PhListHeart :size="32" class="inline-block" />
        My featured projects
      </h3>
      <ul v-if="myFeatProjects.length > 0"></ul>
      <p v-else class="mb-3">No featured projects yet.</p>

      <a class="text-sky-800 underline group" href="https://github.com/wanwanvxt">
        Visit the Github page to explore all my projects
        <PhArrowRight :size="16" class="inline-block group-hover:translate-x-1" />
      </a>
    </section>
  </main>

  <footer class="bg-slate-900">
    <div class="container mx-auto max-w-xl p-4">
      <section>
        <h3 class="mb-3 text-xl font-semibold text-nowrap text-white">Contact</h3>
        <ul>
          <li v-for="contact in contacts" class="text-white underline">
            <a :href="contact.url">{{ contact.name }}</a>
          </li>
        </ul>
      </section>
    </div>
  </footer>
</template>
