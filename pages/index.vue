<!-- 明示的にレイアウトを指定する場合 -->
<!-- <script>
  definePageMeta({
    layout: 'blog'
  });
</script> -->

<script setup>
  const { data: posts } = await useFetch('https://jsonplaceholder.typicode.com/posts')
</script>

<template>
  <div>
    <article class="m-4" v-for="post in posts" :key="post.id">
      <NuxtLink :to="`/post-${post.id}`">
        <h2 class="mb-2 capitalize text-2xl font-semibold">{{ post.title }}</h2>
      </NuxtLink>
      <p>{{ post.body }}...</p>
    </article>
  </div>
</template>