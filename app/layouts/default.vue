<template>
  <div class="min-h-screen flex flex-col">
    <Navbar/>
    <main class="flex-1 lg:pb-4">
      <slot/>
    </main>
    <Footer class="mt-auto"/>
  </div>
</template>
