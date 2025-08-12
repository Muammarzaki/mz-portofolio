<script setup lang="ts">
let currentTime = ref(new Date())

onMounted(() => {
  const timer = setInterval(() => {
    currentTime.value = new Date()
  }, 1000)

  onUnmounted(() => {
    clearInterval(timer)
  })
})
</script>

<template>
  <footer class="w-full">
    <div class="flex flex-wrap justify-between items-center px-4 pb-1">

      <div id="footer-start" class="text-xs font-medium">
        Aceh, {{ currentTime.toLocaleTimeString('id-ID', {hour: 'numeric', minute: 'numeric', hour12: true}) }}
      </div>

      <div id="footer-center" class="lg:absolute lg:left-1/2 lg:-translate-x-1/2 text-xs font-medium">
        © 2025, All rights reserved.
      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>