import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import VueGoogleMaps from '@fawmi/vue-google-maps';
import i18n from "../i18n"; // Adjust the path based on your project structure

const app = createApp(App);
const apiKey = process.env.VUE_APP_API_KEY;

// Use VueGoogleMaps and i18n as plugins
app.use(VueGoogleMaps, {
    load: {
        key: apiKey,
    },
});

app.use(i18n);

app.mount('#app');

