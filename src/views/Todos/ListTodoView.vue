<template>
    <div>
        {{ todo.title }} - {{ todo.body }}
        <router-link :to="{name: 'todos.edit', params: {id: todo.identify}}">Edit</router-link> |
        <a href="#" @click.prevent="deleteTodo">Delete</a>
    </div>
</template>

<script>
import TodoService from '@/services/todos.services';

export default {
    name: 'ListTodoView',
    props: {
        todo: {
            required: true,
            type: Object
        }
    },
    emits: ['todoDeleted'],

    setup(props, {emit}) {
        const deleteTodo = () => {
            TodoService.deleteTodo(props.todo.identify)
                .then(() => emit('todoDeleted', props.todo))
        }

        return {
            deleteTodo
        }
    }
}
</script>