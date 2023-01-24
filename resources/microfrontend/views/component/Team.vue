<template lang="">
    <div>
        <!-- OUR TEAM SECTION PART START -->
        <section class="our-team mt-5 pt-lg-5">
            <div class="container pt-lg-4">
                <div class="row">
                    <div class="col-lg-7 col-md-6 col-sm-12">
                        <div class="content">
                            <h5 class="mb-5">Dr. Stephanie Wosniack</h5>
                            <h1>OUR <span>TEAM</span></h1>
                            <h6 class="py-2 py-lg-3">Dr. Stephanie Wosniack is is dedicated to providing her patients with the best possible care. We at MediCare are focused
                            on helping you. After receiving successful care for various aches and pains over the years, Dr. Woshiack found her
                            calling to help others get well.</h6>
                            <img :src="static_image_url + 'photos/signature.png'" alt="signature">
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-6 col-sm-12">
                        <img :src="static_image_url + 'photos/ourteam-doctor-img.png'" alt="doctor-img">
                    </div>
                </div>
            </div>
        </section>
        <!-- OUR TEAM SECTION PART END -->
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