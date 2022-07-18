<template>
  <div class="flex flex-col w-full h-screen">
    <header class="text-white bg-green-500 p-4 flex">
      <h3 class="mr-5">HEADER</h3>
      <ul class="text-left flex">
        <NuxtLink :to="`/`">
          <li class="mr-2">blog</li>
        </NuxtLink>
        <NuxtLink :to="`/counter`">
          <li class="mr-2">counter</li>
        </NuxtLink>
        <NuxtLink :to="`/fortunePage`">
          <li class="mr-2">fortune</li>
        </NuxtLink>
        <NuxtLink :to="`/todoList`">
          <li class="mr-2">todoList</li>
        </NuxtLink>
      </ul>
    </header>
    <main class="flex-grow w-full p-4 mx-auto">
      <slot />
    </main>
    <footer class="text-white bg-green-500 p-4">FOOTER</footer>
  </div>
</template>