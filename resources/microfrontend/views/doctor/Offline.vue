<template lang="">
    <div>
        <h1 class="common__title container">Offline Doctor Service</h1>
        <main class="container category_grid common_margin">
            <div id="mobile_filter" class="filter_sercion">
                <button class="cross_btn" onclick="mobileFilter()"><i class="fa-solid fa-xmark"></i></button>
                <div class="price_filter">
                <h6 class="subtitle-2">Price</h6>
                <div class="price_inputs">
                    <div class="price_input">
                    <label for="">Min Price</label>
                    <input type="text" placeholder="Min Price" />
                    </div>
                    <div class="price_input">
                    <label for="">Max Price</label>
                    <input type="text" placeholder="Max Price" />
                    </div>
                </div>
                </div>
                <div class="filter_bt_preference mt-24">
                <h6 class="subtitle-2">Preference</h6>
                <div class="preference_container">
                    <input
                    type="checkbox"
                    class="checkbox_input"
                    name=""
                    id="checkbox0"
                    value="online_now"
                    />
                    <label for="checkbox0">Online Now</label>
                </div>
                <div class="preference_container">
                    <input
                    type="checkbox"
                    class="checkbox_input"
                    name=""
                    id="checkbox1"
                    value="online_now"
                    />
                    <label for="checkbox1">Available In Next 2 hours</label>
                </div>
                <div class="preference_container">
                    <input
                    type="checkbox"
                    class="checkbox_input"
                    name=""
                    id="checkbox2"
                    value="online_now"
                    />
                    <label for="checkbox2">Available Today</label>
                </div>
                <div class="preference_container">
                    <input
                    type="checkbox"
                    class="checkbox_input"
                    name=""
                    id="checkbox3"
                    value="online_now"
                    />
                    <label for="checkbox3">Woman Doctors Only</label>
                </div>
                </div>
                <div class="sort_by mt-24">
                <h6 class="subtitle-2">Sort By</h6>
                <div class="sort_by_options">
                    <input type="radio" name="" id="radio1" value="radio1" />
                    <label id="radio1" for="radio1">Relevance</label>
                </div>
                <div class="sort_by_options">
                    <input type="radio" name="" id="radio2" value="radio2" />
                    <label id="radio2" for="radio2">Popularity</label>
                </div>
                <div class="sort_by_options">
                    <input type="radio" name="" id="radio3" value="radio3" />
                    <label id="radio3" for="radio3">Fees: High to Low</label>
                </div>
                <div class="sort_by_options">
                    <input type="radio" name="" id="radio4" value="radio4" />
                    <label id="radio4" for="radio4">Fees: low to high</label>
                </div>
                </div>
            </div>
            <div class="category_section">
                <!-- location and search -->
                <div class="location_search_container">
                <button class="btn_primary location_btn">Location</button>
                <div class="mobile_filter_container">
                    <button class="btn_primary" onclick="mobileFilter()">
                    <i class="fa-solid fa-filter"></i>
                    </button>
                    <button class="btn_primary">
                    <i class="fa-solid fa-location-dot"></i>
                    </button>
                </div>

                <div class="search_container">
                    <input type="text" placeholder="Dr. Sifat Morshed" />
                    <button class="btn_primary">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
                </div>

                <!-- service card -->
                <div class="doctors_card">
                <div class="doctor_img_info">
                    <div class="img_part_container">
                    <div class="doctors_card_img_container">
                        <img :src="static_image_url + 'hero.png'" alt="" />
                    </div>
                    </div>
                    <div class="name_info">
                    <div class="name_designation_contaienr">
                        <h6>Dr. Sifat Morshed</h6>
                        <p class="body-2">MBBS</p>
                    </div>
                    <div class="specialty_container">
                        <p class="body-2 text-third">Specialties</p>
                        <p class="body-2">General Physician, ENT</p>
                    </div>
                    </div>
                </div>
                <div class="work_info">
                    <div class="work_container">
                    <p class="body-2 text-third">Working In</p>
                    <p class="body-2">
                        Shaheed Suhrawardy Medical College Hospital, Dhaka
                    </p>
                    </div>
                    <div class="experience_container">
                    <div class="total_experience">
                        <p class="body-2 text-third">Experience</p>
                        <p class="body-1 text-second">9+ Years</p>
                    </div>
                    <div class="total_experience">
                        <p class="body-2 text-third">
                        Total Rating <span>(3354)</span>
                        </p>
                        <p class="body-1 text-second">9+ Years</p>
                    </div>
                    </div>
                </div>
                <div class="price_info">
                    <h4>250 BDT</h4>
                    <p class="body-2 text-third">Per consultation</p>
                </div>
                </div>
            </div>
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
function mobileFilter() {
    var element = document.getElementById("mobile_filter");
    element.classList.toggle("display");
}
</script>
<style lang="">
    
</style>