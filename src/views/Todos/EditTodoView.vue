<template>
    <div>
        <h1>Editar tarefa</h1>
        <form action="#" method="post" @submit.prevent="editTodo">
            <input type="text" name="name" placeholder="Nome" v-model="name">
            <input type="text" name="description" placeholder="Descrição" v-model="description">
            <button type="submit" :disabled="loading">
                <span v-if="loading">Aguarde...</span>
                <span v-else>Enviar</span>
            </button>
        </form>
    </div>
</template>

<script>
import TodoService from '@/services/todos.services';
import { onMounted, ref } from 'vue';
import router from '@/router';

export default {
    name: 'EditTodoView',
    props: {
        id: {
            required: true
        }
    },
    setup(props) {
        const name = ref('')
        const description = ref('')
        const loading = ref(false)
        const completed = ref(false)

        onMounted(async () => {
            loading.value = true
            TodoService.getTodo(props.id)
                .then((response) => {
                    name.value = response.data.data.title
                    description.value = response.data.data.body
                    completed.value = response.data.data.completed == 'S'
                })
                .finally(() => loading.value = false)
        })

        const editTodo = () => {
            loading.value = true
            const params = {
                name: name.value,
                description: description.value,
                completed: false
            }
            TodoService.editTodo(props.id, params)
                .then(() => {
                    router.push({name: 'todos.index'})
                })
                .finally(() => loading.value = false)
        }

        return {
            loading,
            name,
            description,
            editTodo
        }
    }
}
</script>