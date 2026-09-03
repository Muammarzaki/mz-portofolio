<script setup>
const img = useImage()

const bodyTexture = img('/textures/small-shape-shading.png', {
  preset: 'texture',
})

useSeoMeta({
  title: 'Credentials & Certifications | Muammar Zaki',
  description:
      'Explore the certifications, academic achievements, and professional credentials behind Muammar Zaki’s journey as a software engineer.',
  ogTitle: 'Credentials & Certifications | Muammar Zaki',
  ogDescription:
      'Explore the certifications and achievements that support Muammar Zaki’s work as a software engineer.',
  ogImage: '/og-image.png',
  ogImageAlt: 'Muammar Zaki — Credentials & Certifications',
  ogType: 'website',
})

useHead({
  bodyAttrs: {
    class: 'bg-repeat bg-[length:50rem_50rem]',
    style: `background-image: url('${bodyTexture}')`,
  },
})
</script>
<template>
  <BlackContainer>
    <div class="lg:ml-8 ml-2 lg:max-w-4xl space-y-6">
      <h1 class="text-white lg:text-8xl text-[2.9rem] leading-none font-black pb-1">
        MY <br> CERTIFICATION
      </h1>
    </div>
  </BlackContainer>
  <div class="flex flex-row w-full p-3 lg:p-10 gap-5">
    <div class="p-2 flex flex-row rounded-lg bg-gray-900  lg:w-full">
      <h3 class="transform rotate-180 text-2xl md:text-6xl text-white font-bold" style="writing-mode: vertical-lr">
        DEV CERTIFICATION
      </h3>
      <a href="https://dev.id/certificate/verify/OXWKR3PVDG" class="my-auto">
        <NuxtImg
            src="/images/dca-cert.png"
            alt="my certification"
            class="w-300 lg:ml-3 ml-1 border-gray-600 border-6 rounded-lg cursor-pointer"
            width="1200"
            height="849"
            sizes="xs:90vw sm:80vw md:60vw lg:600px"
            format="webp"
            quality="70"
            loading="lazy"
            decoding="async"
        />
      </a>
      <div class="lg:block hidden w-full mx-4 font-mono">
        <div class="flex-row flex justify-around pt-5 pb-1">
          <div class="flex items-center gap-1">
            <Icon name="mdi:web" size="1.7rem" style="color:#e41111"/>
            <span class="text-white">International Validation</span>
          </div>
          <div class="flex items-center gap-1">
            <Icon name="mdi:shield-check-outline" size="1.7rem" style="color:#e41111"/>
            <span class="text-white">Professional Competency</span>
          </div>
        </div>
        <div class="text-white pl-6 mt-3">
          <h3 class="text-lg font-semibold font-montserrat">This certification assesses in-depth knowledge and skills
            related to:</h3>
          <ul class="pl-8 pb-2 mt-2 list-disc lg:space-y-1.5 text-md font-normal font-montserrat">
            <li>User Interface: Creating and displaying UI that meets requirements using ConstraintLayout, DatePicker,
              Spinner, Custom Views, and RecyclerView.
            </li>
            <li>Data Management: Managing data using database and local storage by implementing Room, Pre-Populate
              Database, Database Relationships, RawQuery, and Paging.
            </li>
            <li>Task Scheduling: Implementing task scheduling for background operations using AlarmManager/WorkManager
              to display Notifications with PendingIntent.
            </li>
            <li>Debugging: Finding and fixing bugs using debugging tools in Android Studio.</li>
            <li>Debugging: Finding and fixing bugs using debugging tools in Android Studio.</li>
            <li>Testing: Creating and performing UI Testing to ensure application functionality works as expected.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-row w-full p-3 lg:px-10 lg:pb-10 gap-5">
    <div class="p-2 flex flex-col rounded-2xl bg-gray-900 lg:w-full">
      <h3 class="text-3xl lg:text-6xl text-white font-bold text-center py-2">BNSP CERTIFICATION</h3>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 p-2 lg:p-4">
        <NuxtImg
            src="/images/bnsp.1.jpg"
            alt="BNSP Junior Web Developer certificate page 1"
            class="w-full border-gray-600 border-4 rounded-lg"
            preset="certificate"
            sizes="xs:95vw sm:90vw lg:700px"
            loading="lazy"
            decoding="async"
        />
        <NuxtImg
            src="/images/bnsp.2.jpg"
            alt="BNSP Junior Web Developer certificate page 2"
            class="w-full border-gray-600 border-4 rounded-lg"
            preset="certificate"
            sizes="xs:95vw sm:90vw lg:700px"
            loading="lazy"
            decoding="async"
        />
      </div>
    </div>
  </div>
</template>