<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

const tours = ref([])
const loading = ref(true)
const error = ref('')

onMounted(async () => {
  try {
    const response = await fetch('http://localhost:4000/api/tours')
    if (!response.ok) throw new Error('Kunde inte hämta turerna')
    tours.value = await response.json()
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <p v-if="loading">Laddar turer...</p>
  <p v-else-if="error">{{ error }}</p>
  <div v-else>
    <h1>Turer</h1>
    <table class="tours">
      <thead>
        <tr>
          <th>Tur</th>
          <th>Av</th>
          <th>Guide</th>
          <th>Längd</th>
          <th>Bilder</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="tour in tours" :key="tour.id">
          <td>
            <RouterLink :to="`/turer/${tour.id}`">{{ tour.title }}</RouterLink>
          </td>
          <td>{{ tour.user?.display_name }}</td>
          <td>{{ tour.guide ? tour.guide.title : '-' }}</td>
          <td>{{ Math.round(tour.distance_m / 100) / 10 }} km</td>
          <td>{{ tour.photos.length }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
