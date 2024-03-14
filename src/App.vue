<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav class="m-5">
      <RouterLink to="/" class="me-10 text-3xl font-bold border p-2">Home</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
