<template>
    <div class="bg-gray-300 dark:bg-gray-700 p-4 rounded-lg shadow-lg">
        <div class="flex flex-row justify-between items-center">
            <div class="flex-shrink-0 ml-2">
                <div class="flex flex-col justify-center items-start">
                    <span class="text-gray-900 dark:text-gray-100 font-bold">
                        {{ todo.text }}
                    </span>
                    <span class="text-gray-600 dark:text-gray-400 text-xs"> {{ dateFormatted }} @ {{ timeFormatted }} </span>
                </div>
            </div>
            <div class="ml-4">
                <div class="flex flex-row space-x-2">
                    <button class="p-2 rounded text-white" @click="toggleTodo" :class="isDoneStyle">
                        <template v-if="todo.done">
                            <CheckIcon class="w-5 h-5" />
                        </template>
                        <template v-else>
                            <XMarkIcon class="w-5 h-5" />
                        </template>
                    </button>
                    <button class="p-2 rounded bg-red-500 text-white" @click="deleteTodo">
                        <TrashIcon class="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// We import the mapActions and useTodoStore from the store
import { mapActions } from "pinia";
import { useTodoStore } from "@/store/todo";

// We import the icons from Heroicons
import { TrashIcon, CheckIcon, XMarkIcon } from "@heroicons/vue/24/solid";

// We import the Todo type from the store so we can utilize type safety
import type { Todo } from "@/store/todo";

export default defineComponent({
    name: "TodoItem",
    components: {
        // We add the components here so we can use them in the template
        TrashIcon,
        CheckIcon,
        XMarkIcon,
    },
    props: {
        // We add the todo prop here so we can pass data from the parent component
        todo: {
            type: Object as () => Todo,
            required: true,
        },
    },
    computed: {
        // This computed property will return different styles depending on the todo.done value
        isDoneStyle(): string {
            return this.todo.done ? "bg-green-500" : "bg-gray-500";
        },
        // This computed property will return the date of the todo.createdAt value in a formatted way
        dateFormatted(): string {
            return new Date(this.todo.createdAt).toLocaleDateString();
        },
        // This computed property will return the time of the todo.createdAt value in a formatted way
        timeFormatted(): string {
            return new Date(this.todo.createdAt).toLocaleTimeString();
        },
    },
    methods: {
        // We call the store action here to toggle the todo.done value
        toggleTodo(): void {
            this.toggleTodoById(this.todo.id);
        },
        // We call the store action here to delete the todo
        deleteTodo(): void {
            this.deleteTodoById(this.todo.id);
        },
        // We use mapActions to map the store actions to local methods
        ...mapActions(useTodoStore, ["toggleTodoById", "deleteTodoById"]),
    },
});
</script>
