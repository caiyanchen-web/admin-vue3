import { createApp } from 'vue'
import App from './App.vue'

//引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 引入路由
import router from './router/router'

//导入全局样式
import '@/styles/index.scss'
// app实例
const app = createApp(App)
// 使用router路由
app.use(router)
// 使用elementPlus
app.use(ElementPlus)

//使用图标
for(const [key,component ] of Object.entries(ElementPlusIconsVue)){
    app.component(key,component)
}

app.mount('#app')