import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
//https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    plugins: [vue()],
    lintOnSave: false,//关闭校验
    productionSourceMap: false,//关闭map文件
    publicDir: "/",//部署应用包时的基本url，如果是‘./’导致刷新页面出现cannot get/错误
    outputDir: 'assets',//放置静态文件目录
    server: {
        host: '0.0.0.0',
        https: false,//是否启用https
        port: 8080,//运行时端口
        open: false,//是否直接打开浏览器
        proxy: {
            '/api': {
                target: 'http://localhost:5001',
                changeOrigin: true,
            }
        },
        client: {
            overlay:false
        }
    }
})
