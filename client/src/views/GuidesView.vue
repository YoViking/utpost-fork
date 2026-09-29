<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

const allGuides = ref([])
const guides = ref([])
const query = ref('')
const error = ref('')

onMounted(async () => {
  try {
    const response = await fetch('http://localhost:4000/api/guides')
    if (!response.ok) throw new Error('Kunde inte hämta guiderna')
    allGuides.value = await response.json()
    guides.value = allGuides.value
  } catch (err) {
    error.value = err.message
  }
})

const search = () => {
  const q = query.value.toLowerCase()
  guides.value = allGuides.value.filter(
    (g) => g.title.toLowerCase().includes(q) || g.region.toLowerCase().includes(q),
  )
}
</script>

<template>
  <div>
    <h1>Guider</h1>
    <div class="searchrow">
      <input v-model="query" placeholder="Sök på namn eller landskap" />
      <button class="btn-primary" @click="search">Sök</button>
    </div>
    <p v-if="error">{{ error }}</p>
    <div class="grid">
      <div v-for="guide in guides" :key="guide.id" class="card">
        <h3>
          <RouterLink :to="`/guider/${guide.slug}`">{{ guide.title }}</RouterLink>
        </h3>
        <p class="muted">{{ guide.region }} · {{ guide.difficulty }} · {{ guide.length_km }} km</p>
        <!-- I would like to actually construct this from an object. Ie on server sanitize html then
parse and store as object and here reconstruct html from that -->
        <div class="excerpt" v-html="guide.body_html.slice(0, 180)" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ddd;
  padding: 12px;
  border-radius: 4px;
}
</style>
