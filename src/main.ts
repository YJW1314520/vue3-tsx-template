import './index.css'
import 'element-plus/dist/index.css'
import App from './App'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import elementPlus from '@/plugins/ElementPlus'
import router from '@/router'

createApp(App)
  .use(router)
  .use(createPinia())
  .use(elementPlus)
  .mount('#app')
