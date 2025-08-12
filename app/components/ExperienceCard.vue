<script setup lang="ts">
const props = defineProps({
  title: String,
  description: String,
  period: String,
  github: String,
  website: String,
})
</script>

<template>
  <div class="p-2 bg-[url(@/assets/textures/diagonal-stroke.png)] bg-cover relative bg-center">
    <h4 class="font-bold text-2xl mb-2">{{ props.title }}</h4>
    <p class="font-sm font-light font-montserrat pb-6" v-html="props.description"></p>
    <h5 class="float-right font-semibold uppercase text-white bg-gray-900 p-1 px-2 rounded-md absolute -bottom-3.5 right-5 "
    >{{ props.period }}</h5>
    <div class="absolute left-3 -bottom-3 flex flex-row gap-1">
      <a v-if="props.github" :href="props.github">
        <img src="@/assets/logos/github-mark-white.svg" alt="github logo"
             class="w-8 h-8 bg-gray-900 rounded-full p-1 ">
      </a>
      <a v-if="props.website" :href="props.website">
        <img src="@/assets/logos/website-mark-white.svg" alt="github logo"
             class="w-8 h-8 bg-gray-900 rounded-full p-1 ">
      </a>
    </div>
  </div>
</template>

<style scoped>
* {
  font-family: 'Montserrat', sans-serif;
}
</style>