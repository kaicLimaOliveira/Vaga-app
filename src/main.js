import { createApp } from 'vue'
import App from './App.vue'

import mitt from 'mitt'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


const app = createApp(App)
const emitter = mitt()

app.config.globalProperties.emitter = emitter
app.use(VueSweetalert2)
app.mount('#app')




