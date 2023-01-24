<template lang="">
    <div>
        <!-- HISTORY SECTION START -->
        <section class="history-part py-2 py-lg-5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <img class="w-100" :src="static_image_url + 'photos/history-img.png'" alt="history-img">
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <h4>Introduction of Homeopathy</h4>
                        <h5>Christian Friedrich Samuel Hahnemann</h5>
                        <h6>M.D. (1755-1843)</h6>
                        <h4>CREATION OF HOMEOPATHY:</h4>
                        <p>Hahnemann was dissatisfied with the state of medicine in his time, and particularly objected to practices such as
                        bloodletting. He claimed that the medicine he had been taught to practice sometimes did the patient more harm than good:
                        My sense of duty would not easily allow me to treat the unknown pathological state of my suffering brethren with these
                        unknown medicines. The thought of becoming in this way a murderer or malefactor towards the life of my fellow human
                        beings was most terrible to me, so terrible and disturbing that I wholly gave up my practice in the first years of my
                        married life and occupied myself solely with chemistry and writing. After giving up his practice around 1784, Hahnemann
                        made his living chiefly as a writer and translator, while resolving also to investigate the causes of medicine's alleged
                        errors. While translating William Cullen's A Treatise on the Materia Medica, Hahnemann encountered the claim that
                        cinchona, the bark of a Peruvian tree, was effective in treating malaria because of its astringency. Hahnemann believed
                        that other astringent substances are not effective against malaria and began to research cinchona's effect on the human
                        body by self-application. <a class="text-info" href="#">Learn More</a></p>
                    </div>
                </div>
            </div>
        </section>
        <!-- HISTORY SECTION END -->
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