<script setup lang="ts">
import experience from '@/assets/json/experience.json'

useSeoMeta({
  title: 'Experience | Muammar Zaki - Backend & Android Developer',
  description:
      'Pengalaman Muammar Zaki: Project Leader & Backend Engineer di UIN Ar-Raniry, Android Developer di Dermato.AI (Bangkit Academy), juara 3 KI-PTKIN 2025.',

  ogTitle: 'Experience | Muammar Zaki - Backend & Android Developer',
  ogDescription:
      'Pengalaman Muammar Zaki: Project Leader & Backend Engineer di UIN Ar-Raniry, Android Developer di Dermato.AI (Bangkit Academy), juara 3 KI-PTKIN 2025.',
  ogImage: '/android-chrome-512x512.png',
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