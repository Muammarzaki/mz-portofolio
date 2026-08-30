<script setup lang="ts">
const currentTime = ref(new Date())
let timer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  timer = setInterval(() => {
    currentTime.value = new Date()
  }, 1000)
})

onUnmounted(() => {
  if (timer) {
    clearInterval(timer)
  }
})
</script>

<template>
  <footer class="w-full mt-auto">
    <div class="flex flex-wrap justify-between items-center px-4 pb-1">

      <div id="footer-start" class="text-xs font-medium">
        Aceh,
        <NuxtTime :datetime="currentTime.toISOString()" locale="en-US" hour="2-digit" minute="2-digit"
                  hour12/>
      </div>

      <div id="footer-center" class="lg:absolute lg:left-1/2 lg:-translate-x-1/2 text-xs font-medium">
        © 2025, All rights reserved.
      </div>
    </div>
  </footer>
</template>
