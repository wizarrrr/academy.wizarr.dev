<template>
    <!-- List of Objects -->
    <Draggable v-model="todos" tag="ul" group="mfa" ghost-class="moving-card" :animation="200" item-key="id" :sort="false">
        <template #item="{ element }">
            <li class="mb-2">
                <TodoItem :todo="element" />
            </li>
        </template>
    </Draggable>
    <!-- No Objects -->
    <div v-if="todos.length === 0" class="text-center text-gray-600 dark:text-gray-400">
        <span class="text-2xl">No Todos</span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapWritableState } from "pinia";
import { useTodoStore } from "@/store/todo";

// We import the draggable and todo item components
import Draggable from "vuedraggable";
import TodoItem from "./TodoItem.vue";

export default defineComponent({
    name: "TodoList",
    components: {
        // We add the components here so we can use them in the template
        Draggable,
        TodoItem,
    },
    computed: {
        // We use mapWritableState to map the todos state to a local todos variable
        ...mapWritableState(useTodoStore, ["todos"]),
    },
});
</script>
