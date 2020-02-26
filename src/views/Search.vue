<template>

    <div>

        <Navigation />

        <Banner />

		<!-- Featured Job -->
        <div class="tab-pane fade in show active" id="featured" role="tabpanel">
            <div class="row">

                <!-- Single Employee List -->
            <div v-for="search_result in search_results" :key="search_result.profile_id" class="col-md-4 col-sm-6">
                <div class="contact-box">
                
                    <div class="flexbox mrg-l-10">
                        <label class="toggler toggler-danger">
                            <input type="checkbox">
                            <i class="fa fa-heart"></i>
                        </label>
                    </div>
                
                    <div class="contact-img">
                        <img src="assets/img/client-2.jpg" class="img-circle img-responsive" alt="">
                    </div>
                    
                    <div class="contact-caption">
                        <h4 class="font-16 font-midium" v-text="search_result.full_name"></h4>
                        <span v-text="search_result.service_name"></span>
                    </div>
                    
                    <div class="contact-footer">
                        <router-link to="#" class="col-half"><span class="con-message"><i class="ti-email"></i>View Profile</span></router-link>
                        
                        <router-link to="#" class="left-br col-half">
                            <span class="con-profile"><i class="ti-eye"></i>Hire</span>
                        </router-link>
                    </div>
                    
                </div>
            </div>
                
            </div>	
        </div>


    </div>

</template>

<script>

import axios from "axios";

import Navigation from "../components/site/Navigation";
import Banner from "../components/site/signup/Banner";
export default {

    data() {
        return {
            search_results: []
        }
    },
    mounted() {

        let service_id = this.$route.params.service_id;
        let location = this.$route.params.location;

        axios.get("http://kazi.localhost/service/search/" + service_id + "/" + location)
        .then((resp) => {
            this.search_results = resp.data.response;
        })
        .catch(error => console.log(error))
    },
    components: {
        Navigation,
        Banner
    }

}
</script>

<style>

</style>