import { createApp } from 'vue';
import store from '@/stores/index';

import App from './App.vue';
import router from './router';

// 在线引入用于测试
// import '';
// import '';

import ElementPlus from 'element-plus';
import '@/cssThemes/index.scss';
// 全局组件
import longContent from '@/components/longContent/index.vue';
import iconFont from '@/components/iconFont/index.vue'; // 阿里云字体图标
const app = createApp(App);
app.component('longContent', longContent);
app.component('iconFont', iconFont);
app.use(store).use(router).use(ElementPlus);

app.mount('#app');
