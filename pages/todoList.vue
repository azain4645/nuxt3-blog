<script setup lang="ts">
  const todos = [
        {content: 'テスト', created: '2020-04-30 17:00', state: '作業前'}, 
        {content: 'コーディング', created: '2020-04-30 16:00', state: '作業中'},
        {content: '環境構築', created: '2020-04-30 15:30', state: '完了'}
      ]

  const addTodo = () => {
    todos.push({
      content: "追加テスト",
      created: "2020-04-30 12:30",
      state: '作業前'
    })
  }
</script>

<template>
  <div class="m-2">
    <h1 class="text-2xl mb-5">Todoリスト</h1>
    <div class="flex mb-5">
      <input type="text" class="w-2/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="タスクを入力してください">
      <button @click="addTodo" class="ml-5 w-32 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">追加</button>
    </div>

    <div class="Filter mb-5">
      <button class="ml-5 w-32 h-8 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700">全て</button>
      <button class="ml-5 w-32 h-8 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700">作業前</button>
      <button class="ml-5 w-32 h-8 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700">作業中</button>
      <button class="ml-5 w-32 h-8 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700">完了</button>
    </div>
    
		<table class="w-full flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
			<thead class="text-white">
				<tr class="bg-green-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
					<th class="p-3 text-left">タスク</th>
					<th class="p-3 text-left">登録日</th>
					<th class="p-3 text-left">状態</th>
					<th class="p-3 text-left" width="110px">Actions</th>
				</tr>
			</thead>
			<tbody class="flex-1 sm:flex-none">
				<tr v-for="(item,index) in todos" :key="index" class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
					<td class="border-grey-light border hover:bg-gray-100 p-3">{{ item.content }}</td>
					<td class="border-grey-light border hover:bg-gray-100 p-3 truncate">{{ item.created }}</td>
					<td class="border-grey-light border hover:bg-gray-100 p-3 truncate">{{ item.state }}</td>
					<td class="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">削除</td>
				</tr>
			</tbody>
		</table>
  </div>
</template>