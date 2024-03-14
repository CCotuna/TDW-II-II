<script setup>
import AddTask from "@/components/AddTask.vue";
</script>
<template>
    <div>
        <div class="flex flex-col mt-5">
            <AddTask class="mb-5" />
            <div class="flex flex-col">
                <button class="hover:bg-gray-300">
                    <div class="flex items-center space-x-3 ">
                        <i class="bi bi-pencil-square text-xl text-blue-600"></i>
                        <span class="font-medium">All</span>
                    </div>
                </button>
                <button class="hover:bg-gray-300">
                    <div class="flex items-center space-x-3">
                        <i class="bi bi-star text-xl text-yellow-600"></i>
                        <span class="font-medium">Favorites</span>
                    </div>
                </button>
            </div>
            <div class="space-x-3 mt-6 hover:bg-gray-300">
                <i class="bi bi-star"></i>
                <span class="font-medium">Labels</span>
            </div>
            <div class="flex flex-col">
                <button class="hover:bg-gray-300 h-fit">
                    <div class="flex items-center ">
                        <i class="bi bi-dot text-5xl text-blue-600"></i>
                        <span class="font-medium">Personal</span>
                    </div>
                </button>
                <button class="hover:bg-gray-300 h-fit">
                    <div class="flex items-center ">
                        <i class="bi bi-dot text-5xl text-green-600"></i>
                        <span class="font-medium">Work</span>
                    </div>
                </button>
                <button class="hover:bg-gray-300 h-fit">
                    <div class="flex items-center ">
                        <i class="bi bi-dot text-5xl text-orange-600"></i>
                        <span class="font-medium">Social</span>
                    </div>
                </button>
                <button class="hover:bg-gray-300 h-fit">
                    <div class="flex items-center ">
                        <i class="bi bi-dot text-5xl text-cyan-600"></i>
                        <span class="font-medium">Important</span>
                    </div>
                </button>

            </div>
        </div>
    </div>
</template>
<style scoped></style>