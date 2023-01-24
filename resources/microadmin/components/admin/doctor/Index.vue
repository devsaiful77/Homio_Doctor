<template>
    <div class="team">
        <div class="header__title">
            <div class="add__button_and_title">
                <router-link :to="{ name: 'admin_doctor_add' }" class="add_router_link"><v-icon>
                        mdi-plus
                    </v-icon></router-link>
            </div>
            <div>
                <v-breadcrumbs :items="breadcrumb_link">
                    <template v-slot:divider>
                        <v-icon>mdi-forward</v-icon>
                    </template>
                </v-breadcrumbs>
            </div>
        </div>
        <v-container class="custom__container">
            <v-layout row wrap>
                <v-flex sm12 xs12 md6 lg12>
                    <div class="simple_table_wrapper">
                        <h4 class="table_title"><span><i class="fa-solid fa-circle-check"></i></span> Doctor List</h4>
                        <!-- Table -->
                        <v-simple-table fixed-header height="300px">
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th class="text-left">
                                            Name
                                        </th>
                                        <th class="text-left">
                                            Calories
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in desserts" :key="item.name">
                                        <td>{{ item.name }}</td>
                                        <td>{{ item.calories }}</td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                        <!-- Table -->
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import Form from "vform";
import { HasError } from "vform/src/components/bootstrap5";
Vue.component(HasError.name, HasError);

export default {
    /* ============================= Data ============================= */
    data() {
        return {
            image_url: this.$store.state.image_base_link,
            form: new Form({
                name: '',
                description: '',
                imageUrl: '',
                imageFile: null,
                imageName: '',
            }),
            serviceId: '',
            imagePreview: "",
            loading: false,
            search: '',
            dialog: false,
            editDialog: false,
            loadingstatus: true,
            headers: [

                { text: 'SL No', value: 'sn' },
                { text: 'Image', value: 'image' },
                {
                    text: 'Service Name',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                },
                { text: 'Description', value: 'description', width: "40%" },
                { text: 'Actions', value: 'actions', sortable: false },
            ],
            desserts: [],
            editedIndex: -1,
            /* Breadcrumb */
            breadcrumb_link: [
                {
                    text: 'Dashboard',
                    disabled: false,
                    href: '/admin/dashboard'
                },
                {
                    text: 'Doctor',
                    disabled: true,
                    href: '#',
                },
            ],
            /* Breadcrumb */
        }
    },
    /* ============================= Methods ============================= */
    methods: {
        serviceList() {
            axios.get('/api/admin/service/list')
                .then((resp) => {
                    if (resp.data.status == true) {
                        this.desserts = resp.data.service_list;
                        this.loadingstatus = false;
                    }
                })
                .catch((error) => {
                    console.log(error)
                    this.$toasted.show(error, {
                        type: "error",
                        position: 'top-center',
                        duration: 4000
                    });
                })
        },

        add() {

            let url = "";
            if (this.serviceId) {
                url = '/api/admin/service/update/' + this.serviceId;
            } else {
                url = '/api/admin/service/create';
            }
            this.form
                .post(url)
                .then(resp => {
                    console.log(resp);
                    if (resp.data.status == true) {
                        this.$toasted.show(resp.data.message, {
                            type: 'success',
                            position: 'top-center',
                            duration: 4000,
                        });
                        this.close();
                        this.serviceList()
                    }
                })
                .catch(error => {
                    console.log(error);
                    this.error = error;
                });
        },

        /* Edit Data */
        editItem(id) {
            axios.get('/api/admin/service/edit/' + id)
                .then((resp) => {
                    if (resp.data.status == true) {
                        let data = resp.data.service;
                        this.serviceId = data.id;
                        this.form.name = data.name;
                        this.form.description = data.description;
                        this.form.imageUrl = this.image_url + data.image
                        this.editedIndex = data.id;
                        this.dialog = true;
                    }
                })
                .catch((error) => {
                    console.log(error)
                    this.$toasted.show(error, {
                        type: "error",
                        position: 'top-center',
                        duration: 4000
                    });
                })



        },

        /* Image Upload */
        pickFile() {
            this.$refs.image.click()
        },
        onFilePicked(e) {
            const files = e.target.files
            if (files[0] !== undefined) {
                this.form.imageName = files[0].name
                if (this.form.imageName.lastIndexOf('.') <= 0) {
                    return
                }
                const fr = new FileReader()
                fr.readAsDataURL(files[0])
                fr.addEventListener('load', () => {
                    this.form.imageUrl = fr.result
                    this.form.imageFile = files[0]
                })
            } else {
                this.form.imageName = ''
                this.form.imageFile = ''
                this.form.imageUrl = ''
            }
        },
        /* Image Upload */



        close() {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },
    },


    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'Add Service' : 'Edit Service'
        },

    },

    watch: {
        dialog(val) {
            val || this.close()
        },
    },

    created() {
        this.serviceList()
    },


}
</script>
