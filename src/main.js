import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import veevalidatePlugin from './includes/validation';
import { auth } from './includes/firebase';
import Icon from './directives/icon';
import './assets/tailwind.css';
import './assets/main.css';

let app;
auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);
    app.use(store);
    app.use(router);
    app.use(veevalidatePlugin);
    app.directive('icon', Icon);

    app.mount('#app');
  }
});
