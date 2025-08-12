<script setup>
useHead({
  title: "MZ | Certification",
  bodyAttrs: {
    class: "bg-[url('@/assets/textures/small-shape-shading.png')] bg-repeat bg-[length:50rem_50rem]"
  }
})
</script>
<template>
  <BlackContainer>
    <div class="lg:ml-8 ml-2 lg:max-w-4xl space-y-6">
      <h1 class="text-white lg:text-8xl text-5xl font-black pb-1">
        MY <br> CERTIFICATION
      </h1>
    </div>
  </BlackContainer>
  <div class="flex flex-row w-full p-10 gap-5">
    <div class="p-2 flex flex-row rounded-2xl bg-gray-900  lg:w-full">
      <h3 class="transform rotate-180 text-5xl text-white font-bold" style="writing-mode: vertical-lr">DEV
        CERTIFICATION</h3>
      <a href="https://dev.id/certificate/verify/OXWKR3PVDG" class="my-auto">
        <img src="@/assets/images/dca-cert.png" alt="my certification"
             class="w-300 ml-3 border-gray-600 border-6 rounded-lg cursor-pointer">
      </a>
      <div class="w-full mx-4">
        <div class="flex-row flex justify-around p-5">
          <div class="flex items-center gap-1">
            <Icon name="mdi:web" size="1.7rem" style="color:#e41111"/>
            <span class="text-white">International Validation</span>
          </div>
          <div class="flex items-center gap-1">
            <Icon name="mdi:shield-check-outline" size="1.7rem" style="color:#e41111"/>
            <span class="text-white">International Validation</span>
          </div>
        </div>
        <div class="text-white pl-6 mt-3">
          <h3 class="text-lg font-semibold font-montserrat">This certification assesses in-depth knowledge and skills related to:</h3>
          <ul class="pl-8 mt-2 list-disc space-y-2 text-md font-normal font-montserrat">
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
</template>