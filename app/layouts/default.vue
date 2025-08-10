<script setup>
useHead({
  title: 'MZ-Portfolio',
  link: [{rel: 'manifest', href: '/site.webmanifest'}],
})
</script>
<template>
  <div class="flex flex-col min-h-[calc(100vh-20px)]">
    <Navbar/>
    <main class="flex-grow">
      <slot/>
    </main>
  </div>
  <Footer/>
</template>
