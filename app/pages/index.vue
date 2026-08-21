<script setup lang="ts">
import socialMedia from '@/assets/json/social_media.json'

const siteUrl = 'https://mz-portofolio.vercel.app'
const pageUrl = `${siteUrl}/`
const ogImage = `${siteUrl}/android-chrome-512x512.png`

useSeoMeta({
  title: 'Muammar Zaki | Backend & Android Engineer',
  description: 'Portofolio Muammar Zaki, Backend Software Engineer & Android Developer lulusan Cum Laude UIN Ar-Raniry. Spring Boot, NestJS, Kotlin, Jetpack Compose.',
  keywords: 'Muammar Zaki, backend developer, android developer, software engineer Aceh, Kotlin developer, Spring Boot developer, portfolio developer Indonesia',
  ogTitle: 'Muammar Zaki | Backend Software Engineer & Android Developer',
  ogDescription: 'Backend-focused software engineer & Android developer. RESTful API, Spring Boot, NestJS, Kotlin, Jetpack Compose.',
  ogImage,
  ogType: 'website',
  ogUrl: pageUrl,
  twitterCard: 'summary_large_image',
  twitterTitle: 'Muammar Zaki | Backend Software Engineer & Android Developer',
  twitterDescription: 'Portofolio backend engineer & Android developer — Spring Boot, NestJS, Kotlin.',
  twitterImage: ogImage
})

useHead({
  link: [
    { rel: 'canonical', href: pageUrl }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Muammar Zaki',
        url: pageUrl,
        jobTitle: 'Backend Software Engineer & Android Developer',
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name: 'Universitas Islam Negeri Ar-Raniry Banda Aceh'
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Aceh Besar',
          addressRegion: 'Aceh',
          addressCountry: 'ID'
        },
        sameAs: [
          'https://github.com/muammarzaki',
          'https://linkedin.com/in/muammar-zaki-b6387a2a0',
          'https://www.instagram.com/marsal_mc'
        ],
        knowsAbout: [
          'Spring Boot', 'NestJS', 'Kotlin', 'Jetpack Compose',
          'RESTful API', 'Android Development', 'Backend Development'
        ]
      })
    }
  ]
})
</script>

<template>
  <BlackContainer>
    <div class="lg:ml-8 ml-2 lg:max-w-4xl space-y-6">
      <h1 class="text-white lg:text-8xl text-5xl sm:text-6xl font-black lg:pt-10">
        MUAMMAR ZAKI
      </h1>
    </div>
  </BlackContainer>
  <div class="flex lg:flex-row flex-col min-h-auto mb-4">
    <div class="flex-78/100 lg:mx-8 mx-4">
      <p class="hidden sm:block text-2xl font-mono pt-4 text-start">
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
      <p class="sm:hidden text-base leading-7 pt-4 text-start">
        Backend-focused software engineer and Android developer. I build scalable APIs, reliable systems, and clean
        mobile experiences with Spring Boot, NestJS, Kotlin, and Jetpack Compose.
      </p>
      <div class="flex lg:relative mt-4 lg:mt-0 -bottom-4 flex-wrap space-x-4">
        <BigLogoLink v-for="soc in socialMedia" :image-path="soc.logo" :link="soc.url" :name="soc.name"/>
      </div>
    </div>
    <div class="flex-4/10 h-auto sm:flex items-center justify-end relative -top-40 lg:top-0 hidden">
      <img src="@/assets/images/robot-arm-right-bg-clean.png"
           alt="robot arm that solving puzzle block"
           class="aspect-square object-contain">
    </div>
  </div>
</template>