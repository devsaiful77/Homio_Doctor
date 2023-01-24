<template lang="">
    <div>
        <!-- HOW IT WORK SECTION START -->
        <section class="how-it-work py-5" style="background-color: #c0f9fa;">
            <div class="container">
                <h2 class="section-title">How it Work</h2>
                <div class="row">
                    <div class="col-lg-3 col-md-4 col-sm-6 how-it-work-width">
                        <div class="item">
                            <div class="work-card my-4 mt-lg-5" :style='{backgroundImage: "url(" + static_image_url + `photos/how-it-work-1.jpeg` +")" }'>
                                <div class="work-card-overlay">
                                    <div class="work-article">
                                        <p class="sm-text">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                            Ipsum has been the industry's standard
                                            dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                            scrambled it to make a type specimen
                                            book. It has survived not only five centuries
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <h3>Step - One</h3>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 how-it-work-width">
                        <div class="item">
                            <div class="work-card my-4 mt-lg-5" :style='{backgroundImage: "url(" + static_image_url + `photos/how-it-work-2.jpeg` +")" }'>
                                <div class="work-card-overlay">
                                    <div class="work-article">
                                        <p class="sm-text">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                            Ipsum has been the industry's standard
                                            dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                            scrambled it to make a type specimen
                                            book. It has survived not only five centuries
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <h3>Step - Two</h3>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 how-it-work-width">
                        <div class="item">
                            <div class="work-card my-4 mt-lg-5" :style='{backgroundImage: "url(" + static_image_url + `photos/how-it-work-3.jpeg` +")" }'>
                                <div class="work-card-overlay">
                                    <div class="work-article">
                                        <p class="sm-text">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                            Ipsum has been the industry's standard
                                            dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                            scrambled it to make a type specimen
                                            book. It has survived not only five centuries
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <h3>Step - Three</h3>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 how-it-work-width">
                        <div class="item">
                            <div class="work-card my-4 mt-lg-5" :style='{backgroundImage: "url(" + static_image_url + `photos/how-it-work-4.jpeg` +")" }'>
                                <div class="work-card-overlay">
                                    <div class="work-article">
                                        <p class="sm-text">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                            Ipsum has been the industry's standard
                                            dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                            scrambled it to make a type specimen
                                            book. It has survived not only five centuries
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <h3>Step - Four</h3>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 how-it-work-width">
                        <div class="item">
                            <div class="work-card my-4 mt-lg-5" :style='{backgroundImage: "url(" + static_image_url + `photos/how-it-work-1.jpeg` +")" }'>
                                <div class="work-card-overlay">
                                    <div class="work-article">
                                        <p class="sm-text">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                            Ipsum has been the industry's standard
                                            dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                            scrambled it to make a type specimen
                                            book. It has survived not only five centuries
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <h3>Step - Five</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- HOW IT WORK SECTION END -->
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