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
      <NuxtImg
          :src="props.imagePath"
          :alt="props.name + ' logo'"
          class="w-18 border-4 border-gray-800 rounded-full p-2"
          preset="logo"
          width="72"
          height="72"
          sizes="72px"
          loading="lazy"
          decoding="async"
      />
    </a>
  </div>
</template>