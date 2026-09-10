<script setup lang="ts">
const site = useSiteConfig()

useSchemaOrg([
  defineWebSite({
    '@id': `${site.url}/#website`,
    name: site.name,
    description: site.description,
    url: site.url,
    inLanguage: 'en',
  }),
  definePerson({
    '@id': `${site.url}/#person`,
    name: site.name,
    image: `${site.url}/profile-photo.png`,
    url: site.url,
    jobTitle: 'Backend Software Engineer & Android Developer',
    description: site.description,
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Universitas Islam Negeri Ar-Raniry Banda Aceh',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Aceh Besar',
      addressRegion: 'Aceh',
      addressCountry: 'ID',
    },
    sameAs: [
      'https://github.com/muammarzaki',
      'https://linkedin.com/in/muammar-zaki-b6387a2a0',
      'https://www.instagram.com/marsal_mc',
    ],
    knowsAbout: [
      'Spring Boot',
      'NestJS',
      'Kotlin',
      'Jetpack Compose',
      'RESTful API',
      'Android Development',
      'Backend Development',
      'gRPC',
      'Microservices Architecture',
    ],
  }),
])
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Navbar/>
    <main class="flex-1">
      <slot/>
    </main>
    <Footer class="mt-auto pt-3"/>
  </div>
</template>
