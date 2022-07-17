<script setup lang="ts">
import { valueToNode } from '@babel/types';
import { useField } from 'vee-validate'
import * as yup from 'yup';

  type Todo = {
    content: string;
    created: string;
    isDone: boolean;
  }
 
  // const content = ref('')

  const todos = ref<Todo[]>([
         {content: 'テスト', created: '2020-04-30 17:00', isDone: true}, 
         {content: 'コーディング', created: '2020-04-30 16:00', isDone: false},
         {content: '環境構築', created: '2020-04-30 15:30', isDone: false}
      ])

  // TODOリスト表示モード
  const mode = ref<'all' | 'notYet' | 'done' >('all');

  const dispayTodos = computed(() =>
    mode.value === 'all' ? todos.value
    : mode.value === 'notYet' ? todos.value.filter(todo => !todo.isDone)
    : todos.value.filter(todo => todo.isDone)
  )

  const addTodo = () => {
      todos.value.push({
        content: content.value,
        created: formatedNow(),
        isDone: false
      })
      content.value = "";
  }

  const formatedNow = () : string => {
    const d = new Date()
    return d.getFullYear()
            + '-' + ('00' + (d.getMonth() + 1)).slice(-2)
            + '-' + ('00' + d.getDate()).slice(-2)
            + ' ' + ('00' + d.getHours()).slice(-2)
            + ':' + ('00' + d.getMinutes()).slice(-2);
  }

  const dropItem = (index : number) => todos.value.splice(index, 1)

  const { value: content, errorMessage: contentError, handleChange, meta } = useField<string>('content', yup.string().required().min(3))
</script>

<template>
  <div class="m-2">
    <h1 class="text-2xl mb-5">Todoリスト</h1>
    <div class="flex flex-wrap">
      <input :value="content" @change="handleChange" type="text" class="w-2/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="タスクを入力してください">
      <button 
        @click="addTodo" 
        :disabled="!meta.valid"
        :class="`${
          meta.valid === true 
          ? 'bg-blue-500 hover:bg-blue-700'
          : 'bg-blue-300'
        } ml-5 w-32  text-white font-semibold rounded-lg shadow-md`">
          追加
      </button>
    </div>
    <p class="mb-5"> {{ contentError }}</p>
    <p>valid:{{ meta.valid }}</p>
    <p>dirty:{{ meta.dirty }}</p>
    <p>initialValue:{{ meta.initialValue }}</p>

    <div class="Filter mb-5">
      <button 
       @click="mode = 'all'"
       :class="`${
        mode === 'all'
        ? 'bg-gray-700'
        : 'bg-gray-400'
       } ml-5 w-32 h-8 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700`">
        全て
      </button>

      <button 
       @click="mode = 'notYet'"
       :class="`${
        mode === 'notYet'
        ? 'bg-gray-700'
        : 'bg-gray-400'
       } ml-5 w-32 h-8 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700`">
        実施前
      </button>
      
      <button 
       @click="mode = 'done'"
       :class="`${
        mode === 'done'
        ? 'bg-gray-700'
        : 'bg-gray-400'
       } ml-5 w-32 h-8 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700`">
      実施後</button>
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
				<tr v-for="(item,index) in dispayTodos" :key="index" class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
					<td class="border-grey-light border hover:bg-gray-100 p-3">{{ item.content }}</td>
					<td class="border-grey-light border hover:bg-gray-100 p-3 truncate">{{ item.created }}</td>
					<td class="border-grey-light border hover:bg-gray-100 p-3 truncate">
            {{ item.isDone ? '実施後' : '実施前' }}
          </td>
					<td @click="dropItem(index)" class="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">削除</td>
				</tr>
			</tbody>
		</table>
  </div>
</template>