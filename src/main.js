import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import veevalidatePlugin from './includes/validation';
// import './includes/firebase';

import './assets/tailwind.css';

import './assets/main.css';

const app = createApp(App);
app.use(store);
app.use(router);
app.use(veevalidatePlugin);

app.mount('#app');
