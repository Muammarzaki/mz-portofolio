<template>
  <div class="flex flex-col min-h-[calc(100vh-20px)]">
    <Navbar/>
    <main class="flex-grow lg:pb-12">
      <slot/>
    </main>
  </div>
  <Footer/>
</template>
