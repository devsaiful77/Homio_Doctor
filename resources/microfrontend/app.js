require('./bootstrap');
window.Vue = require('vue').default;
import Toasted from "vue-toasted";
import router from "./router"
import store from "./store"
import App from "./App.vue"

Vue.use(Toasted);

const app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
