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
                    <div class="col-md-8 col-sm-12">
						
						<div class="detail-wrapper">
							<div class="detail-wrapper-body">
							
								<div class="text-center mrg-bot-30">
									<img src="assets/img/client-1.jpg" class="img-circle width-100" alt=""/>
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
						
						<div class="detail-wrapper">
							<div class="detail-wrapper-header">
								<h4>Education</h4>
							</div>
							<div class="detail-wrapper-body">
							
								<div class="edu-history info">
									<i></i>
									<div class="detail-info">
										<h3>University</h3>
										<i>2008 - 2012</i>
										<span>Middle East Technical University <i>Computer Science</i></span>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
									</div>
								</div>
								
								<div class="edu-history danger">
									<i></i>
									<div class="detail-info">
										<h3>Intermediate School</h3>
										<i>2008 - 2012</i>
										<span>Middle East Technical University <i>Computer Science</i></span>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
									</div>
								</div>
								
								<div class="edu-history success">
									<i></i>
									<div class="detail-info">
										<h3>High School</h3>
										<i>2008 - 2012</i>
										<span>Middle East Technical University <i>Computer Science</i></span>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
									</div>
								</div>
								
							</div>
						</div>
						
						<div class="detail-wrapper">
							<div class="detail-wrapper-header">
								<h4>Work & Experience</h4>
							</div>
							<div class="detail-wrapper-body">
							
								<div class="edu-history info">
									<i></i>
									<div class="detail-info">
										<h3>Php Developer <span>Infox Studio</span></h3>
										<i>2008 - 2012</i>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
									</div>
								</div>
								
								<div class="edu-history danger">
									<i></i>
									<div class="detail-info">
										<h3>Java Developer <span>Itare Studio</span></h3>
										<i>2012 - 2014</i>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
									</div>
								</div>
								
								<div class="edu-history success">
									<i></i>
									<div class="detail-info">
										<h3>CMS Developer <span>Dexlo Studio</span></h3>
										<i>2014 - 2018</i>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
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

</style>