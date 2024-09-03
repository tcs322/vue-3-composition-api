<template>
    <div>
        <h1>Lista de tarefas</h1>
        <ul>
            <li v-for="tarefa in tarefas" :key="tarefa.id">
                {{ tarefa.name }}
            </li>
        </ul>
        <input type="text" v-model="name">
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
    name: 'TodoView',
    setup () {
        const tarefas = [
            {id: 1, name: 'tarefa 01'},
            {id: 2, name: 'tarefa 02'}
        ]

        const name = ref('Thyerre')
    
        return {
            tarefas,
            name
        }
    }
}

</script>