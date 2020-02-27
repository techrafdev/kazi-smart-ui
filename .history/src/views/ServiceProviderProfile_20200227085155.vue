<template>

    <div>

        <Navigation />

        <!-- ======================= Start Page Title ===================== -->

		<div class="page-title light" style="background:url(https://images.unsplash.com/photo-1563991522451-90d2395a8854?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80);">
			<div class="container">
				<div class="col-sm-7">
					<div class="page-caption">
						<h2>About {{ Name }} </h2>
						<p><a href="#" title="Home">Home</a> <i class="ti-arrow-right"></i> {{ Name }} Details </p>
					</div>

                    <div class="col-sm-5 text-right mrg-top-30">
                        <button type="submit" class="btn btn-m btn-success"> Hire Mary </button>
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

        </section>

        <Options />

        <SignIn />

        <Footer />


    </div>

</template>

<script>

import axios from "axios";
// import { urlObject } from "../url";

import Navigation from "../components/site/Navigation";
import Footer from "../components/site/Footer";
import SignIn from "../components/site/SignIn";
import Options from "../components/site/signup/Options";

export default {

    data() {
        return {
            search_results: []
        }
    },
    mounted: {

        get_user_profile() {

            let profile_id = this.$route.params.profile_id;

            console.log(profile_id);

            // axios.get(`${urlObject.baseUrl}/service/search/${service_id}/${location}`)
            // .then((resp) => {
            //     this.search_results = resp.data.response;
            // })
            // .catch(error => console.log(error))

        }

    },
    components: {
        Navigation,
        Options,
        Footer,
        SignIn
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