<script setup lang="ts">

  type Todo = {
    content: string;
    created: string;
    state: boolean;
  }
 
  const content = ref('')

  const todos = ref<Todo[]>([
         {content: 'テスト', created: '2020-04-30 17:00', state: true}, 
         {content: 'コーディング', created: '2020-04-30 16:00', state: false},
         {content: '環境構築', created: '2020-04-30 15:30', state: false}
      ])

  const filterdTodos = ref<Todo[]>()

  const filterBtn = ref(0)

  // computedボタンが変わった時にtodoをフィルター
  const fileter = () => {
    if(filterBtn.value == 0){
      todos.value.forEach(todo => {
        filterdTodos.value.push(todo)
      });
    }else if(filterBtn.value == 1){
      todos.value.forEach(todo => {
        if(todo.state == false){
          filterdTodos.value.push(todo)
        }
      });
    }else{
      todos.value.forEach(todo => {
        if(todo.state == true){
          filterdTodos.value.push(todo)
        }
      });
    }

  }

  const addTodo = () => {
    if(content.value != ''){
      todos.value.push({
        content: content.value,
        created: formatedNow(),
        state: false
      })
      content.value = "";
    }
  }

  const formatedNow = () : string => {
    let d = new Date()
    return d.getFullYear()
            + '-' + ('00' + (d.getMonth() + 1)).slice(-2)
            + '-' + ('00' + d.getDate()).slice(-2)
            + ' ' + ('00' + d.getHours()).slice(-2)
            + ':' + ('00' + d.getMinutes()).slice(-2);
  }

  const dropItem = (index : number) => {
    todos.value.splice(index, 1)
  }
</script>

<template>
  <div class="m-2">
    <h1 class="text-2xl mb-5">Todoリスト</h1>
    <div class="flex mb-5">
      <input v-model="content" type="text" class="w-2/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="タスクを入力してください">
      <button @click="addTodo" class="ml-5 w-32 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">追加</button>
    </div>

    <div class="Filter mb-5">
      <button @click="filterBtn = 0" class="ml-5 w-32 h-8 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700">全て</button>
      <button @click="filterBtn = 1" class="ml-5 w-32 h-8 bg-gray-400 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700">実施前</button>
      <button @click="filterBtn = 2" class="ml-5 w-32 h-8 bg-gray-400 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700">実施後</button>
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
					<td class="border-grey-light border hover:bg-gray-100 p-3 truncate">
            <p v-if="item.state">実施後</p>
            <p v-else>実施前</p>
          </td>
					<td @click="dropItem(index)" class="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">削除</td>
				</tr>
			</tbody>
		</table>
  </div>
</template>