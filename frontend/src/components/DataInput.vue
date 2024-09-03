<template>
  <div class="container">
    <div class="toolbar">
      <img src="@/assets/logo.png" alt="Pizzeria Logo" class="logo" />
      <span class="title">Pizzeria Camino</span>
      <nav>
        <a href="#">Inicio</a>
        <a href="#">Menú</a>
        <a href="#">Contacto</a>
      </nav>
    </div>
    <div class="content">
      <div class="content-background">
        <h1>Calculador de Camino Más Corto</h1>
        <div class="input-container">
          <br>Ingresa el nodo de residencia<br>
          <InputNumber v-model="target" label="Nodo de Llegada" required :min="0" :max="6000" />
          <Button @click="navigateToResults" :disabled="invalid">Calcular</Button>
          <p class="error-message">{{ reason }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      target: null,
      invalid: false,
      reason: null,
    };
  },
  methods: {
    async navigateToResults() {
      this.reason = '';
      this.invalid = false;
      if (this.target == null) {
        this.reason = 'Por favor, ingrese el nodo de llegada';
        this.invalid = true;
        return;
      }
      try {
        const response = await axios.post('http://127.0.0.1:5000/shortest_path', {
          target: this.target,
        });
        this.$router.push({ name: 'ResultDisplay', query: { result: JSON.stringify(response.data) } });
      } catch (error) {
        console.error('Error calculating shortest path:', error);
        this.reason = 'Error al calcular el camino más corto';
        this.invalid = true;
      }
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  font-family: 'Roboto', sans-serif;
}

.container {
  display: flex;
  flex-direction: column;
  height: 150vh;
  width: 100vw;
  background: url('@/assets/pizzabackground.jpg') no-repeat center center fixed;
  background-size: cover;
}

.toolbar {
  width: 100%;
  padding: 15px 20px;
  background-color: rgba(0, 0, 0, 8);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 1000;
}

.logo {
  height: 50px;
}

.title {
  color: #fff;
  font-size: 1.5em;
  font-weight: 700;
}

nav {
  display: flex;
  gap: 20px;
}

nav a {
  color: #fff;
  text-decoration: none;
  font-size: 1em;
}

nav a:hover {
  text-decoration: underline;
}

.content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
}

.content-background {
  background-color: rgba(255, 255, 255, 0.85);
  padding: 40px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  width: 90%;
  max-width: 600px;
}

h1 {
  font-size: 2.5em;
  color: #e74c3c;
  margin-bottom: 20px;
  text-shadow: 1px 1px 2px #000;
}

.input-container {
  background-color: rgba(255, 255, 255, 0.95);
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>
