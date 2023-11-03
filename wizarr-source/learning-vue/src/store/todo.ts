import { defineStore } from "pinia";

export interface Todo {
    id: number;
    text: string;
    done: boolean;
    createdAt: Date;
}

export const useTodoStore = defineStore({
    id: "todo",
    state: () => ({
        todos: [
            {
                id: 1,
                text: "Learn Vue 3",
                done: true,
                createdAt: new Date(),
            },
        ] as Todo[],
    }),
    actions: {
        createTodo(text: string, done?: boolean) {
            // Create a new object
            const todo: Todo = {
                id: this.todos.length + 1,
                text,
                done: done ?? false,
                createdAt: new Date(),
            };

            // Prepend the to the list of todos
            this.todos = [todo, ...this.todos];
        },
        toggleTodoById(id: number) {
            // Find the object by id and toggle the done property
            const todo = this.todos.find((todo) => todo.id === id);
            if (todo) todo.done = !todo.done;
        },
        deleteTodoById(id: number) {
            // Filter the objects to remove the one with the given id
            this.todos = this.todos.filter((todo) => todo.id !== id);
        },
    },
    persist: true,
});
