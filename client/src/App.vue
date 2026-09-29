<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <h1>Hello App!</h1>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/guider">Guider</RouterLink>
    <RouterLink to="/turer">Turer</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
