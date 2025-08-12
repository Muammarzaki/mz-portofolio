<script setup lang="ts">
const isOpen = ref(false)
</script>

<template>
  <nav class="text-amber-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-end h-16 items-center">


        <div class="hidden md:flex lg:space-x-12 space-x-6">
          <NuxtLink to="/" class="hover:text-gray-300 font-medium">Home</NuxtLink>
          <NuxtLink to="/experience" class="hover:text-gray-300 font-medium">Experiences</NuxtLink>
          <NuxtLink to="/certification" class="hover:text-gray-300 font-medium">Credentials</NuxtLink>
        </div>

        <div class="md:hidden">
          <button @click="isOpen = !isOpen" class="focus:outline-none">
            <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

      </div>
    </div>

    <div v-if="isOpen" class="md:hidden px-4 pb-4 space-y-2 bg-gray-800">
      <NuxtLink to="/" class="block hover:text-gray-300 font-medium" @click="isOpen = false">Home</NuxtLink>
      <NuxtLink to="/experience" class="block hover:text-gray-300 font-medium" @click="isOpen = false">Experiences
      </NuxtLink>
      <NuxtLink to="/certification" class="block hover:text-gray-300 font-medium" @click="isOpen = false">Credentials
      </NuxtLink>
    </div>
  </nav>
</template>

<style scoped>
* {
  font-family: 'Montserrat', sans-serif;
  background-color: #030303;
}

a {
  @apply hover:underline;
  @apply underline-offset-5;
  @apply decoration-1;
  text-decoration-color: #b4b4b4;
}
</style>