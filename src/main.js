import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueGoogleMaps from '@fawmi/vue-google-maps';

const app = createApp(App);

app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyAptTl_riLAD7b7DpGWdLGZsaOgZYPtlCA',
    },
}).mount('#app');
