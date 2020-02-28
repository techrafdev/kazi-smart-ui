<template>

    <div>
        <Navigation />
        <Banner />



        <Footer />        
    </div>  

</template>

<script>

// import { urlObject } from "../url";
// import axios from "axios";

import Banner from "../components/site/signup/Banner";
import Navigation from "../components/site/Navigation";
import Footer from "../components/site/Footer";
export default {
    data() {
        return {

        }
    },
    components: {
        Banner,
        Navigation,
        Footer
    },
    mounted() {
        this.get_provider_info()
    },
    methods: {
        get_provider_info() {
            let privider_id = this.$router.provider_id;
            alert(privider_id);
        }
    }
}
</script>

<style>

</style>