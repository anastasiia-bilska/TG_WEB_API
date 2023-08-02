import { createApp } from 'vue';
import { useRouter, useRoute } from 'vue-router';

import App from './App.vue';
import router from './router';

import './main.scss';

const app = createApp(App);

app.use(router);

app.mount('#app');

window.Telegram.WebApp.expand();

const route = useRoute();

if (route.name === 'home') {
  window.Telegram.WebApp.BackButton.hide();
} else {
  window.Telegram.WebApp.BackButton.show();
}

window.Telegram.WebApp.onEvent('backButtonClicked', () => {
  (() => {
    const backRouter = useRouter();
    backRouter.go(-1);
  })();
});

document.addEventListener('touchstart', function () {}, false);
