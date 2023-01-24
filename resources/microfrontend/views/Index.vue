<template lang="">
    <div>
        <main>
            <!-- BANNER PART START -->
            <section class="banner-part">
                <!-- slider -->

                <swiper
                    :slides-per-view="1"
                    :space-between="30"
                    :loop="true"
                    :autoplay="{
                        delay: 1000,
                    }"
                    >
                    <swiper-slide
                        v-for="(item) in sliderList"
                        :key="item.id"
                        class="test"
                        :class="{test_2: true}"
                    >
                        <div class="banner-slide">
                            <!-- slider item -->
                            <div class="banner-img" :style='{backgroundImage: "url(" + static_image_url + `photos/slider-one.jpg` +")" }'>
                                <div class="slider-overlay">
                                    <div class="container">
                                        <div class="row slider-content">
                                            <div class="col-lg-6 col-md-12 col-sm-12">
                                                
                                            </div>
                                            <div class="col-lg-6 col-md-12 col-sm-12 text-start">
                                                <h1>{{ item.name }}</h1>
                                                <h6 class="pe-lg-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                                                dummy text ever since the 1500s, when an unknown printer</h6>
                                                <div class="slider-service-content mt-4">
                                                    <div class="row">
                                                        <div class="col-lg-6 col-md-6 col-sm-12">
                                                            <div class="item d-flex">
                                                                <a href="javascript:void(0)" class="hover-round">
                                                                    <span></span>
                                                                    <i class="fa-brands fa-apple"></i>
                                                                </a>
                                                                <div class="text">
                                                                    <h5>HEALTHY ADVICES</h5>
                                                                    <p class="sm-text">Praesent convallis tortor et enim laoreet.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6 col-md-6 col-sm-12">
                                                            <div class="item d-flex">
                                                                <a href="javascript:void(0)" class="hover-round">
                                                                    <span></span>
                                                                    <i class="fa-solid fa-phone"></i>
                                                                </a>
                                                                <div class="text">
                                                                    <h5>ALWAYS AVAILABLE</h5>
                                                                    <p class="sm-text">Praesent convallis tortor et enim laoreet.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </section>
            <!-- BANNER PART START -->

            <!-- SERVICE OPTION SECTION START -->
            <section class="service-section pb-5">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="card-item" style="background: #12c5c3;">
                                <h5>Our Doctor</h5>
                                <p class="sm-text py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis semper felis.</p> 
                                <div class="custom-btn">
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6" style="margin-left: -30px;">
                            <div class="card-item" style="background: #0cb8b6;">
                                <h5>Shop Page</h5>
                                <p class="sm-text py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis semper felis.</p> 
                                <div class="custom-btn">
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6" style="margin-left: -30px;">
                            <div class="card-item" style="background: #09aba9;">
                                <h5>Our Book</h5>
                                <p class="sm-text py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis semper felis.</p> 
                                <div class="custom-btn">
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6" style="margin-left: -30px;">
                            <div class="card-item" style="background: #029d9b;">
                                <h5>Our Medicine</h5>
                                <p class="sm-text py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis semper felis.</p> 
                                <div class="custom-btn">
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- SERVICE OPTION SECTION END -->
            <History></History>
            <Team></Team>
            <Doctor></Doctor>
            <Work></Work>
            <Disease></Disease>
        </main>
    </div>
</template>
<script>
import { Navigation, Pagination } from 'swiper'
import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'
import 'swiper/swiper-bundle.css'
SwiperCore.use([Navigation, Pagination])

/* ===================== Component Import ===================== */ 
import History from './component/History.vue'
import Team from './component/Team.vue'
import Doctor from './component/Doctor.vue'
import Work from "./component/Work.vue"
import Disease from "./component/Disease.vue"
/* ===================== Component Import ===================== */ 

export default {
    /* ======================= Data ======================= */
    data() {
        return {
            sliderList: [
                { 'id': 1, name: 'This Is It1' },
                { 'id': 2, name: 'This Is It2' },
                { 'id': 3, name: 'This Is It3' },
                { 'id': 4, name: 'This Is It4' },
                { 'id': 5, name: 'This Is It5' },
            ],

            static_image_url: this.$store.state.static_image_link
        }
    },

    components: {
        Swiper,
        SwiperSlide,
        History,
        Team,
        Doctor,
        Work,
        Disease,
    },
};
</script>
<style lang=""></style>
