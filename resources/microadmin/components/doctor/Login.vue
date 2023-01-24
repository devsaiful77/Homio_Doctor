<template>
    <v-app id="inspire">
        <v-main>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md4>
                        <v-card
                            class="text-center pa-1 v-card v-sheet theme--light"
                            color="#ddd"
                        >
                            <div
                                class="v-card__title justify-center display-1 mb-2"
                            >
                                Welcome
                            </div>
                            <div class="v-card__subtitle">
                                Sign in to Doctor account
                            </div>

                            <!-- login form -->
                            <v-form
                                ref="form"
                                v-model="valid"
                                lazy-validation
                                @submit.prevent="login"
                                @keydown="form.onKeydown($event)"
                            >
                                <has-error
                                    :form="form"
                                    field="phone"
                                ></has-error>
                                <v-text-field
                                    v-model="form.phone"
                                    :rules="phoneRules"
                                    label="Phone Number"
                                    required
                                    outlined
                                ></v-text-field>

                                <has-error
                                    :form="form"
                                    field="password"
                                ></has-error>
                                <v-text-field
                                    v-model="form.password"
                                    :append-icon="
                                        show1 ? 'mdi-eye' : 'mdi-eye-off'
                                    "
                                    :rules="passwordRules"
                                    :type="show1 ? 'text' : 'password'"
                                    name="input-10-1"
                                    label="Password"
                                    required
                                    outlined
                                    @click:append="show1 = !show1"
                                ></v-text-field>

                                <v-btn
                                    :disabled="!valid"
                                    color="success"
                                    class="mr-4"
                                    type="submit"
                                >
                                    Login
                                </v-btn>

                                <v-btn color="warning" @click="resetValidation">
                                    Reset
                                </v-btn>
                            </v-form>
                            <!-- login form -->
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import Form from "vform";
import { HasError } from "vform/src/components/bootstrap5";
Vue.component(HasError.name, HasError);

export default {
    data: () => ({
        valid: true,
        form: new Form({
            phone: "",
            password: "",
        }),

        phoneRules: [
            // (v) => !!v || "Phone is required",
            // (v) => /.+@.+\..+/.test(v) || "Phone must be valid",
        ],

        show1: false,
        passwordRules: [(v) => !!v || "Password is required"],
    }),

    methods: {
        login() {
            this.$refs.form.validate();
            this.form
                .post("/api/doctor/login")
                .then((resp) => {
                    if (resp.data.status == true) {
                        this.$store.dispatch("doctor");
                        this.$toasted.show(resp.data.message, {
                            type: "success",
                            position: "top-right",
                            duration: 2000,
                        });
                    } else {
                        this.$toasted.show(
                            "Your given credential don not match our records",
                            {
                                type: "error",
                                position: "top-right",
                                duration: 2000,
                            }
                        );
                    }
                })
                .catch((error) => {
                    console.log(error);
                    this.$toasted.show(error, {
                        type: "error",
                        position: "top-right",
                        duration: 2000,
                    });
                });
        },
        reset() {
            this.$refs.form.reset();
        },
        resetValidation() {
            this.$refs.form.resetValidation();
        },
    },
};
</script>
<style scoped>
.v-card {
    padding: 30px !important;
}

.invalid-feedback.d-block {
    display: block;
    text-align: left;
    font-size: 13px;
    color: red;
    font-weight: 500;
    font-style: italic;
    margin-left: 5px;
}
</style>
