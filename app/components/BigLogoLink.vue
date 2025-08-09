<script setup lang="ts">
const props = defineProps({
  link: String,
  name: String,
  imagePath: String,
})
</script>

<template>
  <div>
    <a :href="link">
    <img :src="imagePath" :alt="name + ' logo'"
         class="w-18 border-4 border-gray-800 rounded-full p-2">
    </a>
  </div>
</template>

<style scoped>

</style>