import { createApp } from 'vue'
import App from './App.vue'
import router, { updateSeo } from './router'

// Import the professional CSS (no animations)
import './style.css'

const app = createApp(App)
app.use(router)

router.isReady().then(() => {
  updateSeo(router.currentRoute.value)
  app.mount('#app')
})
