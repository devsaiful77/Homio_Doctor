<template lang="">
    <div>
        <!-- footer part -->
        <!-- Footer -->
        <footer class="desktop_footer">
            <div class="container footer_grid">
                <div class="footer_about_us">
                    <div class="footer_logo">
                        <img
                            :src="static_image_url + '/logo_white.png'"
                            alt=""
                            srcset=""
                        />
                    </div>
                    <div class="footer_about_us_details">
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Quam animi eum aut quisquam harum, cum
                            repudiandae? Sit necessitatibus odio enim.
                        </p>
                    </div>
                </div>
                <div class="footer_top_service">
                    <h6>Top Service</h6>
                    <ul>
                        <li>
                            <a href="">Offline Doctors</a>
                        </li>
                        <li>
                            <a href="">Online Doctors</a>
                        </li>
                        <li>
                            <a href="">Home Service</a>
                        </li>
                        <li>
                            <a href="">Medicine Mart</a>
                        </li>
                        <li>
                            <a href="">Surgery</a>
                        </li>
                        <li>
                            <a href="">Ambulance</a>
                        </li>
                        <li>
                            <a href="">Blood Donor</a>
                        </li>
                    </ul>
                </div>
                <div class="footer_top_service footer_quick_menu">
                    <h6>Quick Menu</h6>
                    <ul>
                        <li>
                            <a href="">Our Policy</a>
                        </li>
                        <li>
                            <a href="">Appointment System</a>
                        </li>
                        <li>
                            <a href="">Online Service</a>
                        </li>
                        <li>
                            <a href="">Medicine Return Policy</a>
                        </li>
                    </ul>
                </div>
                <div class="footer_top_service footer_contact_details">
                    <h6>Contact</h6>
                    <ul>
                        <li>
                            <p>Phone: <span>123456789</span></p>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
        <section class="bottom_footer">
            <div class="container footer_bottom">
                <a href="">All Right Reserved by <span>Health Care</span></a>
                <a href="">
                    Developed By
                    <span id="developed_by">Mohasagor IT Solutions</span></a
                >
            </div>
        </section>
        <!-- footer part -->
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
