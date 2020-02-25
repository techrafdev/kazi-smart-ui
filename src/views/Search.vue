<template>

    <div>

        <Navigation />

        <Banner />

        <!-- Recent Job -->
        <div class="tab-pane fade in show active" id="recent" role="tabpanel">
            <div class="row">
            
                <!-- Single Job -->
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="grid-job-widget">
                    
                        <span class="job-type full-type">Rating</span>
                        <div class="job-like">
                            <label class="toggler toggler-danger">
                                <input type="checkbox" checked>
                                <i class="fa fa-heart"></i>
                            </label>
                        </div>
                        
                        <div class="u-content">
                            <div class="avatar box-80">
                                <a href="employer-detail.html">
                                    <img class="img-responsive" src="assets/img/c-1.png" alt="">
                                </a>
                            </div>
                            <h5><a href="employer-detail.html">Product Redesign</a></h5>
                            <p class="text-muted">By,  Service Provider Name</p>
                            <p class="text-muted"> 2 hrs ago </p>
                        </div>
                        
                        <div class="job-type-grid">
                            <a href="job-detail.html" class="btn job-browse-btn btn-radius br-light">Quick View</a>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>

    </div>

</template>

<script>
import Navigation from "../components/site/Navigation";
import Banner from "../components/site/signup/Banner";
export default {

    data() {
        return {

        }
    },
    created() {

        let service_id = this.$router.params.service_id;
        let location = this.$router.params.location;

        // axios.get("http://kazi.localhost/service/search/" + service_id + "/" + location)
        // .then((resp) => {
        //     console.log(resp)
        // })
        // .catch(error => console.log(error))

        alert(service_id);

    },
    components: {
        Navigation,
        Banner
    }

}
</script>

<style>

</style>