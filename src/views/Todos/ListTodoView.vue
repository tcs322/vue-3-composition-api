<template>
    <div>
        {{ todo.title }} - {{ todo.body }}
    </div>
</template>

<script>
export default {
    name: 'ListTodoView',
    props: {
        todo: {
            required: true,
            type: Object
        }
    }
}
</script>