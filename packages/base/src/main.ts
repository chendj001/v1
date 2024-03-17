import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { arrayDedupe } from 'utils'

console.log(getVer())
console.log(
  formatMoney(100000),
  formatMoney(1000),
  formatMoney(1),
  formatMoney(1.0),
  formatMoney(0.0),
  formatMoney(0),
  formatMoney(0.1),
  formatMoney(0.101)
)
console.log(formatCapitalize('hello'))
console.log(arrayDedupe([1, 2, 3, 4, 1, 2, 3]))

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
