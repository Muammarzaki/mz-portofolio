<script setup lang="ts">
import experience from '@/assets/json/experience.json'
</script>

<template>
  <BlackContainer>
    <div class="lg:ml-8 lg:max-w-4xl space-y-6">
      <h1 class="text-white text-8xl font-black">
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
          class="w-full md:w-[calc(50%-0.5rem)] rounded-2xl p-5"
      />
    </div>
  </div>
</template>

<style scoped>

</style>