<template lang="">
    <div>
        <!-- OUR DOCTOR PART START -->
        <section class="our-doctor py-3 py-lg-5">
            <div class="container">
                <div class="col-sm-12">
                    <h2 class="section-title mb-4">Our Doctor</h2>
                </div>
                <div class="row card-slide">


                    <div class="col-lg-3 col-md-4 col-sm-12 my-4 pt-lg-3 mx-2">
                        <div class="card">
                            <div class="card-img text-center" :style='{backgroundImage: "url(" + static_image_url + `doctors/image-1.jpg` +")" }'>
                                <div class="card-overlay">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="clinic ms-1">
                                    <div class="icon">
                                        <i class="fa-solid fa-stethoscope"></i>
                                    </div>
                                </div>
                                <h6 class="mt-2">Pediatrician</h6>
                                <h5 class="card-title">Sussie Wolff</h5>
                                <p class="sm-text py-2">Proin consequat, at commodo. Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.</p>
                                <div class="d-flex justify-content-between">
                                    <div class="custom-btn mt-1">
                                        <a href="#">Appointment</a>
                                    </div>
                                    <div>
                                        <ul class="d-flex">
                                            <li class="mx-1">
                                                <i class="fa-brands fa-facebook-f"></i>
                                            </li>
                                            <li class="mx-1">
                                                <i class="fa-brands fa-linkedin-in"></i>
                                            </li>
                                            <li class="mx-1">
                                                <i class="fa-brands fa-twitter"></i>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    
                </div>
                <div class="custom-btn text-center my-4">
                    <a class="py-3" href="#">View More Doctor</a>
                </div>
            </div>
        </section>
        <!-- OUR DOCTOR PART END -->
    </div>
</template>
<script>
export default {
    data(){
        return{
            static_image_url: this.$store.state.static_image_link
        }
    }
}
</script>
<style lang="">
    
</style>