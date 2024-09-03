import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import InputNumber from 'primevue/inputnumber'
import Button from 'primevue/button'
import router from './router'
import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primevue/resources/primevue.min.css'

const app = createApp(App)
app.use(PrimeVue)
app.use(router)
app.component('InputNumber', InputNumber).component('Button', Button)
app.mount('#app')
