import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';

library.add(faBell, faUser, faTag,faCalendar,faGear)


createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router , )
    .mount('#app')
