<script setup lang="ts">
defineProps({
  data: Object as () => ProjectType
});
</script>

<template>
  <component
    :is="isExternalLink(data?.link!) ? 'a' : resolveComponent('NuxtLink')"
    :href="data?.link"
    class="project-card"
  >
    <img class="thumbnail" :src="data?.thumbnail" :alt="data?.name" />
    <div class="detail">
      <h3 class="name">
        <span>{{ data?.name }}</span>
        <IconArrowUpRight />
      </h3>
      <p class="description">{{ data?.description }}</p>
      <div class="tag-wrapper">
        <span v-for="tag in data?.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
    </div>
  </component>
</template>

<style lang="postcss" scoped>
.project-card {
  @apply rounded border border-accent shadow;

  .thumbnail {
    @apply rounded;
  }
  .detail {
    @apply p-5;

    .name {
      @apply text-xl font-semibold text-textCol;

      .feather {
        @apply ml-1 h-5 w-5 transition;
      }
    }
    .description {
      @apply text-textCol/60;
    }
    .tag-wrapper {
      @apply mt-5 flex gap-3 overflow-x-scroll;

      .tag {
        @apply rounded-lg bg-accent-20 px-2 py-0.5 text-xs text-textCol;
      }
    }
  }

  &:hover {
    @apply bg-accent/80;

    .detail {
      .name {
        @apply text-primary;

        .feather {
          @apply -translate-y-1 translate-x-1;
        }
      }
    }
  }
}
</style>
