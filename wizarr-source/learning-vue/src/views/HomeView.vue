<template>
    <main class="bg-gray-100 dark:bg-gray-800 min-h-screen">
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100">Wizarr Academy</h1>
            <span class="mt-4 text-gray-600 dark:text-gray-400"><span class="text-green-500">Vue 3</span> Course</span>
        </div>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 flex flex-col space-y-4">
            <CreateTodo />
            <TodoList />
        </div>
    </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// We import the TodoList and CreateTodo components
import TodoList from "@/components/TodoList.vue";
import CreateTodo from "@/components/CreateTodo.vue";

export default defineComponent({
    name: "HomeView",
    components: {
        // We add the components here so we can use them in the template
        TodoList,
        CreateTodo,
    },
});
</script>
