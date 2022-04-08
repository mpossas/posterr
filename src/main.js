import { createApp } from 'vue'
import App from './App.vue'
import router from '~/router'
import { initData } from '~/server/data'

initData()
createApp(App).use(router).mount('#app')
