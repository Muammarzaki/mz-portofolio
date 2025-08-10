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
    <div class="mx-8">
      <p class="text-2xl font-mono pt-10">
        Hi! I'm Zaki, a Software Engineer who loves creating digital experiences. I specialize in full-stack development
        with a focus on building scalable and user-friendly web applications. I enjoy tackling challenging problems and
        continuously learning new technologies to stay at the forefront of web development. When I'm not coding, you can
        find me exploring new tech trends, contributing to open-source projects, or sharing knowledge with the developer
        community. I'm passionate about creating solutions that make a positive impact and always eager to collaborate
        on
        innovative projects.
      </p>
      <div class="flex flex-wrap space-x-4 lg:mt-12 mt-4">
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