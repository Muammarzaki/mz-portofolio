<script setup lang="ts">
import experience from '@/assets/json/experience.json'

useSeoMeta({
  title: 'Experience | Muammar Zaki',
  description:
      'Explore Muammar Zaki’s experience building backend systems and Android applications, from leading software projects at UIN Ar-Raniry to developing Dermato.AI with Bangkit Academy.',
  ogTitle: 'Experience | Muammar Zaki',
  ogDescription:
      'Explore the projects, roles, and engineering experiences that shaped Muammar Zaki as a software engineer.',
  ogImage: '/og-image.png',
  ogImageAlt: 'Muammar Zaki — Software Engineering Experience',
  ogType: 'website',
})
</script>

<template>
  <BlackContainer>
    <div class="lg:ml-8 ml-2 lg:max-w-4xl space-y-6">
      <h1 class="text-white lg:text-8xl text-6xl font-black">
        MY <br> EXPERIENCE
      </h1>
    </div>
  </BlackContainer>
  <div class="lg:ml-8 mx-5 my-5">
    <div class="flex flex-wrap gap-4 gap-y-6">
      <ExperienceCard
          v-for="exp in experience"
          :key="exp.experience_title"
          :title="exp.experience_title"
          :description="exp.short_description"
          :period="exp.duration"
          :github="exp.github"
          :website="exp.website"
          class="w-full md:w-[calc(50%-0.5rem)] rounded-2xl p-5"
      />
    </div>
  </div>
</template>