import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './main.scss';

const app = createApp(App);

app.use(router);

app.mount('#app');

window.Telegram.WebApp.expand();
window.Telegram.WebApp.BackButton.show();

document.addEventListener('touchstart', function () {}, false);
