<script lang="ts">
  export default {
    data(){
      return {
        lucky : ""
      }
    },
    metdhos: {
      fortuneTest() {
        //ランダムで結果を出す
      },
    },
    computed: {
    },
  }
</script>

<template>
  <div class="m-5">
    <h2>おみくじ</h2>
    <p>今日の運勢を占います。↓のボタンをクリックしてね</p>
    <button @click="fortuneTest" class="m-2 py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700">今日の運勢</button>
    <p>{{ lucky }}</p>
  </div>
</template>