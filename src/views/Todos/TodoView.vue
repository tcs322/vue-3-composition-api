<template>
    <div>
        <h1>Lista de tarefas</h1>
        <ul>
            <li v-for="tarefa in tarefas" :key="tarefa.id">
                {{ tarefa.title }}
            </li>
        </ul>
        <input type="text" v-model="name">
    </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import TodoService from '@/services/todos.services';

export default {
    name: 'TodoView',
    setup () {
        const tarefas = ref([])

        onMounted(() => {
            TodoService.getAll()
                .then(response => {
                    console.log(response)
                    tarefas.value = response.data.data
                })
                .catch(error => console.log(error))
        })

        return {
            tarefas
        }
    }
}

</script>