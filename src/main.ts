import { createApp } from 'vue'
import urql from '@urql/vue'
import App from './App.vue'
import 'uno.css'

const app = createApp(App);

app.use(urql, {
  url: import.meta.env.VITE_GRAPHQL_ENDPOINT
})

app.mount('#app')
