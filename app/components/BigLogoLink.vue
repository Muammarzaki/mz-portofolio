<script setup lang="ts">
const props = defineProps({
  link: String,
  name: String,
  imagePath: String,
})
</script>

<template>
  <div>
    <a :href="props.link">
      <img :src="props.imagePath" :alt="props.name + ' logo'"
           class="w-18 border-4 border-gray-800 rounded-full p-2">
    </a>
  </div>
</template>