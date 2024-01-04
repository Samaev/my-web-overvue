import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueGoogleMaps from '@fawmi/vue-google-maps';

const app = createApp(App);
const apiKey = process.env.VUE_APP_API_KEY;

app.use(VueGoogleMaps, {
    load: {
        key: apiKey,
    },
}).mount('#app');
