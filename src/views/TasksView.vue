<template>
    <div class="grid grid-cols-1 xl:grid-cols-3 gap-2 bg-red-100 p-3">
        <Task v-for="task in tasks" :key="task.id" :task="task" />
    </div>
</template>

<script setup>
import Task from "@/components/Task.vue";
import { useTasksStore } from "@/stores/tasks";

const tasksStore = useTasksStore();
const tasks = tasksStore.tasks;
</script>

<style scoped></style>
