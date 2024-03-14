<template>
    <div class="block max-w-sm h-fit p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 space-y-3">
        <div class="flex justify-between">
            <div class="flex justify-between items-center space-x-3">
                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">{{ task.title }}</h5>
                <div class="rounded-full bg-black w-2 h-2"></div>
            </div>
            <i class="bi bi-airplane-engines text-xl ms-5"></i>
        </div>
        <p class="font-normal text-gray-700">{{ task.description }}</p>
        <div class="flex justify-between">
            <div class="flex justify-between items-center space-x-3">
                <button @click="toggleFavorite">
                    <i :class="['bi', isFavorite ? 'bi-star-fill' : 'bi-star', 'text-xl']"></i>
                </button>
                <button @click="deleteTask"><i class="bi bi-trash text-xl"></i></button>
            </div>
            <i class="bi bi-three-dots-vertical text-xl"></i>
        </div>
    </div>
</template>


<script setup>
import { computed } from "vue";
import { useTasksStore } from "@/stores/tasks";

const props = defineProps({
    task: Object
});

const tasksStore = useTasksStore();

const deleteTask = () => {
    const taskId = props.task.id;
    tasksStore.deleteTask(taskId);
};

const toggleFavorite = () => {
    const taskId = props.task.id;
    if (isFavorite.value) {
        tasksStore.removeFavorite(taskId);
    } else {
        tasksStore.addToFavorite(taskId);
    }
};

const isFavorite = computed(() => {
    return tasksStore.favoriteTasks.some(task => task.id === props.task.id);
});
</script>
<style scoped></style>