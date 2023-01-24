import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'; // Vue router instance
Vue.use(Vuex);

/* ========================== State ========================== */
const state = {

    user: {
        data: {},
        token: sessionStorage.getItem("TOKEN"),
    },

    doctor: {
        data: {},
        token: sessionStorage.getItem("DOCTOR_TOKEN"),
    },
    

    /* ========================== global ========================== */
    // image_base_link: '/../public/storage/',
    // static_image_link: "/../public/storage/static/admin/",


    /* ========================== local ========================== */
    image_base_link: '/../storage/',
    static_image_link: "/../storage/static/admin/",



};

/* ========================== Getters ========================== */
const getters = {
    admin(state) {
        return state.user;
    },
    

    outlet(state) {
        return state.doctor;
    },
    

}

/* ========================== Actions ========================== */
const actions = {
    
    //every time this session check, for user session running or expired
    admin(context) {
        axios
            .get("/api/admin/auth/check")
            //if session status ruining
            .then((resp) => {
                if (resp.data.status == "AUTHORIZED") {
                    context.commit("setUser", resp.data.admin);
                    context.commit("setToken", resp.data.token);
                    router.push({ name: 'admin_dashboard' });
                    return 
                }
                if (resp.data.status == "UNAUTHORIZED") {
                    context.commit("logout");
                    router.push({
                        name: "admin_login",
                    });
                    return;
                }
            })
            //error handling
            .catch(() => {
                router.push({
                    name: "admin_login",
                });
            });
    },

    //every time this session check, for user session running or expired
    doctor(context) {
        axios
            .get("/api/doctor/auth/check")
            //if session status ruining
            .then((resp) => {
                if (resp.data.status == "AUTHORIZED") {
                    context.commit("setDoctor", resp.data.doctor);
                    context.commit("setDoctorToken", resp.data.token);
                    router.push({ name: 'doctor_dashboard' });
                    return 
                }
                if (resp.data.status == "UNAUTHORIZED") {
                    context.commit("doctor_logout");
                    router.push({
                        name: "doctor_login",
                    });
                    return;
                }
            })
            //error handling
            .catch(() => {
                router.push({
                    name: "doctor_login",
                });
            });
    },
    

    

}

/* ========================== Mutations ========================== */
const mutations = {
    setUser: (state, user) => {
        state.user.data = user;
    },

    setToken: (state, token) => {
        state.user.token = token;
        sessionStorage.setItem('TOKEN', token);
    },

    logout: (state) => {
        state.user.token = null;
        state.user.data = {};
        sessionStorage.removeItem("TOKEN");
    },

    /* =================== Doctor =================== */
    setDoctor: (state, doctor) => {
        state.doctor.data = doctor;
    },

    setDoctorToken: (state, token) => {
        state.doctor.token = token;
        sessionStorage.setItem('DOCTOR_TOKEN', token);
    }, 

    doctor_logout: (state) => {
        state.doctor.token = null;
        state.doctor.data = {};
        sessionStorage.removeItem("DOCTOR_TOKEN");
    },

}

/* ========================== Store ========================== */
const store = new Vuex.Store({
    state: state,
    mutations: mutations,
    getters: getters,
    actions: actions
})

global.store = store;
export default store;