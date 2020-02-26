<template>

    <!-- ================= Job start ========================= -->
		<section>
			<div class="container">
			
				<!-- Nav tabs -->
				<ul class="nav nav-tabs nav-advance theme-bg" role="tablist">
					<li class="nav-item active">
						<a class="nav-link" data-toggle="tab" href="#recent" role="tab">
						Recent Jobs</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" data-toggle="tab" href="#featured" role="tab">
						Featured Providers</a>
					</li>
				</ul>
				
				<div class="tab-content">
					
					<!-- Recent Job -->
					<div class="tab-pane fade in show active" id="recent" role="tabpanel">
						<div class="row">
						
							<!-- Single Job -->
							<div v-for="recent_job in recent_jobs" :key="recent_job.profile_id" class="col-lg-3 col-md-4 col-sm-6">
								<div class="grid-job-widget">
								
									<span class="job-type full-type">
										<div class="star-pos"></div>
										<div class="star-pos"></div>
										<div class="star-pos"></div>
										<div class="star-neg"></div>
										<div class="star-neg"></div>
									</span>

									<div class="job-like">
										<label class="toggler toggler-danger">
											<input type="checkbox" checked>
											<i class="fa fa-heart"></i>
										</label>
									</div>
									
									<div class="u-content">
										<div class="avatar box-80">
											<a href="employer-detail.html">
												<img v-if="recent_job.path !== null" class="img-responsive" src="assets/img/c-2.png" alt="Avater">
												<img v-if="recent_job.path === null" class="img-responsive" src="assets/img/c-1.png" alt="Avatar Placeholder">
											</a>
										</div>
										<h5 v-text="recent_job.full_name"></h5>
										<p class="text-muted" >By, <span v-text="recent_job.full_name"></span> </p>
										<p class="text-muted"> 2 hrs ago </p>
									</div>
									
									<div class="job-type-grid">
										<router-link to="/" class="btn job-browse-btn btn-radius br-light">Quick View</router-link>
									</div>
									
								</div>
							</div>
							
						</div>
					</div>
					
					<!-- Featured Job -->
					<div class="tab-pane fade" id="featured" role="tabpanel">
						<div class="row">

							<!-- Single Employee List -->
						<div v-for="service_provider in featured_service_providers" :key="service_provider.profile_id" class="col-md-4 col-sm-6">
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
									<h4 class="font-16 font-midium">Service Provider Name</h4>
									<span> Service Category</span>
								</div>
								
								<div class="contact-footer">
									<a href="#" class="col-half"><span class="con-message"><i class="ti-email"></i>View Profile</span></a>
									
									<a href="resume-detail.html" class="left-br col-half">
										<span class="con-profile"><i class="ti-eye"></i>Hire</span>
									</a>
								</div>
								
							</div>
						</div>
							
						</div>	
					</div>

				</div>
				
				<div class="col-md-12 mrg-top-40">
					<div class="text-center">
						<a href="#" class="btn theme-btn btn-m">Browse More Jobs</a>
					</div>
				</div>
				
			</div>
		</section>

    <!-- ================= Job End ========================= -->
  
</template>

<script>
import axios from "axios";
import { urlObject } from "../../url";

export default {
    name: "jobs",
    data() {
		return {
			recent_jobs: [],
			featured_service_providers: [
				{
					user_full_name: "Kelvin Rapahel Kingara",
					profile_id: 2,
					user_profile_image: "url",
					msisdn: "07891*******",
					user_location: "Location",
					user_service_category: "Mechanic",
					number_of_jobs_done: 30,
					rating: 5
				},
				{
					user_full_name: "Kelvin Rapahel Kingara",
					profile_id: 3,
					user_profile_image: "url",
					msisdn: "07891*******",
					user_location: "Location",
					user_service_category: "Mechanic",
					number_of_jobs_done: 30,
					rating: 5
				},
				{
					user_full_name: "Kelvin Rapahel Kingara",
					profile_id: 4,
					user_profile_image: "url",
					msisdn: "07891*******",
					user_location: "Location",
					user_service_category: "Mechanic",
					number_of_jobs_done: 30,
					rating: 5
				},
				{
					user_full_name: "Kelvin Rapahel Kingara",
					profile_id: 5,
					user_profile_image: "url",
					msisdn: "07891*******",
					user_location: "Location",
					user_service_category: "Mechanic",
					number_of_jobs_done: 30,
					rating: 5
				},
				{
					user_full_name: "Kelvin Rapahel Kingara",
					profile_id: 6,
					user_profile_image: "url",
					msisdn: "07891*******",
					user_location: "Location",
					user_service_category: "Mechanic",
					number_of_jobs_done: 30,
					rating: 5
				}
			]
		}
	},
	components: {},
	mounted() {
		this.get_recent_jobs();
		
	},
	created() {
		// this.rating();
	},
    methods: {
		get_recent_jobs() {
			axios.get(`${urlObject.baseUrl}/jobs/all/0`)
			.then((resp) => {
				this.recent_jobs = resp.data.response;
				this.rating();
			})
			.catch(error => console.log(error))
		},
		rating() {

			var all_rating = [];
			var recent_jobs = this.recent_jobs;

			console.log(this.recent_jobs);

			for (const recent_job of recent_jobs) {

				let current_user_object = {
					id: recent_job.profile_id
				}

				let rating_couter = 0;
				let db_rating = recent_job.rating > 5 ? 5 : recent_job.rating;

				var rate = [];

				while (db_rating > 0) {
					rate.push("star-pos");
					db_rating--;
					rating_couter++;
				}

				let rate_negative = rating_couter - 5;

				if(rate_negative !== 0) {
					while (rate_negative > 0) {
						rate.push("star-neg");
						rate_negative--;
					}
				}

				current_user_object.rating = rate;
				all_rating.push(current_user_object);
				
			}

			console.log(all_rating);
		}
	}
}
</script>

<style>

	.star-pos {
		clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
		height: 15px;
		width: 15px;
		background: gold;
		display: inline-block;
		margin-top: 7px;
	}

	.star-neg {
		clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
		height: 15px;
		width: 15px;
		border-width: 5px;
		border-color: black;
		border-style: solid;
		display: inline-block;
		margin-top: 7px;
	}

</style>