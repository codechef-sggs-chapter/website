import { createApp } from 'vue'
import App from './App.vue'
import "./assets/tailwind.css"
import 'animate.css'
import BaseContainer from "./components/UI/baseContainers.vue"
import TestComp from "./components/test/test.vue"
const VueScrollTo = require('vue-scrollto')


const app = createApp(App)
app.use(VueScrollTo);
app.component('base-container',BaseContainer)
app.component('test-comp',TestComp)

app.mount('#app')
