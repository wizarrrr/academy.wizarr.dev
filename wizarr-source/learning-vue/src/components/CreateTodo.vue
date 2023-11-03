<template>
    <div class="bg-gray-300 dark:bg-gray-700 p-4 rounded-lg shadow-lg flex flex-col items-end">
        <div class="flex flex-col items-start w-full space-y-1">
            <textarea v-model="todoText" @keyup.enter="addTodo" class="w-full bg-gray-100 dark:bg-gray-800 text-white rounded p-2" type="text" placeholder="What do you want to do?" />
            <span class="text-gray-600 dark:text-gray-400 text-xs">{{ asciiCount }}/5</span>
        </div>
        <div class="mt-[-1rem]">
            <button @click="addTodo" class="mt-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded p-2 font-bold">Add Todo</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "pinia";
import { useTodoStore } from "@/store/todo";

export default defineComponent({
    name: "CreateTodo",
    data() {
        return {
            // We add a local todoText variable so we can store the input value and use it to create a new todo
            todoText: "",
        };
    },
    computed: {
        // We add a computed property to count the number of alphanumeric characters in the todoText variable
        asciiCount(): number {
            const alphanumericRegex = /[a-zA-Z0-9]/g;
            const alphanumericCharacters = this.todoText.match(alphanumericRegex);
            return alphanumericCharacters ? alphanumericCharacters.length : 0;
        },
    },
    methods: {
        // We add a method to create a new todo
        addTodo() {
            // We check if the todoText variable is empty or if the asciiCount is less than 3
            if (!this.todoText || this.asciiCount < 3) return;

            // We call the createTodo action from the store and pass the todoText variable as an argument
            this.createTodo(this.todoText);

            // We reset the todoText variable
            this.todoText = "";
        },
        // We use mapActions to map the createTodo action from the store to a local createTodo method
        ...mapActions(useTodoStore, ["createTodo"]),
    },
});
</script>
