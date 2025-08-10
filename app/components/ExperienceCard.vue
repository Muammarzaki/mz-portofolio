<script setup lang="ts">
const props = defineProps({
  title: String,
  description: String,
  period: String,
})
</script>

<template>
  <div class="p-2 bg-[url(/texture/diagonal-stroke.png)] bg-cover bg-center">
    <h4 class="font-bold text-2xl mb-2">{{ props.title }}</h4>
    <div>
      <h5 class="float-right ml-4 mb-2 font-semibold">{{ props.period }}</h5>
      <p class="font-sm font-light font-montserrat">{{ props.description }}</p>
    </div>
  </div>
</template>

<style scoped>
* {
  font-family: 'Montserrat', sans-serif;
}
</style>