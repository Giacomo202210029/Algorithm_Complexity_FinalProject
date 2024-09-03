<template>
  <div>
    <h2>Resultados</h2>
    <div v-if="result">
      <p>Camino: {{ result.path.join(' -> ') }}</p>
      <p>Distancia: {{ result.distance_km.toFixed(2) }} km</p>
      <p><strong>Tiempo Estimado:</strong> {{ result.estimated_time_minutes }} minutos</p>
          <p><strong>Costo de Gasolina:</strong> €{{ result.costo_gasolina.toFixed(2) }}</p>
      <p>Velocidad promedio: {{ result.average_speed_kmh }} km/h</p>
    </div>
    <img v-if="graphUrl" :src="graphUrl" alt="Graph" />
    {{ graphUrl }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: null,
      graphUrl: null,
      imageId: 1
    }
  },
  methods: {
    async fetchGraph() {
      this.graphUrl = `http://127.0.0.1:5000/graph?imageId=${this.imageId}`
    }
  },
  mounted() {
    this.result = JSON.parse(this.$route.query.result)
    this.fetchGraph()
  }
}
</script>

<style scoped>
</style>
