<script setup>
  const lucky = ref('')
  const results = ['大吉', '吉', '大凶'];
  const fortuneTest = () => {
    const random = Math.floor( Math.random() * 3)
    lucky.value = results[random]
  }
</script>

<template>
  <h2>おみくじ</h2>
  <p>今日の運勢を占います。↓のボタンをクリックしてね</p>
  <button @click="fortuneTest" class="m-2 py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700">今日の運勢</button>
  <p>{{ lucky }}</p>
</template>