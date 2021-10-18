import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/tailwind.css';
import './assets/main.css';

// The use method allows us to register a plugin
const app = createApp(App);
app.use(store);
app.use(router);

app.mount('#app');
