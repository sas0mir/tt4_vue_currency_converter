import { createApp } from 'vue'
import { createPinia } from 'pinia'
import NavigationMenu from './components/navigation/NavigationMenu.vue'
import CustomSwitcher from './components/switcher/CustomSwitcher.vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('NavigationMenu', NavigationMenu)
app.component('CustomSwither', CustomSwitcher)

app.use(createPinia())
app.use(router)

app.mount('#app')
