import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv, type ConfigEnv } from 'vite' // 在同时开启preserveValueImports“ 和 “isolatedModules“ 时，必须使用仅类型导入进行导入。 即使用 import type语法声明导入的是类型声明
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig((config: ConfigEnv) => {
  const {mode, command, ssrBuild} = config; // mode:development|production command:server|build(分别对应开发和生产) ssrBuild代表是否服务端渲染
  // console.log("mode:",mode, ",command:", command, ",ssrBuild:", ssrBuild)
  // process.cwd()获取当前文件的文件夹
  const envDir = process.cwd();
  // loadEnv第三个参数是前缀，表示输出环境变量前缀为xxx的环境变量，默认值为'VITE_'
  const env = loadEnv(mode, envDir, ""); // 加载环境变量文件，.env为公用环境变量，开发环境下会合并：.env 和.env.development的环境变量，生产环境与测试环境也会，根据mode的值不同，会合并不同文件下的环境变量（.env+.env.[mode]）
  // console.log(process.env.VITE_TEST, env.VITE_TEST,env)
  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)) // import.meta.url
      }
    },
    css: {
      preprocessorOptions: {
        // 全局样式引入
        scss: {
          additionalData: '@import "@/cssThemes/variable.scss";',
          javascriptEnabled: true
        }
      }
    }
  };
});

// console.log(fileURLToPath(new URL('./src', import.meta.url))) // 返回字符串 D:\vue-project\AmiA-Vue\src
// console.log(import.meta.url) // 返回字符串file:///D:/vue-project/AmiA-Vue/vite.config.ts，
