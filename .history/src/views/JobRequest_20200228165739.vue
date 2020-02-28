<template>

    <div>
        <Navigation />
        <Banner />

        <JobRequestForm />

        <Footer />        
    </div>  

</template>

<script>

import { urlObject } from "../url";
import axios from "axios";

import Banner from "../components/site/signup/Banner";
import Navigation from "../components/site/Navigation";
import Footer from "../components/site/Footer";
import JobRequestForm from "../components/site/job_request/JobRequestForm";

export default {
    data() {
        return {
            profile_data: {}
        }
    },
    components: {
        Banner,
        Navigation,
        Footer,
        JobRequestForm
    },
    mounted() {
        this.get_provider_info();
    },
    methods: {
        get_provider_info() {

            let privider_id = this.$route.params.provider_id;
            axios.get(`${urlObject.baseUrl}/user/profile/${privider_id}`)
            .then( (resp) => {
                this.profile_data.service_category_id = resp.data.response.service_category_id;
                this.profile_data.msisdn = resp.data.response.msisdn;
                this.profile_data.profile_id = resp.data.response.profile_id;
                this.profile_data.service_category_name = resp.data.response.service_category_name;
            } )

        }
    }
}
</script>

<style>

</style>