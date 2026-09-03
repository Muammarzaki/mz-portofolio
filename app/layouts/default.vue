<template>
  <div class="min-h-screen flex flex-col">
    <Navbar/>
    <main class="flex-1">
      <slot/>
    </main>
    <Footer class="mt-auto pt-3"/>
  </div>
</template>
