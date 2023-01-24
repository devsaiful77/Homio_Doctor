<template>
    <div class="team">
        <div class="header__title">
            <div class="add__button_and_title">
                <router-link :to="{ name: 'admin_doctor' }" class="add_router_link"><v-icon class="router_icon">
                        mdi-format-list-bulleted-square
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
                        <h4 class="table_title"><span><i class="fa-solid fa-circle-check"></i></span> Doctor Create</h4>
                        <h4 v-if="loading"><v-progress-circular :value="20"></v-progress-circular>
                        </h4>
                        <v-form @submit.prevent="storeUpdate" v-else @keydown="form.onKeydown($event)"
                            enctype="multipart/form-data">
                            <div class="form__wrapper">
                                <!-- form content -->
                                <div class="input__title">
                                    <h4>Basic Information</h4>
                                </div>
                                <v-layout row wrap mb-4>
                                    <v-flex sm12 md4>
                                        <v-text-field label="Doctor Name" outlined dense
                                            v-model="form.name"></v-text-field>
                                        <has-error :form="form" field="name"></has-error>
                                    </v-flex>

                                    <v-flex sm12 md4>
                                        <v-text-field label="Phone Number" outlined dense
                                            v-model="form.phone"></v-text-field>
                                        <has-error :form="form" field="phone"></has-error>
                                    </v-flex>
                                    <v-flex sm12 md4>
                                        <v-text-field label="Email(Optional)" outlined dense
                                            v-model="form.email"></v-text-field>
                                        <has-error :form="form" field="email"></has-error>
                                    </v-flex>
                                </v-layout>
                                <!-- row -->
                                <v-layout row wrap mb-6>
                                    <v-flex sm12 md6>
                                        <v-autocomplete :items="categoryList" dense outlined label="Doctor Category"
                                            v-model="form.doc_category_id"></v-autocomplete>
                                        <has-error :form="form" field="doc_category_id"></has-error>
                                    </v-flex>
                                    <v-flex sm12 md6>
                                        <v-autocomplete :items="doctorType" dense outlined label="Doctor Type"
                                            v-model="form.doctor_type"></v-autocomplete>
                                        <has-error :form="form" field="doctor_type"></has-error>
                                    </v-flex>
                                </v-layout>

                                <!-- Address -->
                                <div class="input__title">
                                    <h4>Address</h4>
                                </div>
                                <v-layout row wrap mb-6>
                                    <v-flex sm12 md4>
                                        <v-autocomplete :items="divisionList" dense outlined label="Select Division"
                                            v-model="form.division" :loading="isLoading" item-text="name"
                                            item-value="id" item-key="id" hide-details color @change="getDistrict()"></v-autocomplete>
                                        <has-error :form="form" field="division"></has-error>
                                    </v-flex>
                                    <v-flex sm12 md4>
                                        <v-autocomplete :items="districtList" dense outlined label="Select District"
                                            v-model="form.district" :loading="isLoading" item-text="name"
                                            item-value="id" item-key="id" hide-details color></v-autocomplete>
                                        <has-error :form="form" field="district"></has-error>
                                    </v-flex>
                                    <v-flex sm12 md4>
                                        <v-autocomplete :items="thanaList" dense outlined label="Select Thana"
                                            v-model="form.thana"></v-autocomplete>
                                        <has-error :form="form" field="thana"></has-error>
                                    </v-flex>
                                </v-layout>

                                <v-layout row wrap mb-6>
                                    <v-flex sm12 md6>
                                        <v-autocomplete :items="unionList" dense outlined label="Select Union"
                                            v-model="form.union"></v-autocomplete>
                                        <has-error :form="form" field="union"></has-error>
                                    </v-flex>
                                    <v-flex sm12 md6>
                                        <v-text-field dense outlined label="Address" v-model="form.address">
                                        </v-text-field>
                                        <has-error :form="form" field="address"></has-error>
                                    </v-flex>
                                </v-layout>

                                <!-- Fee -->
                                <div class="input__title">
                                    <h4>Patient Fee</h4>
                                </div>
                                <v-layout row wrap mb-6>
                                    <v-flex sm12 md6>
                                        <v-text-field label="New Patient Fee" dense outlined
                                            v-model="form.new_patient_fee"></v-text-field>
                                        <has-error :form="form" field="new_patient_fee"></has-error>
                                    </v-flex>
                                    <v-flex sm12 md6>
                                        <v-text-field label="Old Patient Fee" dense outlined
                                            v-model="form.old_patient_fee"></v-text-field>
                                        <has-error :form="form" field="old_patient_fee"></has-error>
                                    </v-flex>
                                </v-layout>



                                <!-- Description -->
                                <v-layout row wrap mb-6>
                                    <v-flex sm12 md6>
                                        <div class="editor_input">
                                            <label for="">Specialist</label>
                                            <ckeditor :editor="editor"
                                                :class="{ 'is-invalid': form.errors.has('specialist') }"
                                                v-model="form.specialist" :config="editorConfig"></ckeditor>
                                            <has-error :form="form" field="specialist"></has-error>
                                        </div>
                                    </v-flex>

                                    <v-flex sm12 md6>
                                        <div class="editor_input">
                                            <label for="">Education</label>
                                            <ckeditor :editor="editor"
                                                :class="{ 'is-invalid': form.errors.has('education') }"
                                                v-model="form.education" :config="editorConfig"></ckeditor>
                                            <has-error :form="form" field="education"></has-error>
                                        </div>
                                    </v-flex>
                                </v-layout>


                                <v-layout row wrap mb-6>
                                    <v-flex sm12 md6>
                                        <div class="editor_input">
                                            <label for="">Treatment</label>
                                            <ckeditor :editor="editor"
                                                :class="{ 'is-invalid': form.errors.has('treatment') }"
                                                v-model="form.treatment" :config="editorConfig"></ckeditor>
                                            <has-error :form="form" field="treatment"></has-error>
                                        </div>
                                    </v-flex>

                                    <v-flex sm12 md6>
                                        <div class="editor_input">
                                            <label for="">Chamber Address</label>
                                            <ckeditor :editor="editor"
                                                :class="{ 'is-invalid': form.errors.has('chamber_address') }"
                                                v-model="form.chamber_address" :config="editorConfig"></ckeditor>
                                            <has-error :form="form" field="chamber_address"></has-error>
                                        </div>
                                    </v-flex>
                                </v-layout>

                                <v-layout row wrap mb-6>
                                    <v-flex sm12 xs6 md6
                                        class="text-xs-center text-sm-center text-md-center text-lg-center">
                                        <v-text-field label="Select Image" @click='pickFile' v-model='form.imageName'
                                            prepend-icon="mdi-file-image"></v-text-field>
                                        <input type="file" style="display: none" ref="image"
                                            accept="image/jpeg, image/jpg, image/png" @change="onFilePicked">
                                    </v-flex>
                                    <v-flex md6 sm12 xs6>
                                        <img :src="form.imageUrl" height="150" v-if="form.imageUrl"
                                            style="margin-left:20px" />
                                    </v-flex>
                                </v-layout>

                                <v-layout row wrap mb-6>
                                    <v-flex sm12 xs12 md12
                                        class="text-xs-center text-sm-center text-md-center text-lg-center">
                                        <v-btn depressed color="primary">
                                            Save
                                        </v-btn>
                                    </v-flex>
                                </v-layout>
                                <!-- form content -->
                            </div>
                        </v-form>
                    </div>

                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import Form from "vform";
import { HasError } from "vform/src/components/bootstrap5";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
Vue.component(HasError.name, HasError);

export default {
    /* ============================= Data ============================= */
    data() {
        return {
            image_url: this.$store.state.image_base_link,
            form: new Form({
                doc_category_id: '',
                doctor_type: '',
                name: '',
                phone: '',
                email: '',
                division: '',
                district: '',
                thana: '',
                union: '',
                address: '',
                education: '',
                specialist: '',
                treatment: '',
                chamber_address: '',
                new_patient_fee: '',
                old_patient_fee: '',
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
            categoryList: [],
            doctorType: [
                { id: 'Offline', text: 'Offline' },
                { id: 'Online', text: 'Online' },
            ],
            divisionList: [],
            districtList: [],
            thanaList: [],
            unionList: [],
            isLoading: true,

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
                    disabled: false,
                    href: '/admin/doctor'
                },
                {
                    text: 'Create',
                    disabled: true,
                    href: '#',
                },
            ],
            /* Editor */
            editor: ClassicEditor,
            editorConfig: {},
            /* Editor */
        }
    },
    /* ============================= Methods ============================= */
    methods: {
        getDivisionList() {
            axios.get('/api/division/list')
                .then((resp) => {
                    if (resp.data.status == true) {
                        this.divisionList = resp.data.division;
                        this.isLoading = false;
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

        getDistrict() {
            axios.get('/api/district/list/'+ this.form.division)
                .then((resp) => {
                    if (resp.data.status == true) {
                        this.districtList = resp.data.district;
                        this.isLoading = false;
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
        this.getDivisionList()
    },







}
</script>
