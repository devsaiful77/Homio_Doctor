<template lang="">
    <div>
        <!-- OUR DISEASE PART -->
        <section class="disease-book py-3 py-lg-5" style="background: #ffffff;">
            <div class="container">
                <h2 class="section-title mb-5">Disease</h2>
                <div class="row">
                    <div class="col-lg-3 col-md-4 col-sm-6 my-2 my-lg-3">
                        <div class="disease-item">
                            <div class="card-img text-center" :style='{backgroundImage: "url(" + static_image_url + `disease/allergy.jpg` +")" }'>
                                <div class="card-overlay">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </div>
                            </div>
                            <h5 class="mt-2">
                                <a href="disease-details.html">Allergy</a>
                            </h5>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 my-2 my-lg-3">
                        <div class="disease-item">
                            <div class="card-img text-center" :style='{backgroundImage: "url(" + static_image_url + `disease/astham.jpg` +")" }'>
                                <div class="card-overlay">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </div>
                            </div>
                            <h5 class="mt-2">
                                <a href="disease-details.html">Astham</a>
                            </h5>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 my-2 my-lg-3">
                        <div class="disease-item">
                            <div class="card-img text-center"  :style='{backgroundImage: "url(" + static_image_url + `disease/hypertension.jpg` +")" }'>
                                <div class="card-overlay">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </div>
                            </div>
                            <h5 class="mt-2">
                                <a href="disease-details.html">Hypertension</a>
                            </h5>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 my-2 my-lg-3">
                        <div class="disease-item">
                            <div class="card-img text-center" :style='{backgroundImage: "url(" + static_image_url + `disease/infertility.jpg` +")" }'>
                                <div class="card-overlay">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </div>
                            </div>
                            <h5 class="mt-2">
                                <a href="disease-details.html">Infertility</a>
                            </h5>
                        </div>
                    </div>
                </div>
                <div class="custom-btn text-center my-5">
                    <a class="py-3" href="#">View More Disease</a>
                </div>
            </div>
        </section>
        <!-- OUR DISEASE PART -->
    </div>
</template>
<script>
export default {
    data(){
        return {
            static_image_url: this.$store.state.static_image_link
        }
    }
}
</script>
<style lang="">
    
</style>