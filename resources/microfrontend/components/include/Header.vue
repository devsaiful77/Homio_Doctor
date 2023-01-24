<template lang="">
    <div>
        <!-- header part -->
        <header>
            <!-- desktop -->
            <nav class="desktop_header container">
                <div class="logo_container">
                    <img :src="static_image_url + 'logo.png'" alt="Health Care" />
                </div>
                <ul class="header_menu">
                    <li class="body-1">
                        <router-link :to="{name:'welcome'}">Home</router-link>
                    </li>
                    <li class="body-1">
                        <a style="cursor:pointer">Doctors</a>
                        <ul class="header_submenu">
                            <li class="body-2">
                                <router-link :to="{ name:'offline_doctor' }">Offline Doctors</router-link>
                            </li>
                            <li class="body-2">
                                <router-link :to="{ name: 'online_doctor' }">Online Doctors</router-link>
                            </li>
                        </ul>
                    </li>

                    <li class="body-1">
                        <router-link :to="{name:'surgery_support'}"> Surgery Support</router-link>
                    </li>

                    <li class="body-1">
                        <router-link :to="{name:'home_service'}"> Home Service</router-link>
                    </li>
                    <li class="body-1">
                        <router-link :to="{name:'health_mart'}"> Health Mart</router-link>
                    </li>
                    <li class="body-1">
                        <router-link :to="{name:'ambulance'}"> Ambulance </router-link>
                    </li>
                    <li class="body-1">
                        <router-link :to="{name:'blood_bank'}"> Blood Bank</router-link>
                    </li>
                    <li class="body-1">
                        <router-link :to="{ name:'blog' }">Blogs</router-link>
                    </li>
                </ul>
                <div class="login_btn">
                    <a href="#" class="btn_primary">Login</a>
                </div>
                <button class="menu_btn" onclick="mobileMenu()">
                    <i class="fa-solid fa-bars"></i>
                </button>
            </nav>


            <!-- Mobile Menu -->
            <ul id="mobile_menu" class="mobile_menu">
                <li class="body-1">
                    <router-link :to="{name:'welcome'}">Home</router-link>
                </li>
                <li class="body-1">
                    <a style="cursor:pointer">Doctors</a>
                    <ul class="header_submenu">
                        <li class="body-2">
                            <router-link :to="{ name:'offline_doctor' }">Offline Doctors</router-link>
                        </li>
                        <li class="body-2">
                            <router-link :to="{ name: 'online_doctor' }">Online Doctors</router-link>
                        </li>
                    </ul>
                </li>

                <li class="body-1">
                    <router-link :to="{name:'surgery_support'}"> Surgery Support</router-link>
                </li>

                <li class="body-1">
                    <router-link :to="{name:'home_service'}"> Home Service</router-link>
                </li>
                <li class="body-1">
                    <router-link :to="{name:'health_mart'}"> Health Mart</router-link>
                </li>
                <li class="body-1">
                    <router-link :to="{name:'ambulance'}"> Ambulance </router-link>
                </li>
                <li class="body-1">
                    <router-link :to="{name:'blood_bank'}"> Blood Bank</router-link>
                </li>
                <li class="body-1">
                    <router-link :to="{ name:'blog' }">Blogs</router-link>
                </li>
            </ul>
        </header>
        <!-- header part -->
    </div>
</template>
<script>
export default {
    /* ======================= Created ======================= */
    created() {

    },

    /* ======================= Data ======================= */
    data() {
        return {
            static_image_url: this.$store.state.static_image_link
        }
    },

    /* ======================= Methods ======================= */
    methods: {

    },

    /* ======================= Mounted ======================= */
    mounted() {

    },

    /* ======================= Computed ======================= */
    computed: {

    }


};
</script>
<style lang=""></style>
