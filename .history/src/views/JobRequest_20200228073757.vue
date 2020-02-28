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
            let privider_id = this.$route.params.provider_id;

            axios.get(`${urlObject.baseUrl}/user/profile/${privider_id}`)
            .then( (resp) => {
                console.log(this.profile_data = resp.data.response);
            } )

        }
    }
}
</script>

<style>

</style>