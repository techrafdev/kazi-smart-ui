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
							
								<span v-for="recent_job_rating in recent_jobs_rating" :key="recent_job_rating.id">
									<span v-if="recent_job_rating.id == recent_job.job_id" class="job-type full-type">
										<div v-for="item in recent_job_rating.rating" :key="item.id" :class="item.class"></div>
									</span>
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
									<p class="text-muted"> {{ recent_job.completed | timeDifference }} </p>
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
						<div
						v-for="service_provider in featured_services"
						:key="service_provider.profile_id"
						class="col-md-4 col-sm-6"
						>
							<div class="contact-box">
								<div class="flexbox mrg-l-10">
								<label class="toggler toggler-danger">
									<input type="checkbox" />
									<i class="fa fa-heart"></i>
								</label>
								</div>

								<div class="contact-img">
									<img src="assets/img/client-2.jpg" class="img-circle img-responsive" alt />
								</div>

								<div class="contact-caption">
									<h4 class="font-16 font-midium">{{ service_provider.full_name }}</h4>
										<span>{{ service_provider.service_name }}</span>
									<br />
								</div>

								<div class="contact-footer">
									<a href="javascript:void(0)" class="col-half">
										<span class="con-message">
											Jobs Completed: {{ service_provider.jobs_completed }}
										</span>
									</a>

									<a href="javascript:void(0)" class="left-br col-half">
										<span class="con-profile">
											Average rating: {{ service_provider.rating | roundIt }} 
										</span>
									</a>
								</div>

								<div class="contact-footer">
									
									<router-link to="/profile/2" class="col-half">
										<span class="con-message">
										<i class="ti-email"></i> View Profile
										</span>
									</router-link>

									<a href="resume-detail.html" class="left-br col-half">
										<span class="con-profile">
										<i class="ti-eye"></i> Hire
										</span>
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
			recent_jobs_rating: [],
			featured_services: [],
			featured_service_providers: []
		};
	},
	components: {},
	created() {
		this.get_recent_jobs();
		this.get_featured_services();
	},
	methods: {
			get_recent_jobs() {
			axios.get(`${urlObject.baseUrl}/jobs/all/0`)
			.then(resp => {
				this.recent_jobs = resp.data.response;
				this.rating();
			}).catch(error => console.log(error));
		},
		rating() {
			var all_rating = [];
			var recent_jobs = this.recent_jobs;

			for (const recent_job of recent_jobs) {

				let current_user_object = {
					id: recent_job.job_id
				};

				let rating_couter = 0;
				let db_rating;

				if(recent_job.rating > 5) {
					db_rating = 5;
				} else if(recent_job.rating == null) {
					db_rating = 0;
				} else {
					db_rating = recent_job.rating;
				}

				var rate = [];

				while (db_rating > 0) {

					let class_object = {
						id: Math.random(),
						class: "star-pos"
					}

					rate.push(class_object);
					db_rating--;
					rating_couter++;

				}

				let rate_negative = 5 - rating_couter;

				if(rate_negative > 0) {

					while (rate_negative > 0) {

						let class_object = {
							id: Math.random(),
							class: "star-neg"
						}

						rate.push(class_object);
						rate_negative--;
					}
				}

				current_user_object.rating = rate;
				all_rating.push(current_user_object);
				
			}

			this.recent_jobs_rating = all_rating;

		},
		get_featured_services() {
			axios
			.get(`${urlObject.baseUrl}/service/featured`)
			.then(resp => {
				this.featured_services = resp.data.response;
				console.log(this.featured_services);
				})
			.catch(error => console.log(error));
			}
		},				
		filters: {
			profileUrl(id) {

				return `/profile/${id}`

			},
			roundIt(val) {
				return Math.round(val)
			},
			timeDifference: function (previous) {

				var current = new Date()

				// var my_date = "2019-04-03 07:59:48";
				previous = previous.replace(/-/g, "/");
				var d = new Date(previous);

				var msPerMinute = 60 * 1000;
				var msPerHour = msPerMinute * 60;
				var msPerDay = msPerHour * 24;
				var msPerMonth = msPerDay * 30;
				var msPerYear = msPerDay * 365;

				var elapsed = current - d;

				if (elapsed < msPerMinute) {
					return Math.round(elapsed/1000) + ' seconds ago';   
				}

				else if (elapsed < msPerHour) {
					return Math.round(elapsed/msPerMinute) + ' minutes ago';   
				}

				else if (elapsed < msPerDay ) {
					return Math.round(elapsed/msPerHour ) + ' hours ago';   
				}

				else if (elapsed < msPerMonth) {
					return Math.round(elapsed/msPerDay) + ' days ago';   
				}

				else if (elapsed < msPerYear) {
					return Math.round(elapsed/msPerMonth) + ' months ago';   
				}

				else {
					return Math.round(elapsed/msPerYear ) + ' years ago';   
				}
			}
		}
}
</script>

<style>
.star-pos {
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
  height: 15px;
  width: 15px;
  background: gold;
  display: inline-block;
  margin-top: 7px;
}

.star-neg {
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
  height: 15px;
  width: 15px;
  border-width: 5px;
  border-color: black;
  border-style: solid;
  display: inline-block;
  margin-top: 7px;
}
</style>