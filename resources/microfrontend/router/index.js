import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
    /* ====================== Public Router ====================== */
    // {
    //     path: "/login",
    //     component: () =>
    //         import(
    //             /* webpackChunkName: "login" */ "../views/Login.vue"
    //         ),
    //     name: "login",
    //     meta: {
    //         title: "Customer | Login",
    //         isGuest: true,
    //     },
    // },

    /* ====================== Protected Router ====================== */
    {
        path: "/",
        redirect: "/",
        component: () => import("../components/MasterLayout.vue"),
        children: [
            /* ====================== Start Admin Dashboard Routing ====================== */
            {
                path: "/",
                component: () =>
                    import(
                        /* webpackChunkName: "welcome" */ "../views/Index.vue"
                    ),
                name: "welcome",
                meta: {
                    title: "Welcome",
                },
            },

            {
                path: "/blogs",
                component: () =>
                    import(
                        /* webpackChunkName: "blog" */ "../views/Blogs.vue"
                    ),
                name: "blog",
                meta: {
                    title: "Blogs",
                },
            },

            {
                path: "/offline/doctor",
                component: () =>
                    import(
                        /* webpackChunkName: "offline_doctor" */ "../views/doctor/Offline.vue"
                    ),
                name: "offline_doctor",
                meta: {
                    title: "Offline Doctor",
                },
            },

            {
                path: "/online/doctor",
                component: () =>
                    import(
                        /* webpackChunkName: "online_doctor" */ "../views/doctor/Online.vue"
                    ),
                name: "online_doctor",
                meta: {
                    title: "Online Doctor",
                },
            },

            {
                path: "/surgery",
                component: () =>
                    import(
                        /* webpackChunkName: "surgery_support" */ "../views/Surgery.vue"
                    ),
                name: "surgery_support",
                meta: {
                    title: "Surgery",
                },
            },

            {
                path: "/home-service",
                component: () =>
                    import(
                        /* webpackChunkName: "home_service" */ "../views/HomeService.vue"
                    ),
                name: "home_service",
                meta: {
                    title: "Home Service",
                },
            },

            {
                path: "/health-mart",
                component: () =>
                    import(
                        /* webpackChunkName: "health_mart" */ "../views/HealthMart.vue"
                    ),
                name: "health_mart",
                meta: {
                    title: "Health mart",
                },
            },

            {
                path: "/ambulance",
                component: () =>
                    import(
                        /* webpackChunkName: "ambulance" */ "../views/Ambulance.vue"
                    ),
                name: "ambulance",
                meta: {
                    title: "Ambulance",
                },
            },

            {
                path: "/blood-bank",
                component: () =>
                    import(
                        /* webpackChunkName: "blood_bank" */ "../views/Blood.vue"
                    ),
                name: "blood_bank",
                meta: {
                    title: "Blood Bank",
                },
            },



            // {
            //     path: "/customer/dashboard",
            //     component: () =>
            //         import(
            //             /* webpackChunkName: "customer_dashboard" */ "../views/dashboard/Index.vue"
            //         ),
            //     name: "customer_dashboard",
            //     meta: {
            //         title: "Admin |Dashboard",
            //     },
            // },

            /* ====================== End Admin Dashboard Routing ====================== */
        ],
    },

    /* ====================== Protected Router ====================== */
];


const router = new VueRouter({
    mode: "history",
    base: __dirname,
    routes,
});




export default router;
