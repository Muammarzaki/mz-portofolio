<script setup lang="ts">
const props = defineProps({
  title: String,
  description: String,
  period: String,
})
</script>

<template>
  <div class="p-2 bg-[url(/texture/diagonal-stroke.png)] bg-cover relative bg-center">
    <h4 class="font-bold text-2xl mb-2">{{ props.title }}</h4>
    <h5 class="float-right font-semibold uppercase text-white bg-gray-900 p-1 px-2 rounded-md absolute -bottom-3.5 right-5 "
    >{{ props.period }}</h5>
    <p class="font-sm font-light font-montserrat" v-html="props.description"></p>
  </div>
</template>

<style scoped>
* {
  font-family: 'Montserrat', sans-serif;
}
</style>