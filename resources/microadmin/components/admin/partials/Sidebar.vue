<template>
    <nav>
        <v-app-bar color="#fff" app>
            <v-app-bar-nav-icon
                class="theme--light"
                @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>
            <v-spacer></v-spacer>

            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-avatar
                        color="indigo"
                        text
                        v-on="on"
                        style="cursor: pointer"
                    >
                        <img :src="static_image_url + 'logo/logo.png'" alt="" />
                    </v-avatar>
                </template>
                <v-list flat>
                    <v-list-item router to="#" active-class="border">
                        <v-list-item-title>Profile</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="logout()" active-class="border">
                        <v-list-item-title>Logout</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>

        <!-- ====================================== Sidebar Part Start ====================================== -->
        <v-navigation-drawer
            v-model="drawer"
            color="#FFFFFF"
            app
            class="darken-4"
        >
            <v-layout column align-center>
                <v-flex class="mt-5">
                    <v-avatar size="100">
                        <img :src="static_image_url + 'logo/logo.png'" alt="" />
                    </v-avatar>
                    <p class="gray--text subheading mt-1 text-center">
                        Username
                    </p>
                </v-flex>
            </v-layout>

            <!-- Sidebar part -->
            <v-list dense>
                <template v-for="item in items">
                    <v-row
                        v-if="item.heading"
                        :key="item.heading"
                        align="center"
                    >
                        <v-col cols="6">
                            <v-subheader v-if="item.heading">{{
                                item.heading
                            }}</v-subheader>
                        </v-col>
                        <v-col cols="6" class="text-center">
                            <a href="#!" class="body-2 black--text">EDIT</a>
                        </v-col>
                    </v-row>

                    <v-list-group
                        v-else-if="item.children"
                        :key="item.text"
                        v-model="item.model"
                    >
                        <template v-slot:activator>
                            <v-list-item-action>
                                <v-icon>{{ item.icon_head }}</v-icon>
                            </v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title>{{
                                    item.text
                                }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item
                            class="child_menu_list"
                            v-for="(child, i) in item.children"
                            :key="i"
                            link
                        >
                            <v-list-item-action v-if="child.icon">
                                <v-icon>{{ child.icon }}</v-icon>
                            </v-list-item-action>
                            <v-list-item-content
                                :key="child.text"
                                link
                                @click.prevent="child.action"
                            >
                                <v-list-item-title>{{
                                    child.text
                                }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-group>

                    <!-- Single items -->
                    <v-list-item
                        v-else
                        :key="item.text"
                        link
                        @click.prevent="item.action"
                    >
                        <v-list-item-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>{{
                                item.text
                            }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </template>
            </v-list>
            <!-- Sidebar part -->
        </v-navigation-drawer>
        <!-- ====================================== Sidebar Part End ====================================== -->
    </nav>
</template>
<script>
export default {
    data() {
        return {
            drawer: true,
            static_image_url: this.$store.state.static_image_link,
            /* ===================== Sidebar ========================== */
            items: [
                /* ========================== Menu part start ========================== */
                {
                    icon: "mdi mdi-web-check",
                    text: "Visit Website",
                    action: () => {
                        window.open('/');
                    },
                },
                {
                    icon: "mdi-home",
                    text: "Home",
                    action: () => {
                        this.$router.push("/admin/dashboard").catch(() => {});
                    },
                },
                /* ============ Service =========== */ 
                {
                    icon: "mdi mdi-sitemap-outline",
                    text: "Service",
                    action: () => {
                        this.$router.push("/admin/service").catch(() => {});
                    },
                },
                /* Cabin Information */
                {
                    icon_head: "mdi mdi-doctor",
                    icon: "mdi-chevron-up",
                    "icon-alt": "mdi-chevron-down",
                    text: "Doctor",
                    action: () => {},
                    children: [
                        {
                            icon: "mdi mdi-lightning-bolt-circle",
                            text: "Category",
                            auth: true,
                            action: () => {
                                this.$router
                                    .push("/admin/doctor/category")
                                    .catch(() => {});
                            },
                        },

                        {
                            icon: "mdi mdi-led-on",
                            text: "Doctor List",
                            auth: true,
                            action: () => {
                                this.$router
                                    .push("/admin/doctor")
                                    .catch(() => {});
                            },
                        },
                    ],
                },

                /* Cabin Information */
                /* ========================== Menu part start ========================== */
            ],
        };
    },
    /* ========================== Methods ========================== */
    methods: {
        logout() {
            axios
                .get("/api/admin/logout")
                .then((resp) => {
                    if (resp.data.status == true) {
                        this.$store.dispatch("admin");
                        this.$toasted.show( "Logout successfully ! you are back soon .", {
                            type: "error",
                            position: "top-center",
                            duration: 10000,
                        });
                    }
                })
                .catch(() => {
                    this.$toasted.show("some thing want to wrong", {
                        type: "error",
                        position: "top-center",
                        duration: 4000,
                    });
                });
        },
    },
};
</script>
<style scoped>
.border {
    border-left: 4px solid #0ba518;
}

.v-application--is-ltr .v-list-item__action:first-child,
.v-application--is-ltr .v-list-item__icon:first-child {
    margin-right: 10px;
}

.v-list-group__items {
    margin-left: 5px !important;
}
</style>
