import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

// 在线引入用于测试
// import '';
// import '';

import ElementPlus from 'element-plus';
import '@/cssThemes/index.scss';
// 全局组件
import longContent from '@/components/longContent/index.vue';
const app = createApp(App);
app.component('longContent', longContent);
app.use(createPinia());
app.use(router).use(ElementPlus);

app.mount('#app');
