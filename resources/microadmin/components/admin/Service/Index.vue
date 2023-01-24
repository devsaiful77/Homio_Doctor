<template>
    <div class="team">
        <div class="header__title">
            <h1 class="subheading grey--text"> <i class="fa-solid fa-table-list"></i> Service</h1>
            <div>
                <v-breadcrumbs :items="breadcrumb_link">
                    <template v-slot:divider>
                        <v-icon>mdi-forward</v-icon>
                    </template>
                </v-breadcrumbs>
            </div>
        </div>
        <v-container>
            <v-layout row wrap>
                <v-flex sm12 xs12 md6 lg12>

                    <div class="simple_table_wrapper">
                        <v-data-table :headers="headers" :search="search" :items="desserts" sort-by="calories"
                            class="elevation-1" :loading="loadingstatus" loading-text="Loading... Please wait"
                            item-key="name">

                            <template v-slot:top>
                                <v-toolbar flat>
                                    <v-dialog v-model="dialog" max-width="600px">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                                                Add Service
                                            </v-btn>
                                        </template>
                                        <v-card>
                                            <h1 v-if="loading"><v-progress-circular :value="20"></v-progress-circular>
                                            </h1>
                                            <v-form @submit.prevent="add" v-else @keydown="form.onKeydown($event)"
                                                enctype="multipart/form-data">
                                                <v-card-title>
                                                    <span class="text-h5">{{ formTitle }}</span>
                                                </v-card-title>

                                                <v-card-text>
                                                    <v-container>
                                                        <v-row>
                                                            <v-col md="12">
                                                                <v-text-field label="Service Name" outlined dense
                                                                    v-model="form.name">
                                                                </v-text-field>
                                                                <has-error :form="form" field="name"></has-error>
                                                            </v-col>
                                                            <v-col md="12">
                                                                <v-textarea label="Description" outlined dense
                                                                    v-model="form.description">
                                                                </v-textarea>
                                                                <has-error :form="form" field="description"></has-error>
                                                            </v-col>
                                                            <!-- image uploads -->
                                                            <v-flex xs12
                                                                class="text-xs-center text-sm-center text-md-center text-lg-center">
                                                                <!-- Here the image preview -->
                                                                <img :src="form.imageUrl" height="150"
                                                                    v-if="form.imageUrl" />
                                                                <v-text-field label="Select Image" @click='pickFile'
                                                                    v-model='form.imageName'
                                                                    prepend-icon="mdi-file-image"></v-text-field>
                                                                <input type="file" style="display: none" ref="image"
                                                                    accept="image/jpeg, image/jpg, image/png"
                                                                    @change="onFilePicked">
                                                            </v-flex>
                                                            <!-- image uploads -->

                                                        </v-row>
                                                    </v-container>
                                                </v-card-text>

                                                <v-card-actions class="justify-center">
                                                    <v-btn depressed color="error" @click="close">
                                                        Cancel
                                                    </v-btn>

                                                    <v-btn color="primary" depressed type="submit">
                                                        Save
                                                    </v-btn>
                                                </v-card-actions>
                                            </v-form>
                                        </v-card>
                                    </v-dialog>





                                    <!-- Delete Item -->
                                    <v-spacer></v-spacer>
                                    <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line
                                        hide-details></v-text-field>
                                </v-toolbar>
                            </template>

                            <!-- SL No Slot -->
                            <template v-slot:item.sn="{ index }">
                                {{ index + 1 }}
                            </template>
                            <!-- SL No Slot -->
                            <!-- image slot -->
                            <template v-slot:item.image="{ item }">
                                <img :src="image_url + item.image" class="table_image">
                            </template>
                            <!-- image slot -->
                            <template v-slot:item.actions="{ item }">
                                <v-icon small class="mr-2" @click="editItem(item.id)">
                                    mdi-pencil
                                </v-icon>
                            </template>
                        </v-data-table>
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
                    text: 'Service',
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
