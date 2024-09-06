<template>
    <div>
        <h1>
            Lista de tarefas
            <router-link :to="{name: 'todos.create'}">+</router-link>
        </h1>
        <div v-if="loading">
            Carregando...
        </div>
        <ul>
            <li v-for="tarefa in tarefas" :key="tarefa.id">
                <list-todo-view :todo="tarefa"></list-todo-view>
            </li>
        </ul>
        <input type="text" v-model="name">
    </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import TodoService from '@/services/todos.services';
import ListTodoView from '@/views/Todos/ListTodoView'

export default {
    name: 'TodoView',
    setup () {
        const tarefas = ref([])
        const loading = ref(false)

        onMounted(() => {
            loading.value = true
            TodoService.getAll()
                .then(response => {
                    console.log(response)
                    tarefas.value = response.data.data
                })
                .catch(error => console.log(error))
                .finally(() => loading.value = false)
        })

        return {
            loading,
            tarefas
        }
    },
    components: {
        ListTodoView
    }
}

</script>