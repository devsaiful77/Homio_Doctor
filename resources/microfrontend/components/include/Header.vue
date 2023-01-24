<template lang="">
    <div>
        <!-- HEADER SECTION -->
    <section class="header-top py-2">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 header-top-content d-flex justify-content-end">
                    <div class="email-address mx-2 mx-lg-3">
                        <i class="fa-solid fa-envelope-circle-check"></i>
                        <a href="#">homeodoctor@support.com</a>
                    </div>
                    <div class="contact-phone mx-2 mx-lg-3">
                        <i class="fa-solid fa-square-phone-flip"></i>
                        <a href="#">012345678911</a>
                    </div>
                    <div class="login-part mx-2 mx-lg-3">
                        <i class="fa-solid fa-circle-user"></i>
                        <a href="#">Login/Registration</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <header class="d-flex align-items-center">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-12 col-md-2">
                    <div class="logo d-flex justify-content-between align-items-center">
                        <a href="index.html">
                            <img :src="static_image_url + 'logo/logo.png'" alt="Logo">
                        </a>
                        <i class="fa fa-bars d-md-none" onClick="mobileClick()" aria-hidden="true"></i>
                    </div>
                </div>
                <div class="col-md-10 d-none d-md-block">
                    <div class="menubar">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li class="sub-btn button1">
                                <a href="#">Pages
                                    <i class="fa-solid fa-angle-down"></i>
                                </a>
                                <div class="sub-menu">
                                    <a href="aboutus.html">About Us</a>
                                    <a href="our-doctor.html">Our Doctor</a>
                                    <a href="faq.html">FaQ </a>
                                    <a href="coming-soon.html">Others</a>
                                    <a href="testimonial">Testimonial</a>
                                    <a href="404-not-found.html">Page 404</a>
                                </div>
                            </li>
                            <li class="sub-btn button1">
                                <a href="#">Our Service
                                    <i class="fa-solid fa-angle-down"></i>
                                </a>
                                <div class="sub-menu">
                                    <a href="why-online-treat.html">Why online treat</a>
                                    <a href="how-it-work.html">How it Works</a>
                                    <a href="disease.html">Disease</a>
                                    <a href="404-not-found.html">Page 404</a>
                                </div>
                            </li>
                            <li class="sub-btn button1">
                                <a href="#">Study
                                    <i class="fa-solid fa-angle-down"></i>
                                </a>
                                <div class="sub-menu">
                                    <a href="study.html">Organon Of Medicine</a>
                                    <a href="study.html">Materia Medica</a>
                                    <a href="study.html">Repertory</a>
                                    <a href="study.html">Practice of Medicine</a>
                                    <a href="study.html">Anatomy Physiology</a>
                                    <a href="study.html">Research</a>
                                    <a href="study.html">Download Book</a>
                                </div>
                            </li>
                            <li class="sub-btn button1">
                                <a href="#">Testimonial
                                    <i class="fa-solid fa-angle-down"></i>
                                </a>
                                <div class="sub-menu">
                                    <a href="celebraties-testimonial.html">Celebraties Testimonial</a>
                                    <a href="doctor-testimonial.html">Doctors Testimonial</a>
                                    <a href="patient-testimonial.html">Patients Testimonial</a>
                                    <a href="video-testimonial.html">Video Testimonial</a>
                                    <a href="magazine-testimonial.html">Magazine Testimonial</a>
                                </div>
                            </li>
                            <li><a href="#">Shop</a></li>
                            <li class="sub-btn button1">
                                <a href="Blog/index.html"target="_blank">Blog
                                    <i class="fa-solid fa-angle-down"></i>
                                </a>
                                <div class="sub-menu">
                                    <a href="Blog/up coming event.html"target="_blank">Up Coming Event</a>
                                    <a href="Blog/videos.html"target="_blank">Video</a>
                                    <a href="Blog/photos.html">Photo</a>
                                    <a href="Blog/events.html">Event</a>
                                    <a href="Blog/media.html">Media</a>
                                    <a href="Blog/knowledge.html">Knowledge of Disease</a>
                                    <a href="index.html#latest-blog">Lecture</a>
                                </div>
                            </li>
                            <li><a href="contactus.html">Contact Us</a></li>
                            <li><a href="#" class="login-menu">Quick Appointment</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!--    HEADER SECTION END-->

    <!--        MOBILE MENU-->
    <div id="mobile-menu" class="mobile-menu">
        <!-- accordion-->
        <div class="accordion accordion-flush" id="accordionFlushExample">

            <div class="mobile-logo mb-5">
                <a href="#">
                    <img :src="static_image_url + 'logo/logo.png'" alt="mobile-logo">
                </a>
                <i id="mobile-cross" class="fa fa-times" onClick="mobileClick()"></i>
            </div>

            <div class="accordion-item custom ">
                <h2 class="accordion-header" id="flush-headingThree">
                    <a href="#">
                        <button class="accordion-button custom collapsed none" type="button">
                            Home
                        </button>
                    </a>
                </h2>
            </div>
            <div class="accordion-item custom">
                <h2 class="accordion-header" id="flush-headingThree">
                    <a href="#">
                        <button class="accordion-button custom collapsed none" type="button">
                            Pages
                        </button>
                    </a>
                </h2>
            </div>
            <div class="accordion-item custom">
                <h2 class="accordion-header" id="flush-headingThree">
                    <a href="#">
                        <button class="accordion-button custom collapsed none" type="button">
                            Study 
                        </button>
                    </a>
                </h2>
            </div>
            <div class="accordion-item custom">
                <h2 class="accordion-header" id="flush-headingThree">
                    <a href="#">
                        <button class="accordion-button custom collapsed none" type="button">
                            Shop 
                        </button>
                    </a>
                </h2>
            </div>
            <div class="accordion-item custom">
                <h2 class="accordion-header" id="flush-headingThree">
                    <a href="#">
                        <button class="accordion-button custom collapsed none" type="button">
                            Blog 
                        </button>
                    </a>
                </h2>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                    <button class="accordion-button custom collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#two" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Our Services
                    </button>
                </h2>
                <div id="two" class="accordion-collapse collapse" aria-labelledby="two" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body custom">
                        <ul>
                            <li><a href="#"><i class="fa fa-chevron-right"></i>services</a></li>

                            <li><a href="#"><i class="fa fa-chevron-right"></i>sector</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="accordion-item custom">
                <h2 class="accordion-header" id="flush-headingThree">
                    <a href="#">
                        <button class="accordion-button custom collapsed none" type="button">
                            Contact Us
                        </button>
                    </a>
                </h2>
            </div>
        </div>

    </div>
    <div id="mobileOverlay" class="mobile-overlay" onClick="mobileClick()"></div>
    <!--   END MOBILE MENU-->
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
