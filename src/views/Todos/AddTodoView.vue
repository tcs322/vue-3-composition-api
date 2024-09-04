<template>
    <div>
        <h1>Adicionar nova tarefa</h1>
        <form action="#" method="post" @submit.prevent="addTodo">
            <input type="text" name="name" placeholder="Nome" v-model="name">
            <input type="text" name="description" placeholder="Descrição" v-model="description">
            <button type="submit" :disabled="loading">
                <span v-if="loading">Enviando...</span>
                <span v-else>Enviar</span>
            </button>
        </form>
    </div>
</template>

<script>
import TodoService from '@/services/todos.services';
import { ref } from 'vue';
import router from '@/router';

export default {
    name: 'AddTodoView',
    setup() {
        const name = ref('')
        const description = ref('')
        const loading = ref(false)

        const addTodo = () => {
            loading.value = true
            const params = {
                name: name.value,
                description: description.value,
                completed: false
            }
            TodoService.addTodo(params)
                .then(() => {
                    router.push({name: 'todos.index'})
                })
                .finally(() => loading.value = false)
        }

        return {
            loading,
            name,
            description,
            addTodo
        }
    }
}
</script>