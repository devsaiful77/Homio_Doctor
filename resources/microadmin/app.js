require("./bootstrap");
window.Vue = require("vue").default;
import router from "./router";
import store from "./store/index.js";
import App from "./App.vue";
import Toasted from "vue-toasted";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify);
Vue.use(Toasted);

const app = new Vue({
    router,
    store,
    vuetify: new Vuetify({
        icons: {
            iconfont: "md",
        },
    }),
    render: (h) => h(App),
}).$mount("#app");
