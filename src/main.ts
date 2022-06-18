import { createApp } from 'vue'
import App from './App'
import router from '@/router'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { createPinia } from 'pinia'
import 'element-plus/dist/index.css'

createApp(App)
  .use(router)
  .use(createPinia())
  .use(ElementPlus, {
    locale: zhCn
  })
  .mount('#app')
