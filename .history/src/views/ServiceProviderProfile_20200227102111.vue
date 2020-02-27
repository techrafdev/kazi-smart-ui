<template>

    <div>

        <Navigation />

        <!-- ======================= Start Page Title ===================== -->

		<div class="page-title light" style="background:url(https://images.unsplash.com/photo-1563991522451-90d2395a8854?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80);">
			<div class="container">
				<div class="col-sm-7">
					<div class="page-caption">

						<h2>About {{ profile_data.full_name | get_first_name() }} </h2>

						<p><a href="#" title="Home">Home</a> <i class="ti-arrow-right"></i> {{ profile_data.full_name | get_first_name() }} Details </p>
					</div>

                    <div class="col-sm-5 text-right mrg-top-30">
                        <button type="submit" class="btn btn-m btn-success"> Hire {{ profile_data.full_name | get_first_name() }} </button>
                    </div>

				</div>
			</div>
		</div>
		<!-- ======================= End Page Title ===================== -->

		<!-- ====================== Resume Detail ================ -->
		<section class="gray">

            <div class="container">
				<!-- row -->
				<div class="row">
                    <div class="col-md-12 col-sm-12">
						
						<div class="detail-wrapper">
							<div class="detail-wrapper-body">
							
								<div class="text-center mrg-bot-30">
									<img src="https://craftswithmeaning.org/wp-content/uploads/2019/04/African-Profile-Picture2.jpeg" class="img-circle profile-image width-100" alt=""/>
									<h4 class="meg-0" v-text="profile_data.full_name"></h4>
									<span v-text="profile_data.service_category_name"></span>
								</div>
								
								<div class="row">
									<div class="col-sm-4 mrg-bot-10">
										<i class="ti-location-pin padd-r-10"></i> <span v-text="profile_data.location"></span>
									</div>
									<div class="col-sm-4 mrg-bot-10">
										<i class="ti-email padd-r-10"></i><a href="https://codeminifier.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="dfacaaafafb0baad9fb3b6acabb6b1b8b7aabdf1">[email&#160;protected]</a>com
									</div>
									<div class="col-sm-4 mrg-bot-10">
										<i class="ti-mobile padd-r-10"></i> <span v-text="profile_data.msisdn"></span>
									</div>
									<div class="col-sm-4 mrg-bot-10">
										<i class="ti-credit-card padd-r-10"></i> {{ profile_data.num_of_jobs_completed | format_num_of_jobs() }}
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

        </section>

        <Options />

        <SignIn />

        <Footer />


    </div>

</template>

<script>

import axios from "axios";
import { urlObject } from "../url";

import Navigation from "../components/site/Navigation";
import Footer from "../components/site/Footer";
import SignIn from "../components/site/SignIn";
import Options from "../components/site/signup/Options";

export default {

    data() {
        return {
            profile_data: {}
        }
    },
    mounted() {

        this.get_service_provider_profile_infor()    
    },
    components: {
        Navigation,
        Options,
        Footer,
        SignIn
    },
    methods: {

        get_service_provider_profile_infor() {

            let profile_id = this.$route.params.id;

            axios.get(`${urlObject.baseUrl}/user/profile/${profile_id}`)
            .then( (resp) => {
                this.profile_data = resp.data.response;
            } )

        }

    },
    filters: {
        get_first_name: function(full_name) {

            return full_name.split(" ")[0];

        },
        format_num_of_jobs: function(number) {

            return `${number} Job(s) Completed`;

        }
    }

}
</script>

<style>

    .profile-image {
        position: relative;
        top: -90px;
        z-index: 100;
    }

    .gray {
        padding-top: 0;
    }

    .mrg-top-30 {
        position: absolute;
        z-index: 10;
    }

    .mrg-top-30 button {
        border-radius: 20px;
        background: rgb(7, 7, 190);
    }

</style>