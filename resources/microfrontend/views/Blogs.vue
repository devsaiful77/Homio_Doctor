<template lang="">
    <div>
        <h1 class="common__title container">Blog Service</h1>
        <main class="container common_margin">
            <section class="mt-32 blog_page_container">
                <div class="blog_details">
                    <h2>Milk and baskets the combo</h2>
                    <div class="blog_page_img_container">
                    <img :src="static_image_url + 'left.jpg'" alt="" />
                    </div>
                    <div class="blog_additional_information_container">
                    <div class="date_author">
                        <h6 class="subtitle-2">By</h6>
                        <p class="subtitle-2">Kuddus Khan (KK)</p>
                    </div>
                    <div class="date_author">
                        <h6 class="subtitle-2">Published on:</h6>
                        <p class="subtitle-2">20 December, 2022</p>
                    </div>
                    </div>
                    <div class="blog_text_editor_content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                    quidem ut accusantium veritatis, illum accusamus consectetur, sunt
                    voluptatibus impedit ad nemo est, vitae laboriosam tenetur. Debitis
                    unde excepturi corrupti vitae tenetur voluptates reiciendis temporibus
                    cumque ab architecto quod eveniet iste deleniti molestias voluptatum,
                    possimus, numquam porro at inventore doloremque commodi dolorem amet.
                    Assumenda accusantium voluptatum corrupti. Unde cumque eveniet dicta
                    ex aut? Soluta harum dolor vel veniam, ducimus officiis culpa laborum
                    magni. Asperiores, eaque. Quam, impedit quisquam aliquid quidem quae
                    rerum rem dignissimos. Fugit perferendis, ex ipsa odit blanditiis
                    mollitia ut recusandae voluptatem officia, perspiciatis quasi
                    repellendus debitis temporibus adipisci iure in voluptate. Esse
                    voluptatum iusto recusandae modi expedita ad a dolorem rerum ut. Porro
                    temporibus quisquam, similique veniam, laudantium cumque aliquid
                    dolorem quod repellendus illo voluptas delectus unde dolorum fugit
                    fugiat aspernatur minima! Nulla dolorum enim deserunt quo quas iure
                    neque molestiae, praesentium esse, et adipisci odit ex quidem.
                    Deserunt voluptates dicta eos sed exercitationem, ipsa nobis dolorem
                    laborum necessitatibus labore nam numquam error pariatur consequuntur
                    perspiciatis dolor corrupti ex. Necessitatibus aut totam eius ipsam
                    optio voluptatem perferendis ratione sed quis repellendus accusamus
                    tempora, est voluptatum omnis mollitia hic itaque! Quis explicabo,
                    dicta praesentium quo laudantium quam magnam ipsa.
                    </div>
                </div>
                <div class="more_blog">
                    <h4>More Blog</h4>
                    <div class="more_blog_container">
                    <div class="more_blog_img_container">
                        <img :src="static_image_url + 'right.jpg'" alt="" />
                    </div>
                    <div class="more_blog_description">
                        <h6>milk and baskets the combo</h6>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
                        quia magni eius velit at aperiam possimus quos porro dicta sequi.
                        </p>
                    </div>
                    </div>
                    <div class="more_blog_container">
                    <div class="more_blog_img_container">
                        <img :src="static_image_url + 'bottom.jpg'" alt="" />
                    </div>
                    <div class="more_blog_description">
                        <h6>milk and baskets the combo</h6>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
                        quia magni eius velit at aperiam possimus quos porro dicta sequi.
                        </p>
                    </div>
                    </div>
                </div>
                </section>
        </main>
    </div>
</template>
<!-- script -->
<script>
export default {
    /* ======================= Data ======================= */ 
    data(){
        return {
            static_image_url : this.$store.state.static_image_link
        }
    },
}
</script>
<style lang="">
    
</style>