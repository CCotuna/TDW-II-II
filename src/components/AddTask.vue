<template>
    <div class="flex flex-col">
        <input v-model="taskTitle" type="text"
            class="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            placeholder="Enter task title" />
        <textarea v-model="taskDescription"
            class="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 mt-2"
            placeholder="Enter task description"></textarea>
        <select v-model="selectedLabel"
            class="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 mt-2">
            <option value="personal">Personal</option>
            <option value="work">Work</option>
            <option value="social">Social</option>
            <option value="important">Important</option>
        </select>
        <button @click="addTask"
            class="relative inline-flex items-center justify-center p-0.5 mt-5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200  focus:ring-4 focus:outline-none focus:ring-red-100 ">
            <span
                class="relative w-full px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
                +Add Notes
            </span>
        </button>
    </div>
</template>

<script setup>
import { useTasksStore } from "@/stores/tasks";
import { ref } from 'vue';

const tasksStore = useTasksStore();
const taskTitle = ref('');
const taskDescription = ref('');
const selectedLabel = ref('personal'); // Default label

const addTask = () => {
    const newTask = {
        id: Math.random().toString(36).substr(2, 9), // Generate a unique ID
        title: taskTitle.value, // Use the input value as the title
        description: taskDescription.value, // Use the input value as the description
        label: selectedLabel.value, // Use the selected label
        completed: false // Set the initial completion status
    };

    tasksStore.addTask(newTask); // Add the new task to the store
    // Clear input fields after adding the task
    taskTitle.value = '';
    taskDescription.value = '';
};
</script>

<style scoped></style>