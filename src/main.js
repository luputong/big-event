import './assets/main.scss'
import { createPersistedState } from 'pinia-persistedstate-plugin'
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from '@/router'
import { createPinia } from 'pinia' 
import  locale from  'element-plus/dist/locale/zh-cn.js'
import App from './App.vue'
const pinia=createPinia();
const app = createApp(App)
const persist=createPersistedState();
pinia.use(persist)
app.use(pinia)
app.use(router)
app.use(ElementPlus,{locale})
app.mount('#app')
