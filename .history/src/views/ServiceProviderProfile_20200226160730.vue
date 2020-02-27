<template>

    <div>

        <Navigation />

        <Banner />

		<!-- ====================== Resume Detail ================ -->
		<section class="gray">

        </section>
            <div class="container">
				<!-- row -->
				<div class="row">
                    <div class="col-md-12 col-sm-12">
						
						<div class="detail-wrapper">
							<div class="detail-wrapper-body">
							
								<div class="text-center mrg-bot-30">
									<img src="https://craftswithmeaning.org/wp-content/uploads/2019/04/African-Profile-Picture2.jpeg" class="img-circle profile-image width-100" alt=""/>
									<h4 class="meg-0">Hansh Raj Singh</h4>
									<span>Front End Designer</span>
								</div>
								
								<div class="row">
									<div class="col-sm-4 mrg-bot-10">
										<i class="ti-location-pin padd-r-10"></i>2726 Shinn, New York
									</div>
									<div class="col-sm-4 mrg-bot-10">
										<i class="ti-email padd-r-10"></i><a href="https://codeminifier.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="dfacaaafafb0baad9fb3b6acabb6b1b8b7aabdf1">[email&#160;protected]</a>com
									</div>
									<div class="col-sm-4 mrg-bot-10">
										<i class="ti-mobile padd-r-10"></i>91 234 567 8765
									</div>
									<div class="col-sm-4 mrg-bot-10">
										<i class="ti-credit-card padd-r-10"></i>$12/Hour
									</div>
									<div class="col-sm-4 mrg-bot-10">
										<i class="ti-shield padd-r-10"></i>3 Year Exp.
									</div>
									<div class="col-sm-4 mrg-bot-10">
										<span class="skill-tag">css</span>
										<span class="skill-tag">HTML</span>
										<span class="skill-tag">Photoshop</span>
									</div>
								</div>
								
							</div>
						</div>
						
					</div>
				</div>
            </div>

        <Footer />


    </div>

</template>

<script>

import axios from "axios";
import { urlObject } from "../url";

import Navigation from "../components/site/Navigation";
import Banner from "../components/site/signup/Banner";
import Footer from "../components/site/Footer";
export default {

    data() {
        return {
            search_results: []
        }
    },
    mounted() {

        let service_id = this.$route.params.service_id;
        let location = this.$route.params.location;

        axios.get(`${urlObject.baseUrl}/service/search/${service_id}/${location}`)
        .then((resp) => {
            this.search_results = resp.data.response;
        })
        .catch(error => console.log(error))
    },
    components: {
        Navigation,
        Banner,
        Footer
    }

}
</script>

<style>

    .profile-top {
        background: red;
        height: 500px;
    }

</style>