<script setup>
import TasksView from "@/views/TasksView.vue";
import FiltersView from "@/views/FiltersView.vue";
</script>
<template>
    <div class="flex justify-between space-x-20">
        <div class="">
            <FiltersView />
        </div>
        <TasksView />
    </div>
</template>
<style scoped></style>