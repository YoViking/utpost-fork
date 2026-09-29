<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const guide = ref(null)
const error = ref('')

const fetchGuide = async (slug) => {
  guide.value = null
  error.value = ''
  try {
    const response = await fetch(`http://localhost:4000/api/guides/${slug}`)
    if (!response.ok) throw new Error('Kunde inte hämta guiden')
    guide.value = await response.json()
  } catch (err) {
    error.value = err.message
  }
}

watch(() => route.params.slug, fetchGuide, { immediate: true })
</script>

<template>
  <p v-if="error">{{ error }}</p>
  <p v-else-if="!guide">Laddar...</p>
  <article v-else class="guide">
    <h1>{{ guide.title }}</h1>
    <p class="muted">{{ guide.region }} · {{ guide.difficulty }} · {{ guide.length_km }} km</p>
    <div v-html="guide.body_html" />
  </article>
</template>
