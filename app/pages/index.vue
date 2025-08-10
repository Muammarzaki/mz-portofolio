<script setup lang="ts">
import socialMedia from '@/assets/json/social_media.json'

useHead({
  title: 'MZ | Home',
})
</script>

<template>
  <BlackContainer>
    <div class="lg:ml-8 ml-2 lg:max-w-4xl space-y-6">
      <h1 class="text-white lg:text-8xl text-6xl font-black lg:pt-10">
        MUAMMAR ZAKI
      </h1>
    </div>
  </BlackContainer>
  <div class="flex mb-4">
    <div class="lg:mx-8 mx-4">
      <p class="text-2xl font-mono pt-4">
        I am a software engineer with a strong focus on backend development and logic-driven systems, dedicated to
        designing scalable, secure, and efficient solutions that power modern applications. With experience across a
        wide range of backend technologies, I adapt quickly to different tools, frameworks, and programming paradigms to
        deliver reliable results.
        <br>
        I am committed to continuous growth, staying aligned with industry best practices, and exploring emerging trends
        to ensure my work meets the highest standards. I thrive in collaborative environments where ideas are shared
        freely and challenges are solved creatively, driving impactful and future-ready projects. I approach every
        project with a problem-solving mindset, focusing on creating solutions that are both practical and innovative.
      </p>
      <div class="flex lg:relative lg:-bottom-7 flex-wrap space-x-4 mt-4 offset">
        <BigLogoLink v-for="soc in socialMedia" :image-path="soc.logo" :link="soc.url" :name="soc.name"/>
      </div>
    </div>
    <img src="/image/robot-arm-right-bg-clean.png"
         alt="robot arm that solving puzzle block"
         class="lg:w-5/10 lg:block hidden">
  </div>
</template>

<style scoped>
</style>