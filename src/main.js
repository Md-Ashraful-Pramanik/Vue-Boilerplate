import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';

import { createI18n } from 'vue-i18n';
import messages from './labels/index.js';


const i18n = createI18n({
    locale: 'bn',
    fallbackLocale: 'en',
    allowComposition: true, // you need to specify that!
    messages
})

const app = createApp(App);

app.use(i18n).use(router).mount('#app');

