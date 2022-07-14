<template>
  <div class="flex flex-col w-full h-screen">
    <header class="text-white bg-green-500 p-4">HEADER</header>
    <main class="flex-grow w-full p-4 mx-auto">
      <slot />
    </main>
    <footer class="text-white bg-green-500 p-4">FOOTER</footer>
  </div>
</template>