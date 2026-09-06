<script setup lang="ts">
const props = defineProps({
  title: String,
  description: String,
  period: String,
  github: String,
  website: String,
})

const img = useImage()
const backgroundUrl = img('/textures/diagonal-stroke.png', {
  width: 240,
  quality: 60,
  format: 'webp',
})
</script>

<template>
  <article
    class="p-2 bg-cover bg-repeat relative"
    :aria-label="`${props.title} experience`"
    :style="{ backgroundImage: `url('${backgroundUrl}')` }"
  >
    <h2 class="font-bold text-2xl mb-2">{{ props.title }}</h2>
    <p class="font-sm font-light font-montserrat pb-6" v-html="props.description"></p>
    <time
      class="float-right font-semibold uppercase text-white bg-gray-900 p-1 px-2 rounded-md absolute -bottom-3.5 right-5"
    >{{ props.period }}</time>
    <div class="absolute left-3 -bottom-3 flex flex-row gap-1">
      <a v-if="props.github" :href="props.github" :aria-label="`${props.title} source code on GitHub`" target="_blank" rel="noopener noreferrer">
        <img src="@/assets/logos/github-mark-white.svg" alt="GitHub"
             class="w-8 h-8 bg-gray-900 rounded-full p-1 ">
      </a>
      <a v-if="props.website" :href="props.website" :aria-label="`${props.title} related website`" target="_blank" rel="noopener noreferrer">
        <img src="@/assets/logos/website-mark-white.svg" alt="Website"
             class="w-8 h-8 bg-gray-900 rounded-full p-1 ">
      </a>
    </div>
  </article>
</template>

<style scoped>
* {
  font-family: 'Montserrat', sans-serif;
}
</style>