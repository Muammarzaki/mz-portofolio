<script setup lang="ts">
defineProps<{
  degree: string
  institution: string
  period: string
  detail?: string
  logo?: string
}>()
</script>

<template>
  <div class="border border-black/10 rounded-xl p-5 hover:border-black/30 transition-colors flex gap-4">
    <NuxtImg
        v-if="logo"
        :src="`/logos/${logo}`"
        :alt="`${institution} logo`"
        class="w-14 h-14 object-contain shrink-0 mt-1"
        preset="logo"
        width="56"
        height="56"
        sizes="56px"
        loading="lazy"
        decoding="async"
    />
    <div class="min-w-0">
      <div class="flex justify-between items-start flex-wrap gap-2">
        <h3 class="font-bold text-lg font-mono">{{ degree }}</h3>
        <span class="text-black/70 text-sm font-mono whitespace-nowrap">{{ period }}</span>
      </div>
      <p class="text-black/70 text-sm font-mono mt-1">{{ institution }}</p>
      <p v-if="detail" class="text-black/70 text-sm mt-2 font-mono">{{ detail }}</p>
    </div>
  </div>
</template>