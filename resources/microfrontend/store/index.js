import Vue from "vue";
import Vuex from "vuex";
import router from "../router"; // Vue router instance
Vue.use(Vuex);

/* ========================== State ========================== */
const state = {
    admin: {},
    outlet: {},

    /* ========================== global ========================== */
    // image_base_link: '/../public/storage/',
    // static_image_link: "/../public/storage/static/img",

    /* ========================== local ========================== */
    image_base_link: "/../storage/",
    static_image_link: "/../storage/static/img/",
};

/* ========================== Getters ========================== */
const getters = {
    admin(state) {
        return state.admin;
    },

    outlet(state) {
        return state.outlet;
    },
};

/* ========================== Actions ========================== */
const actions = {
    //every time this session check, for admin session running or expired
    admin(context) {
        axios
            .get("/check/session/admin")
            //if session status ruuning
            .then((resp) => {
                if (resp.data.status == "RUNNING") {
                    context.commit("admin", resp.data.admin);
                }

                //if session is expired, admin redirect ot login again
                if (resp.data.status == "EXPIRED") {
                    localStorage.removeItem("admin_token");
                    router.push({
                        name: "adminLogin",
                    });
                    return;
                }
            })
            //error handaling
            .catch(() => {
                router.push({
                    name: "adminLogin",
                });
            });
    },

    // outlet action in server
    outlet(context) {
        axios.get("/api/outlet/login/session/check").then((resp) => {
            //   console.log(resp);
            //when session running
            if (resp.data.session == "running") {
                context.commit("outlet", resp.data.outlet);
            }
            //when session expired
            if (resp.data.session == "expired") {
                localStorage.removeItem("outlet_token");
                router.push({
                    name: "outlet_login",
                });
            }
        });
    },
};

/* ========================== Mutations ========================== */
const mutations = {
    admin(state, payload) {
        return (state.admin = payload);
    },
    outlet(state, payload) {
        return (state.outlet = payload);
    },
};

/* ========================== Store ========================== */
const store = new Vuex.Store({
    state: state,
    mutations: mutations,
    getters: getters,
    actions: actions,
});

global.store = store;
export default store;
