<template>
    <div class="team">
        <h1 class="subheading grey--text">Service</h1>
        <v-container>
            <v-layout row wrap>
                <v-flex sm12 xs12 md6 lg12>
                    <v-data-table :headers="headers" :search="search" :items="desserts" sort-by="calories"
                        class="elevation-1" :loading="loadingstatus" loading-text="Loading... Please wait">

                        <template v-slot:top>
                            <v-toolbar flat>
                                <v-dialog v-model="dialog" max-width="600px">
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                                            Add Service
                                        </v-btn>
                                    </template>
                                    <v-card>
                                        <h1 v-if="loading"><v-progress-circular :value="20"></v-progress-circular></h1>
                                        <v-form @submit.prevent="add" v-else @keydown="form.onKeydown($event)"
                                            enctype="multipart/form-data">
                                            <v-card-title>
                                                <span class="text-h5">Add Service</span>
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

                                <v-dialog v-model="dialogDelete" max-width="500px">
                                    <v-card>
                                        <v-card-title class="text-h5">Are you sure you want to delete this
                                            item?</v-card-title>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                                            <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                                            <v-spacer></v-spacer>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>


                            </v-toolbar>
                        </template>


                        <template v-slot:item.actions="{ item }">
                            <v-icon small class="mr-2" @click="editItem(item)">
                                mdi-pencil
                            </v-icon>
                        </template>
                        <template v-slot:no-data>
                            <v-btn color="primary" @click="initialize">
                                Reset
                            </v-btn>
                        </template>
                    </v-data-table>
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
            form: new Form({
                name: '',
                description: '',
                imageUrl: '',
                imageFile: null,
                imageName: '',
            }),
            imagePreview: "",
            loading: false,
            search: '',
            dialog: false,
            editDialog: false,
            dialogDelete: false,
            loadingstatus: true,
            headers: [
                { text: 'SL No', value: 'id' },
                {
                    text: 'Dessert (100g serving)',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                },
                { text: 'Calories', value: 'calories' },
                { text: 'Fat (g)', value: 'fat' },
                { text: 'Carbs (g)', value: 'carbs' },
                { text: 'Protein (g)', value: 'protein' },
                { text: 'Actions', value: 'actions', sortable: false },
            ],
            desserts: [],
            editedIndex: -1,
            editedItem: {
                name: '',
                calories: 0,
                fat: 0,
                carbs: 0,
                protein: 0,
            },
            defaultItem: {
                name: '',
                calories: 0,
                fat: 0,
                carbs: 0,
                protein: 0,
            },
        }
    },
    /* ============================= Methods ============================= */
    methods: {
        slider() {
            axios.get('/api/admin/service/list')
                .then((resp) => {
                    if (resp.data.status == true) {
                        this.desserts = resp.data.service_list;
                        this.this.loadingstatus = false;
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
            this.form
                .post('/api/admin/service/create')
                .then(resp => {
                    console.log(resp);
                    if (resp.data.status == true) {
                        this.$toasted.show(resp.data.message, {
                            type: 'success',
                            position: 'top-center',
                            duration: 4000,
                        });
                        this.close();
                    }
                })
                .catch(error => {
                    console.log(error);
                    this.error = error;
                });
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


        initialize() {
            this.desserts = [
                {
                    id: 1,
                    name: 'Frozen Yogurt',
                    calories: 159,
                    fat: 6.0,
                    carbs: 24,
                    protein: 4.0,
                },
            ]
        },

        editItem(item) {
            this.editedIndex = this.desserts.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.editDialog = true
        },



        deleteItemConfirm() {
            this.desserts.splice(this.editedIndex, 1)
            this.closeDelete()
        },

        close() {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        closeDelete() {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        save() {
            if (this.editedIndex > -1) {
                Object.assign(this.desserts[this.editedIndex], this.editedItem)
            } else {
                this.desserts.push(this.editedItem)
            }
            this.close()
        },
    },


    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
        },
    },

    watch: {
        dialog(val) {
            val || this.close()
        },
        dialogDelete(val) {
            val || this.closeDelete()
        },
    },

    created() {
        this.initialize()
    },


}
</script>
