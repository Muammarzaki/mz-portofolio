<script setup lang="ts">
const isOpen = ref(false)
const navRef = ref<HTMLElement | null>(null)
const route = useRoute()

const links = [
  { to: '/', label: 'Home' },
  { to: '/experience', label: 'Experiences' },
  { to: '/certification', label: 'Credentials' },
]

const linkEls = ref<(HTMLElement | null)[]>([])
const indicator = ref({ left: 0, width: 0, visible: false })

function setLinkRef(el: any, index: number) {
  // NuxtLink renders an <a>, grab the real DOM node
  linkEls.value[index] = el?.$el ?? el
}

function moveIndicatorTo(index: number) {
  const el = linkEls.value[index]
  if (!el) return
  indicator.value = {
    left: el.offsetLeft,
    width: el.offsetWidth,
    visible: true,
  }
}

function snapToActive() {
  const activeIndex = links.findIndex(l => l.to === route.path)
  if (activeIndex === -1) {
    indicator.value.visible = false
    return
  }
  moveIndicatorTo(activeIndex)
}

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
  if (event.key === 'Escape') closeMenu()
}

function handleResize() {
  if (window.innerWidth >= 768) closeMenu()
  snapToActive()
}

watch(() => route.fullPath, () => {
  closeMenu()
  nextTick(snapToActive)
})

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleKeydown)
  window.addEventListener('resize', handleResize)
  nextTick(snapToActive)
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

        <div
            class="hidden md:flex lg:space-x-2 space-x-1 relative py-1"
            @mouseleave="snapToActive"
        >
          <!-- moving button -->
          <div
              class="absolute top-1 h-9 bg-white rounded-full transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
              :class="indicator.visible ? 'opacity-100' : 'opacity-0'"
              :style="{ left: indicator.left + 'px', width: indicator.width + 'px' }"
          />

          <NuxtLink
              v-for="(link, i) in links"
              :key="link.to"
              :ref="(el) => setLinkRef(el, i)"
              :to="link.to"
              class="relative px-4 py-2 rounded-full transition-colors duration-300 no-underline! font-mono font-bold uppercase tracking-wide text-sm"
              :class="route.path === link.to ? 'text-black' : 'hover:text-black'"
              @mouseenter="moveIndicatorTo(i)"
          >
            {{ link.label }}
          </NuxtLink>
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
      <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="block px-3 py-2 rounded-full transition-colors duration-200 font-mono font-bold uppercase tracking-wide text-sm"
          :class="route.path === link.to ? 'bg-white text-black' : ''"
          @click="closeMenu"
      >
        {{ link.label }}
      </NuxtLink>
    </div>
  </nav>
</template>

<style scoped>
@reference 'tailwindcss';
a {
  @apply hover:underline underline-offset-5 decoration-1 hover:text-gray-500 decoration-slate-50 hover:decoration-gray-50;
}
</style>