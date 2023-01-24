

const subRouters = [
    /* ====================== Public Router ====================== */
    {
        path: "/doctor/login",
        component: () =>
            import(
                /* webpackChunkName: "doctor_login" */ "../components/doctor/Login.vue"
            ),
        name: "doctor_login",
        meta: {
            title: "Doctor | Login",
            isDoctorGuest: true,
        },
    },

    /* ====================== Protected Router ====================== */
    {
        path: "/",
        redirect: "/doctor/dashboard",
        component: () => import("../components/doctor/partials/DefaultMaster.vue"),
        meta: { requiresDoctorAuth: true },
        children: [
            /* ====================== Start Doctor Dashboard Routing ====================== */
            {
                path: "/doctor/dashboard",
                component: () =>
                    import(
                        /* webpackChunkName: "doctor_dashboard" */ "../components/doctor/Dashboard"
                    ),
                name: "doctor_dashboard",
                meta: {
                    title: "Doctor |Dashboard",
                },
            },

            /* ====================== End Admin Dashboard Routing ====================== */
        ],
    },

    /* ====================== Protected Router ====================== */
];


export default subRouters
