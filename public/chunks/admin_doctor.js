"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["admin_doctor"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/microadmin/components/admin/doctor/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/microadmin/components/admin/doctor/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.es.js");
/* harmony import */ var vform_src_components_bootstrap5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vform/src/components/bootstrap5 */ "./node_modules/vform/src/components/bootstrap5/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



Vue.component(vform_src_components_bootstrap5__WEBPACK_IMPORTED_MODULE_1__.HasError.name, vform_src_components_bootstrap5__WEBPACK_IMPORTED_MODULE_1__.HasError);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  /* ============================= Data ============================= */data: function data() {
    return {
      image_url: this.$store.state.image_base_link,
      form: new vform__WEBPACK_IMPORTED_MODULE_0__["default"]({
        name: '',
        description: '',
        imageUrl: '',
        imageFile: null,
        imageName: ''
      }),
      serviceId: '',
      imagePreview: "",
      loading: false,
      search: '',
      dialog: false,
      editDialog: false,
      loadingstatus: true,
      headers: [{
        text: 'SL No',
        value: 'sn'
      }, {
        text: 'Image',
        value: 'image'
      }, {
        text: 'Service Name',
        align: 'start',
        sortable: false,
        value: 'name'
      }, {
        text: 'Description',
        value: 'description',
        width: "40%"
      }, {
        text: 'Actions',
        value: 'actions',
        sortable: false
      }],
      desserts: [],
      editedIndex: -1,
      /* Breadcrumb */
      breadcrumb_link: [{
        text: 'Dashboard',
        disabled: false,
        href: '/admin/dashboard'
      }, {
        text: 'Doctor',
        disabled: true,
        href: '#'
      }]
      /* Breadcrumb */
    };
  },

  /* ============================= Methods ============================= */
  methods: {
    serviceList: function serviceList() {
      var _this = this;
      axios.get('/api/admin/service/list').then(function (resp) {
        if (resp.data.status == true) {
          _this.desserts = resp.data.service_list;
          _this.loadingstatus = false;
        }
      })["catch"](function (error) {
        console.log(error);
        _this.$toasted.show(error, {
          type: "error",
          position: 'top-center',
          duration: 4000
        });
      });
    },
    add: function add() {
      var _this2 = this;
      var url = "";
      if (this.serviceId) {
        url = '/api/admin/service/update/' + this.serviceId;
      } else {
        url = '/api/admin/service/create';
      }
      this.form.post(url).then(function (resp) {
        console.log(resp);
        if (resp.data.status == true) {
          _this2.$toasted.show(resp.data.message, {
            type: 'success',
            position: 'top-center',
            duration: 4000
          });
          _this2.close();
          _this2.serviceList();
        }
      })["catch"](function (error) {
        console.log(error);
        _this2.error = error;
      });
    },
    /* Edit Data */editItem: function editItem(id) {
      var _this3 = this;
      axios.get('/api/admin/service/edit/' + id).then(function (resp) {
        if (resp.data.status == true) {
          var data = resp.data.service;
          _this3.serviceId = data.id;
          _this3.form.name = data.name;
          _this3.form.description = data.description;
          _this3.form.imageUrl = _this3.image_url + data.image;
          _this3.editedIndex = data.id;
          _this3.dialog = true;
        }
      })["catch"](function (error) {
        console.log(error);
        _this3.$toasted.show(error, {
          type: "error",
          position: 'top-center',
          duration: 4000
        });
      });
    },
    /* Image Upload */pickFile: function pickFile() {
      this.$refs.image.click();
    },
    onFilePicked: function onFilePicked(e) {
      var _this4 = this;
      var files = e.target.files;
      if (files[0] !== undefined) {
        this.form.imageName = files[0].name;
        if (this.form.imageName.lastIndexOf('.') <= 0) {
          return;
        }
        var fr = new FileReader();
        fr.readAsDataURL(files[0]);
        fr.addEventListener('load', function () {
          _this4.form.imageUrl = fr.result;
          _this4.form.imageFile = files[0];
        });
      } else {
        this.form.imageName = '';
        this.form.imageFile = '';
        this.form.imageUrl = '';
      }
    },
    /* Image Upload */close: function close() {
      var _this5 = this;
      this.dialog = false;
      this.$nextTick(function () {
        _this5.editedItem = Object.assign({}, _this5.defaultItem);
        _this5.editedIndex = -1;
      });
    }
  },
  computed: {
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? 'Add Service' : 'Edit Service';
    }
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    }
  },
  created: function created() {
    this.serviceList();
  }
});

/***/ }),

/***/ "./node_modules/vform/dist/vform.es.js":
/*!*********************************************!*\
  !*** ./node_modules/vform/dist/vform.es.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Errors": () => (/* binding */ y),
/* harmony export */   "Form": () => (/* binding */ g),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,s=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,o=(t,s,r)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[s]=r,i=(e,i)=>{for(var a in i||(i={}))t.call(i,a)&&o(e,a,i[a]);if(s)for(var a of s(i))r.call(i,a)&&o(e,a,i[a]);return e};const n=e=>void 0===e,c=e=>Array.isArray(e),l=e=>e&&"number"==typeof e.size&&"string"==typeof e.type&&"function"==typeof e.slice,u=(e,t,s,r)=>((t=t||{}).indices=!n(t.indices)&&t.indices,t.nullsAsUndefineds=!n(t.nullsAsUndefineds)&&t.nullsAsUndefineds,t.booleansAsIntegers=!n(t.booleansAsIntegers)&&t.booleansAsIntegers,t.allowEmptyArrays=!n(t.allowEmptyArrays)&&t.allowEmptyArrays,s=s||new FormData,n(e)||(null===e?t.nullsAsUndefineds||s.append(r,""):(e=>"boolean"==typeof e)(e)?t.booleansAsIntegers?s.append(r,e?1:0):s.append(r,e):c(e)?e.length?e.forEach(((e,o)=>{const i=r+"["+(t.indices?o:"")+"]";u(e,t,s,i)})):t.allowEmptyArrays&&s.append(r+"[]",""):(e=>e instanceof Date)(e)?s.append(r,e.toISOString()):!(e=>e===Object(e))(e)||(e=>l(e)&&"string"==typeof e.name&&("object"==typeof e.lastModifiedDate||"number"==typeof e.lastModified))(e)||l(e)?s.append(r,e):Object.keys(e).forEach((o=>{const i=e[o];if(c(i))for(;o.length>2&&o.lastIndexOf("[]")===o.length-2;)o=o.substring(0,o.length-2);u(i,t,s,r?r+"["+o+"]":o)}))),s);var h={serialize:u};function d(e){if(null===e||"object"!=typeof e)return e;const t=Array.isArray(e)?[]:{};return Object.keys(e).forEach((s=>{t[s]=d(e[s])})),t}function f(e){return Array.isArray(e)?e:[e]}function p(e){return e instanceof File||e instanceof Blob||e instanceof FileList||"object"==typeof e&&null!==e&&void 0!==Object.values(e).find((e=>p(e)))}class y{constructor(){this.errors={},this.errors={}}set(e,t){"object"==typeof e?this.errors=e:this.set(i(i({},this.errors),{[e]:f(t)}))}all(){return this.errors}has(e){return Object.prototype.hasOwnProperty.call(this.errors,e)}hasAny(...e){return e.some((e=>this.has(e)))}any(){return Object.keys(this.errors).length>0}get(e){if(this.has(e))return this.getAll(e)[0]}getAll(e){return f(this.errors[e]||[])}only(...e){const t=[];return e.forEach((e=>{const s=this.get(e);s&&t.push(s)})),t}flatten(){return Object.values(this.errors).reduce(((e,t)=>e.concat(t)),[])}clear(e){const t={};e&&Object.keys(this.errors).forEach((s=>{s!==e&&(t[s]=this.errors[s])})),this.set(t)}}class g{constructor(e={}){this.originalData={},this.busy=!1,this.successful=!1,this.recentlySuccessful=!1,this.recentlySuccessfulTimeoutId=void 0,this.errors=new y,this.progress=void 0,this.update(e)}static make(e){return new this(e)}update(e){this.originalData=Object.assign({},this.originalData,d(e)),Object.assign(this,e)}fill(e={}){this.keys().forEach((t=>{this[t]=e[t]}))}data(){return this.keys().reduce(((e,t)=>i(i({},e),{[t]:this[t]})),{})}keys(){return Object.keys(this).filter((e=>!g.ignore.includes(e)))}startProcessing(){this.errors.clear(),this.busy=!0,this.successful=!1,this.progress=void 0,this.recentlySuccessful=!1,clearTimeout(this.recentlySuccessfulTimeoutId)}finishProcessing(){this.busy=!1,this.successful=!0,this.progress=void 0,this.recentlySuccessful=!0,this.recentlySuccessfulTimeoutId=setTimeout((()=>{this.recentlySuccessful=!1}),g.recentlySuccessfulTimeout)}clear(){this.errors.clear(),this.successful=!1,this.recentlySuccessful=!1,this.progress=void 0,clearTimeout(this.recentlySuccessfulTimeoutId)}reset(){Object.keys(this).filter((e=>!g.ignore.includes(e))).forEach((e=>{this[e]=d(this.originalData[e])}))}get(e,t={}){return this.submit("get",e,t)}post(e,t={}){return this.submit("post",e,t)}patch(e,t={}){return this.submit("patch",e,t)}put(e,t={}){return this.submit("put",e,t)}delete(e,t={}){return this.submit("delete",e,t)}submit(e,t,s={}){return this.startProcessing(),s=i({data:{},params:{},url:this.route(t),method:e,onUploadProgress:this.handleUploadProgress.bind(this)},s),"get"===e.toLowerCase()?s.params=i(i({},this.data()),s.params):(s.data=i(i({},this.data()),s.data),p(s.data)&&!s.transformRequest&&(s.transformRequest=[e=>h.serialize(e)])),new Promise(((e,t)=>{(g.axios||(axios__WEBPACK_IMPORTED_MODULE_0___default())).request(s).then((t=>{this.finishProcessing(),e(t)})).catch((e=>{this.handleErrors(e),t(e)}))}))}handleErrors(e){this.busy=!1,this.progress=void 0,e.response&&this.errors.set(this.extractErrors(e.response))}extractErrors(e){return e.data&&"object"==typeof e.data?e.data.errors?i({},e.data.errors):e.data.message?{error:e.data.message}:i({},e.data):{error:g.errorMessage}}handleUploadProgress(e){this.progress={total:e.total,loaded:e.loaded,percentage:Math.round(100*e.loaded/e.total)}}route(e,t={}){let s=e;return Object.prototype.hasOwnProperty.call(g.routes,e)&&(s=decodeURI(g.routes[e])),"object"!=typeof t&&(t={id:t}),Object.keys(t).forEach((e=>{s=s.replace(`{${e}}`,t[e])})),s}onKeydown(e){const t=e.target;t.name&&this.errors.clear(t.name)}}g.routes={},g.errorMessage="Something went wrong. Please try again.",g.recentlySuccessfulTimeout=2e3,g.ignore=["busy","successful","errors","progress","originalData","recentlySuccessful","recentlySuccessfulTimeoutId"];/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (g);


/***/ }),

/***/ "./node_modules/vform/src/components/Alert.js":
/*!****************************************************!*\
  !*** ./node_modules/vform/src/components/Alert.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    form: {
      type: Object,
      required: true
    },

    dismissible: {
      type: Boolean,
      default: true
    }
  },

  methods: {
    dismiss () {
      if (this.dismissible) {
        this.form.clear()
      }
    }
  }
});


/***/ }),

/***/ "./node_modules/vform/src/components/AlertError.js":
/*!*********************************************************!*\
  !*** ./node_modules/vform/src/components/AlertError.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Alert */ "./node_modules/vform/src/components/Alert.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  extends: _Alert__WEBPACK_IMPORTED_MODULE_0__["default"],

  props: {
    message: {
      type: String,
      default: 'There were some problems with your input.'
    }
  }
});


/***/ }),

/***/ "./node_modules/vform/src/components/AlertErrors.js":
/*!**********************************************************!*\
  !*** ./node_modules/vform/src/components/AlertErrors.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Alert */ "./node_modules/vform/src/components/Alert.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  extends: _Alert__WEBPACK_IMPORTED_MODULE_0__["default"],

  props: {
    message: {
      type: String,
      default: 'There were some problems with your input.'
    }
  }
});


/***/ }),

/***/ "./node_modules/vform/src/components/AlertSuccess.js":
/*!***********************************************************!*\
  !*** ./node_modules/vform/src/components/AlertSuccess.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Alert */ "./node_modules/vform/src/components/Alert.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  extends: _Alert__WEBPACK_IMPORTED_MODULE_0__["default"],

  props: {
    message: { type: String, default: '' }
  }
});


/***/ }),

/***/ "./node_modules/vform/src/components/HasError.js":
/*!*******************************************************!*\
  !*** ./node_modules/vform/src/components/HasError.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    form: {
      type: Object,
      required: true
    },

    field: {
      type: String,
      required: true
    }
  }
});


/***/ }),

/***/ "./node_modules/vform/src/components/bootstrap5/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/vform/src/components/bootstrap5/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertError": () => (/* reexport safe */ _AlertError_vue__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "AlertErrors": () => (/* reexport safe */ _AlertErrors_vue__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "AlertSuccess": () => (/* reexport safe */ _AlertSuccess_vue__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "Button": () => (/* reexport safe */ _Button_vue__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "HasError": () => (/* reexport safe */ _HasError_vue__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _Button_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button.vue */ "./node_modules/vform/src/components/bootstrap5/Button.vue");
/* harmony import */ var _HasError_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HasError.vue */ "./node_modules/vform/src/components/bootstrap5/HasError.vue");
/* harmony import */ var _AlertError_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AlertError.vue */ "./node_modules/vform/src/components/bootstrap5/AlertError.vue");
/* harmony import */ var _AlertErrors_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AlertErrors.vue */ "./node_modules/vform/src/components/bootstrap5/AlertErrors.vue");
/* harmony import */ var _AlertSuccess_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AlertSuccess.vue */ "./node_modules/vform/src/components/bootstrap5/AlertSuccess.vue");









/***/ }),

/***/ "./node_modules/vform/src/components/bootstrap5/AlertError.vue":
/*!*********************************************************************!*\
  !*** ./node_modules/vform/src/components/bootstrap5/AlertError.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AlertError_vue_vue_type_template_id_7b96bec2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlertError.vue?vue&type=template&id=7b96bec2& */ "./node_modules/vform/src/components/bootstrap5/AlertError.vue?vue&type=template&id=7b96bec2&");
/* harmony import */ var _AlertError_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AlertError.vue?vue&type=script&lang=js& */ "./node_modules/vform/src/components/bootstrap5/AlertError.vue?vue&type=script&lang=js&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AlertError_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AlertError_vue_vue_type_template_id_7b96bec2___WEBPACK_IMPORTED_MODULE_0__.render,
  _AlertError_vue_vue_type_template_id_7b96bec2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vform/src/components/bootstrap5/AlertError.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vform/src/components/bootstrap5/AlertError.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vform/src/components/bootstrap5/AlertError.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AlertError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../AlertError */ "./node_modules/vform/src/components/AlertError.js");
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'AlertError',

  extends: _AlertError__WEBPACK_IMPORTED_MODULE_0__["default"]
});


/***/ }),

/***/ "./node_modules/vform/src/components/bootstrap5/AlertErrors.vue":
/*!**********************************************************************!*\
  !*** ./node_modules/vform/src/components/bootstrap5/AlertErrors.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AlertErrors_vue_vue_type_template_id_0a268abe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlertErrors.vue?vue&type=template&id=0a268abe& */ "./node_modules/vform/src/components/bootstrap5/AlertErrors.vue?vue&type=template&id=0a268abe&");
/* harmony import */ var _AlertErrors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AlertErrors.vue?vue&type=script&lang=js& */ "./node_modules/vform/src/components/bootstrap5/AlertErrors.vue?vue&type=script&lang=js&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AlertErrors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AlertErrors_vue_vue_type_template_id_0a268abe___WEBPACK_IMPORTED_MODULE_0__.render,
  _AlertErrors_vue_vue_type_template_id_0a268abe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vform/src/components/bootstrap5/AlertErrors.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vform/src/components/bootstrap5/AlertErrors.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vform/src/components/bootstrap5/AlertErrors.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AlertErrors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../AlertErrors */ "./node_modules/vform/src/components/AlertErrors.js");
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'AlertErrors',

  extends: _AlertErrors__WEBPACK_IMPORTED_MODULE_0__["default"]
});


/***/ }),

/***/ "./node_modules/vform/src/components/bootstrap5/AlertSuccess.vue":
/*!***********************************************************************!*\
  !*** ./node_modules/vform/src/components/bootstrap5/AlertSuccess.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AlertSuccess_vue_vue_type_template_id_2972b6bd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlertSuccess.vue?vue&type=template&id=2972b6bd& */ "./node_modules/vform/src/components/bootstrap5/AlertSuccess.vue?vue&type=template&id=2972b6bd&");
/* harmony import */ var _AlertSuccess_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AlertSuccess.vue?vue&type=script&lang=js& */ "./node_modules/vform/src/components/bootstrap5/AlertSuccess.vue?vue&type=script&lang=js&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AlertSuccess_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AlertSuccess_vue_vue_type_template_id_2972b6bd___WEBPACK_IMPORTED_MODULE_0__.render,
  _AlertSuccess_vue_vue_type_template_id_2972b6bd___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vform/src/components/bootstrap5/AlertSuccess.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vform/src/components/bootstrap5/AlertSuccess.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vform/src/components/bootstrap5/AlertSuccess.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AlertSuccess__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../AlertSuccess */ "./node_modules/vform/src/components/AlertSuccess.js");
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'AlertSuccess',

  extends: _AlertSuccess__WEBPACK_IMPORTED_MODULE_0__["default"]
});


/***/ }),

/***/ "./node_modules/vform/src/components/bootstrap5/Button.vue":
/*!*****************************************************************!*\
  !*** ./node_modules/vform/src/components/bootstrap5/Button.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Button_vue_vue_type_template_id_573acfe8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button.vue?vue&type=template&id=573acfe8& */ "./node_modules/vform/src/components/bootstrap5/Button.vue?vue&type=template&id=573acfe8&");
/* harmony import */ var _Button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.vue?vue&type=script&lang=js& */ "./node_modules/vform/src/components/bootstrap5/Button.vue?vue&type=script&lang=js&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Button_vue_vue_type_template_id_573acfe8___WEBPACK_IMPORTED_MODULE_0__.render,
  _Button_vue_vue_type_template_id_573acfe8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vform/src/components/bootstrap5/Button.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vform/src/components/bootstrap5/Button.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vform/src/components/bootstrap5/Button.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Button',

  props: {
    form: {
      type: Object,
      required: true
    },

    spinner: {
      type: Boolean,
      default: true
    }
  }
});


/***/ }),

/***/ "./node_modules/vform/src/components/bootstrap5/HasError.vue":
/*!*******************************************************************!*\
  !*** ./node_modules/vform/src/components/bootstrap5/HasError.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HasError_vue_vue_type_template_id_4d07aac4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HasError.vue?vue&type=template&id=4d07aac4& */ "./node_modules/vform/src/components/bootstrap5/HasError.vue?vue&type=template&id=4d07aac4&");
/* harmony import */ var _HasError_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HasError.vue?vue&type=script&lang=js& */ "./node_modules/vform/src/components/bootstrap5/HasError.vue?vue&type=script&lang=js&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HasError_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HasError_vue_vue_type_template_id_4d07aac4___WEBPACK_IMPORTED_MODULE_0__.render,
  _HasError_vue_vue_type_template_id_4d07aac4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vform/src/components/bootstrap5/HasError.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vform/src/components/bootstrap5/HasError.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vform/src/components/bootstrap5/HasError.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HasError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../HasError */ "./node_modules/vform/src/components/HasError.js");
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'HasError',

  extends: _HasError__WEBPACK_IMPORTED_MODULE_0__["default"]
});


/***/ }),

/***/ "./resources/microadmin/components/admin/doctor/Index.vue":
/*!****************************************************************!*\
  !*** ./resources/microadmin/components/admin/doctor/Index.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_310c9f62___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=310c9f62& */ "./resources/microadmin/components/admin/doctor/Index.vue?vue&type=template&id=310c9f62&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/microadmin/components/admin/doctor/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_310c9f62___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_310c9f62___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/microadmin/components/admin/doctor/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/microadmin/components/admin/doctor/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/microadmin/components/admin/doctor/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/microadmin/components/admin/doctor/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vform/src/components/bootstrap5/AlertError.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./node_modules/vform/src/components/bootstrap5/AlertError.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_AlertError_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/lib/index.js??vue-loader-options!./AlertError.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vform/src/components/bootstrap5/AlertError.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_vue_loader_lib_index_js_vue_loader_options_AlertError_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vform/src/components/bootstrap5/AlertError.vue?vue&type=template&id=7b96bec2&":
/*!****************************************************************************************************!*\
  !*** ./node_modules/vform/src/components/bootstrap5/AlertError.vue?vue&type=template&id=7b96bec2& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_AlertError_vue_vue_type_template_id_7b96bec2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_AlertError_vue_vue_type_template_id_7b96bec2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_AlertError_vue_vue_type_template_id_7b96bec2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../vue-loader/lib/index.js??vue-loader-options!./AlertError.vue?vue&type=template&id=7b96bec2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vform/src/components/bootstrap5/AlertError.vue?vue&type=template&id=7b96bec2&");


/***/ }),

/***/ "./node_modules/vform/src/components/bootstrap5/AlertErrors.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./node_modules/vform/src/components/bootstrap5/AlertErrors.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_AlertErrors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/lib/index.js??vue-loader-options!./AlertErrors.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vform/src/components/bootstrap5/AlertErrors.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_vue_loader_lib_index_js_vue_loader_options_AlertErrors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vform/src/components/bootstrap5/AlertErrors.vue?vue&type=template&id=0a268abe&":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/vform/src/components/bootstrap5/AlertErrors.vue?vue&type=template&id=0a268abe& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_AlertErrors_vue_vue_type_template_id_0a268abe___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_AlertErrors_vue_vue_type_template_id_0a268abe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_AlertErrors_vue_vue_type_template_id_0a268abe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../vue-loader/lib/index.js??vue-loader-options!./AlertErrors.vue?vue&type=template&id=0a268abe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vform/src/components/bootstrap5/AlertErrors.vue?vue&type=template&id=0a268abe&");


/***/ }),

/***/ "./node_modules/vform/src/components/bootstrap5/AlertSuccess.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./node_modules/vform/src/components/bootstrap5/AlertSuccess.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_AlertSuccess_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/lib/index.js??vue-loader-options!./AlertSuccess.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vform/src/components/bootstrap5/AlertSuccess.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_vue_loader_lib_index_js_vue_loader_options_AlertSuccess_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vform/src/components/bootstrap5/AlertSuccess.vue?vue&type=template&id=2972b6bd&":
/*!******************************************************************************************************!*\
  !*** ./node_modules/vform/src/components/bootstrap5/AlertSuccess.vue?vue&type=template&id=2972b6bd& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_AlertSuccess_vue_vue_type_template_id_2972b6bd___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_AlertSuccess_vue_vue_type_template_id_2972b6bd___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_AlertSuccess_vue_vue_type_template_id_2972b6bd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../vue-loader/lib/index.js??vue-loader-options!./AlertSuccess.vue?vue&type=template&id=2972b6bd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vform/src/components/bootstrap5/AlertSuccess.vue?vue&type=template&id=2972b6bd&");


/***/ }),

/***/ "./node_modules/vform/src/components/bootstrap5/Button.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./node_modules/vform/src/components/bootstrap5/Button.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/lib/index.js??vue-loader-options!./Button.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vform/src/components/bootstrap5/Button.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vform/src/components/bootstrap5/Button.vue?vue&type=template&id=573acfe8&":
/*!************************************************************************************************!*\
  !*** ./node_modules/vform/src/components/bootstrap5/Button.vue?vue&type=template&id=573acfe8& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_template_id_573acfe8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_template_id_573acfe8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_template_id_573acfe8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../vue-loader/lib/index.js??vue-loader-options!./Button.vue?vue&type=template&id=573acfe8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vform/src/components/bootstrap5/Button.vue?vue&type=template&id=573acfe8&");


/***/ }),

/***/ "./node_modules/vform/src/components/bootstrap5/HasError.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./node_modules/vform/src/components/bootstrap5/HasError.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_HasError_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/lib/index.js??vue-loader-options!./HasError.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vform/src/components/bootstrap5/HasError.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_vue_loader_lib_index_js_vue_loader_options_HasError_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vform/src/components/bootstrap5/HasError.vue?vue&type=template&id=4d07aac4&":
/*!**************************************************************************************************!*\
  !*** ./node_modules/vform/src/components/bootstrap5/HasError.vue?vue&type=template&id=4d07aac4& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_HasError_vue_vue_type_template_id_4d07aac4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_HasError_vue_vue_type_template_id_4d07aac4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_HasError_vue_vue_type_template_id_4d07aac4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../vue-loader/lib/index.js??vue-loader-options!./HasError.vue?vue&type=template&id=4d07aac4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vform/src/components/bootstrap5/HasError.vue?vue&type=template&id=4d07aac4&");


/***/ }),

/***/ "./resources/microadmin/components/admin/doctor/Index.vue?vue&type=template&id=310c9f62&":
/*!***********************************************************************************************!*\
  !*** ./resources/microadmin/components/admin/doctor/Index.vue?vue&type=template&id=310c9f62& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_310c9f62___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_310c9f62___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_310c9f62___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=310c9f62& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/microadmin/components/admin/doctor/Index.vue?vue&type=template&id=310c9f62&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vform/src/components/bootstrap5/AlertError.vue?vue&type=template&id=7b96bec2&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vform/src/components/bootstrap5/AlertError.vue?vue&type=template&id=7b96bec2& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.form.errors.any()
    ? _c(
        "div",
        {
          staticClass: "alert alert-danger alert-dismissible",
          attrs: { role: "alert" },
        },
        [
          _vm.dismissible
            ? _c("button", {
                staticClass: "btn-close",
                attrs: { type: "button", "aria-label": "Dismiss" },
                on: { click: _vm.dismiss },
              })
            : _vm._e(),
          _vm._v(" "),
          _vm._t("default", function () {
            return [
              _vm.form.errors.has("error")
                ? _c("div", {
                    domProps: {
                      innerHTML: _vm._s(_vm.form.errors.get("error")),
                    },
                  })
                : _vm.form.errors.has("message")
                ? _c("div", {
                    domProps: {
                      innerHTML: _vm._s(_vm.form.errors.get("message")),
                    },
                  })
                : _c("div", { domProps: { innerHTML: _vm._s(_vm.message) } }),
            ]
          }),
        ],
        2
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vform/src/components/bootstrap5/AlertErrors.vue?vue&type=template&id=0a268abe&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vform/src/components/bootstrap5/AlertErrors.vue?vue&type=template&id=0a268abe& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.form.errors.any()
    ? _c(
        "div",
        {
          staticClass: "alert alert-danger alert-dismissible",
          attrs: { role: "alert" },
        },
        [
          _vm.dismissible
            ? _c("button", {
                staticClass: "btn-close",
                attrs: { type: "button", "aria-label": "Dismiss" },
                on: { click: _vm.dismiss },
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.message
            ? _c("div", {
                staticClass: "mb-2",
                domProps: { innerHTML: _vm._s(_vm.message) },
              })
            : _vm._e(),
          _vm._v(" "),
          _c(
            "ul",
            { staticClass: "mb-0 ps-4" },
            _vm._l(_vm.form.errors.flatten(), function (error, index) {
              return _c("li", {
                key: index,
                domProps: { innerHTML: _vm._s(error) },
              })
            }),
            0
          ),
        ]
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vform/src/components/bootstrap5/AlertSuccess.vue?vue&type=template&id=2972b6bd&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vform/src/components/bootstrap5/AlertSuccess.vue?vue&type=template&id=2972b6bd& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.form.successful
    ? _c(
        "div",
        {
          staticClass: "alert alert-success alert-dismissible",
          attrs: { role: "alert" },
        },
        [
          _vm.dismissible
            ? _c("button", {
                staticClass: "btn-close",
                attrs: { type: "button", "aria-label": "Dismiss" },
                on: { click: _vm.dismiss },
              })
            : _vm._e(),
          _vm._v(" "),
          _vm._t("default", function () {
            return [_c("div", { domProps: { innerHTML: _vm._s(_vm.message) } })]
          }),
        ],
        2
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vform/src/components/bootstrap5/Button.vue?vue&type=template&id=573acfe8&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vform/src/components/bootstrap5/Button.vue?vue&type=template&id=573acfe8& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      attrs: {
        type: "submit",
        disabled: _vm.form.busy,
        "aria-disabled": _vm.form.busy,
      },
    },
    [
      _vm.form.busy && _vm.spinner
        ? _c("span", {
            staticClass: "spinner-border spinner-border-sm",
            attrs: { role: "status", "aria-hidden": "true" },
          })
        : _vm._e(),
      _vm._v(" "),
      _vm._t("default"),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vform/src/components/bootstrap5/HasError.vue?vue&type=template&id=4d07aac4&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vform/src/components/bootstrap5/HasError.vue?vue&type=template&id=4d07aac4& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.form.errors.has(_vm.field)
    ? _c("div", {
        staticClass: "invalid-feedback d-block",
        domProps: { innerHTML: _vm._s(_vm.form.errors.get(_vm.field)) },
      })
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/microadmin/components/admin/doctor/Index.vue?vue&type=template&id=310c9f62&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/microadmin/components/admin/doctor/Index.vue?vue&type=template&id=310c9f62& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "team" },
    [
      _c("div", { staticClass: "header__title" }, [
        _c(
          "div",
          { staticClass: "add__button_and_title" },
          [
            _c(
              "router-link",
              {
                staticClass: "add_router_link",
                attrs: { to: { name: "admin_doctor_add" } },
              },
              [
                _c("v-icon", [
                  _vm._v("\n                    mdi-plus\n                "),
                ]),
              ],
              1
            ),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          [
            _c("v-breadcrumbs", {
              attrs: { items: _vm.breadcrumb_link },
              scopedSlots: _vm._u([
                {
                  key: "divider",
                  fn: function () {
                    return [_c("v-icon", [_vm._v("mdi-forward")])]
                  },
                  proxy: true,
                },
              ]),
            }),
          ],
          1
        ),
      ]),
      _vm._v(" "),
      _c(
        "v-container",
        { staticClass: "custom__container" },
        [
          _c(
            "v-layout",
            { attrs: { row: "", wrap: "" } },
            [
              _c(
                "v-flex",
                { attrs: { sm12: "", xs12: "", md6: "", lg12: "" } },
                [
                  _c(
                    "div",
                    { staticClass: "simple_table_wrapper" },
                    [
                      _c("h4", { staticClass: "table_title" }, [
                        _c("span", [
                          _c("i", { staticClass: "fa-solid fa-circle-check" }),
                        ]),
                        _vm._v(" Doctor List"),
                      ]),
                      _vm._v(" "),
                      _c("v-simple-table", {
                        attrs: { "fixed-header": "", height: "300px" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function () {
                              return [
                                _c("thead", [
                                  _c("tr", [
                                    _c("th", { staticClass: "text-left" }, [
                                      _vm._v(
                                        "\n                                        Name\n                                    "
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("th", { staticClass: "text-left" }, [
                                      _vm._v(
                                        "\n                                        Calories\n                                    "
                                      ),
                                    ]),
                                  ]),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "tbody",
                                  _vm._l(_vm.desserts, function (item) {
                                    return _c("tr", { key: item.name }, [
                                      _c("td", [_vm._v(_vm._s(item.name))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(item.calories))]),
                                    ])
                                  }),
                                  0
                                ),
                              ]
                            },
                            proxy: true,
                          },
                        ]),
                      }),
                    ],
                    1
                  ),
                ]
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);