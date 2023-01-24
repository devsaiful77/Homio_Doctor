<template lang="">
    <div>
        <!--    FOOTER SECTION-->
    <footer class="pt-5">
        <div class="container">
            <div class="row pb-3">
                <div class="col-12 col-md-12 col-lg-4 mb-4 mb-md-0">
                    <div class="footer-box">
                        <img :src="static_image_url + 'logo/logo.png'" alt="Logo">
                        <p class="sm-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                        </p>
                        <div class="social-media-footer">
                            <h4>Social Media</h4>
                            <div>
                                <a href="#">
                                    <i class="fa fa-facebook"></i>
                                </a>
                                <a href="#">
                                    <i class="fa fa-twitter"></i>
                                </a>
                                <a href="#">
                                    <i class="fa fa-linkedin"></i>
                                </a>
                                <a href="#">
                                    <i class="fa fa-instagram"></i>
                                </a>
                                <a href="#">
                                    <i class="fa fa-pinterest-p"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-md-3 col-lg-2 mb-4 mb-md-0">
                    <div class="footer-box">
                        <h6>Quick Link</h6>
                        <div class="footer-menu">
                            <a href="#"> <i class="fa-solid fa-angles-right footer-left-icon"></i> Training Program</a>
                            <a href="#"> <i class="fa-solid fa-angles-right footer-left-icon"></i> Consulting Services</a>
                            <a href="#"> <i class="fa-solid fa-angles-right footer-left-icon"></i> Exhibition</a>
                            <a href="#"> <i class="fa-solid fa-angles-right footer-left-icon"></i> An Opportunity</a>
                            <a href="#"> <i class="fa-solid fa-angles-right footer-left-icon"></i> Media Incubator</a>
                            <a href="#"> <i class="fa-solid fa-angles-right footer-left-icon"></i> IPTV Channel List</a>
                            <a href="#"> <i class="fa-solid fa-angles-right footer-left-icon"></i> Sponsorships</a>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-md-3 col-lg-2 mb-4 mb-md-0">
                    <div class="footer-box">
                        <h6>Our Pages</h6>
                        <div class="footer-menu">
                            <a href="#"> <i class="fa-solid fa-angles-right footer-left-icon"></i> Training Program</a>
                            <a href="#"> <i class="fa-solid fa-angles-right footer-left-icon"></i> Consulting Services</a>
                            <a href="#"> <i class="fa-solid fa-angles-right footer-left-icon"></i> Exhibition</a>
                            <a href="#"> <i class="fa-solid fa-angles-right footer-left-icon"></i> An Opportunity</a>
                            <a href="#"> <i class="fa-solid fa-angles-right footer-left-icon"></i> Media Incubator</a>
                            <a href="#"> <i class="fa-solid fa-angles-right footer-left-icon"></i> IPTV Channel List</a>
                            <a href="#"> <i class="fa-solid fa-angles-right footer-left-icon"></i> Sponsorships</a>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-md-3 col-lg-2 mb-4 mb-md-0">
                    <div class="footer-box">
                        <h6>Shop Link</h6>
                        <div class="footer-menu">
                            <a href="#"> <i class="fa-solid fa-angles-right footer-left-icon"></i> Training Program</a>
                            <a href="#"> <i class="fa-solid fa-angles-right footer-left-icon"></i> Consulting Services</a>
                            <a href="#"> <i class="fa-solid fa-angles-right footer-left-icon"></i> Exhibition</a>
                            <a href="#"> <i class="fa-solid fa-angles-right footer-left-icon"></i> An Opportunity</a>
                            <a href="#"> <i class="fa-solid fa-angles-right footer-left-icon"></i> Media Incubator</a>
                            <a href="#"> <i class="fa-solid fa-angles-right footer-left-icon"></i> IPTV Channel List</a>
                            <a href="#"> <i class="fa-solid fa-angles-right footer-left-icon"></i> Sponsorships</a>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-md-3 col-lg-2 mb-4 mb-md-0">
                    <div class="footer-box">
                        <h6>Study Link</h6>
                        <div class="footer-menu">
                            <a href="#"> <i class="fa-solid fa-angles-right footer-left-icon"></i> Training Program</a>
                            <a href="#"> <i class="fa-solid fa-angles-right footer-left-icon"></i> Consulting Services</a>
                            <a href="#"> <i class="fa-solid fa-angles-right footer-left-icon"></i> Exhibition</a>
                            <a href="#"> <i class="fa-solid fa-angles-right footer-left-icon"></i> An Opportunity</a>
                            <a href="#"> <i class="fa-solid fa-angles-right footer-left-icon"></i> Media Incubator</a>
                            <a href="#"> <i class="fa-solid fa-angles-right footer-left-icon"></i> IPTV Channel List</a>
                            <a href="#"> <i class="fa-solid fa-angles-right footer-left-icon"></i> Sponsorships</a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </footer>
    <section class="copyright-section">
        <div class="container">
            <div class="col-sm-12">
                <p>@copyright-2022. All rights reserved Homeo Doctor ltd</p>
            </div>
        </div>
    </section>
    <!--    FOOTER SECTION END-->
    </div>
</template>
<script>
export default {
    /* ======================= Data ======================= */ 
    data(){
        return {
            static_image_url : this.$store.state.static_image_link
        }
    },
};
</script>
<style lang=""></style>
