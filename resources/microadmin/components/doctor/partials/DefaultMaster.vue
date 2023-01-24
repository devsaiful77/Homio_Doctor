<template lang="">
    <div>
        <!-- main part -->
        <v-app id="inspire">
            <Sidebar />

            <v-main class="ma-4">
                <router-view></router-view>
            </v-main>

            <Footer />
        </v-app>
        <!-- main part -->
    </div>
</template>
<script>
import Sidebar from './Sidebar.vue'
import Footer from './Footer.vue';
export default {
    name: "App",
    components: {
        Sidebar,
        Footer,
    },
};
</script>
<style lang=""></style>
