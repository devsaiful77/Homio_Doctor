<template lang="">
    <div>
        <Header></Header>
        <!-- main part -->
        <div>
            <router-view></router-view>
        </div>
        <!-- main part -->
        <Footer></Footer>
    </div>
</template>
<script>
import Header from './include/Header.vue';
import Footer from './include/Footer.vue';
export default {
    components:{
        Header,
        Footer
    }
}
</script>
<style lang="">
    
</style>