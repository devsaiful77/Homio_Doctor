import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
Vue.use(VueRouter);
import doctorRouter from './doctor'

const routes = [
    /* ====================== Public Router ====================== */
    {
        path: "/admin/login",
        component: () =>
            import(
                /* webpackChunkName: "admin_login" */ "../components/admin/Login.vue"
            ),
        name: "admin_login",
        meta: {
            title: "Admin | Login",
            isGuest: true,
        },
    },

    /* ====================== Protected Router ====================== */
    {
        path: "/",
        redirect: "/admin/dashboard",
        component: () => import("../components/admin/partials/DefaultMaster.vue"),
        meta: { requiresAuth: true },
        children: [
            /* ====================== Start Admin Dashboard Routing ====================== */
            {
                path: "/admin/dashboard",
                component: () =>
                    import(
                        /* webpackChunkName: "admin_dashboard" */ "../components/admin/Dashboard"
                    ),
                name: "admin_dashboard",
                meta: {
                    title: "Admin |Dashboard",
                },
            },


            /* ===================== Service ===================== */ 
            {
                path: "/admin/service",
                component: () =>
                    import(
                        /* webpackChunkName: "admin_service" */ "../components/admin/Service/Index.vue"
                    ),
                name: "admin_service",
                meta: {
                    title: "Admin | Service",
                },
            },

            /* ===================== Service ===================== */ 
            {
                path: "/admin/doctor/category",
                component: () =>
                    import(
                        /* webpackChunkName: "admin_doctor_category" */ "../components/admin/doctor/Category.vue"
                    ),
                name: "admin_doctor_category",
                meta: {
                    title: "Admin | Doctor Category",
                },
            },

            /* ===================== Service ===================== */ 
            {
                path: "/admin/doctor",
                component: () =>
                    import(
                        /* webpackChunkName: "admin_doctor" */ "../components/admin/doctor/Index.vue"
                    ),
                name: "admin_doctor",
                meta: {
                    title: "Admin | Doctor",
                },
            },
            
            {
                path: "/admin/doctor/create",
                component: () =>
                    import(
                        /* webpackChunkName: "admin_doctor_add" */ "../components/admin/doctor/Create.vue"
                    ),
                name: "admin_doctor_add",
                meta: {
                    title: "Admin | Doctor",
                },
            },

            /* ====================== End Admin Dashboard Routing ====================== */
        ],
    },

    /* ====================== Protected Router ====================== */
];

routes.push(...doctorRouter);


const router = new VueRouter({
    mode: "history",
    base: __dirname,
    routes,
});

/* ================= Admin Middleware router =================== */
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth) && !store.state.user.token) {
    
    
        next({
          name: 'admin_login'
        })
      
    }
  
    else if (to.matched.some(record => record.meta.isGuest) && store.state.user.token) {
      
      
        next({
          name: 'admin_dashboard'
        })
      
    }
    
    else {
      next() // make sure to always call next()!
    }


});


/* ================= Admin Middleware router =================== */
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresDoctorAuth) && !store.state.doctor.token) {
    
    
        next({
          name: 'doctor_login'
        })
      
    }
  
    else if (to.matched.some(record => record.meta.isDoctorGuest) && store.state.doctor.token) {
      
      
        next({
          name: 'doctor_dashboard'
        })
      
    }
    
    else {
      next() // make sure to always call next()!
    }


});


/* ================= Protected router =================== */

export default router;
