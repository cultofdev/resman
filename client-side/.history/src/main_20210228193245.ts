import { createApp } from "vue";
import App from "./App.vue";
import router from './router';
import PrimeVue from 'primevue/config';
import Dialog from 'primevue/dialog';
import Button from 'primevue/Button';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const app = createApp(App);

app.use(router);
app.use(PrimeVue);

app.component('Dialog', Dialog);
app.component('Button', Button);

app.mount("#app");
