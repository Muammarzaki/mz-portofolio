<script setup lang="ts">
import experience from '@/assets/json/experience.json'

useSeoMeta({
  title: 'Experience',
  description:
      'Explore Muammar Zaki’s professional experience in backend engineering and Android development, from leading software projects at UIN Ar-Raniry to building Dermato.AI with Bangkit Academy.',
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
      <h1 class="text-white lg:text-8xl text-5xl font-black pb-1">
        MY <br> EXPERIENCE
      </h1>
    </div>
  </BlackContainer>
  <section class="lg:ml-8 mx-5 my-5" aria-labelledby="experience-list-heading">
    <h2 id="experience-list-heading" class="sr-only">Professional experience</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-6">
      <ExperienceCard
          v-for="exp in experience"
          :key="exp.experience_title"
          :title="exp.experience_title"
          :description="exp.short_description"
          :period="exp.duration"
          :github="exp.github"
          :website="exp.website"
          :class="[
            'w-full rounded-2xl p-5',
            exp.desktop_span === 2 ? 'md:col-span-2' : 'md:col-span-1',
          ]"
      />
    </div>
  </section>
</template>