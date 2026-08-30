<script setup lang="ts">
const isOpen = ref(false)
const navRef = ref<HTMLElement | null>(null)
const route = useRoute()

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function closeMenu() {
  isOpen.value = false
}

function handleClickOutside(event: MouseEvent) {
  if (isOpen.value && navRef.value && !navRef.value.contains(event.target as Node)) {
    closeMenu()
  }
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    closeMenu()
  }
}

function handleResize() {
  if (window.innerWidth >= 768) {
    closeMenu()
  }
}

watch(() => route.fullPath, () => {
  closeMenu()
})

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleKeydown)
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleKeydown)
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <nav ref="navRef" class="relative z-50 text-amber-50 bg-[#030303] border-b border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-end h-16 items-center">

        <div class="hidden md:flex lg:space-x-12 space-x-6">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/experience">Experiences</NuxtLink>
          <NuxtLink to="/certification">Credentials</NuxtLink>
        </div>

        <div class="md:hidden">
          <button
              type="button"
              @click.stop="toggleMenu"
              class="focus:outline-none relative z-50"
              :aria-expanded="isOpen"
              aria-label="Toggle menu"
          >
            <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

      </div>
    </div>

    <div v-if="isOpen" class="md:hidden px-4 pb-4 space-y-2">
      <NuxtLink to="/" class="block" @click="closeMenu">Home</NuxtLink>
      <NuxtLink to="/experience" class="block" @click="closeMenu">Experiences</NuxtLink>
      <NuxtLink to="/certification" class="block" @click="closeMenu">Credentials</NuxtLink>
    </div>
  </nav>
</template>

<style scoped>
@reference 'tailwindcss';
a {
  @apply hover:underline underline-offset-5 decoration-1 font-medium hover:text-gray-300 decoration-slate-50 hover:decoration-gray-50;
  font-family: 'Montserrat', sans-serif;
}
</style>