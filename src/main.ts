import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import { createVuestic } from 'vuestic-ui'
import { router } from './router'
import 'vuestic-ui/css'

const app = createApp(App)
app.use(createPinia())
app.use(createVuestic())
app.use(router)
app.mount('#app')
