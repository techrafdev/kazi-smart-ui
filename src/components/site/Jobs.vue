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
						Featured Jobs</a>
					</li>
				</ul>
				
				<div class="tab-content">
					
					<!-- Recent Job -->
					<div class="tab-pane fade in show active" id="recent" role="tabpanel">
						<div class="row">
						
							<!-- Single Job -->
							<div v-for="recent_job in recent_jobs" :key="recent_job.profile_id" class="col-lg-3 col-md-4 col-sm-6">
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
								
								<!-- <div class="contact-action">
									<a href="#" class="btn-square-40" data-toggle="tooltip" title="Facebook">
										<i class="facebook-cl fa fa-facebook" aria-hidden="true"></i>
									</a>
									<a href="#" class="btn-square-40" data-toggle="tooltip" title="Twitter">
										<i class="twitter-cl fa fa-twitter" aria-hidden="true"></i>
									</a>
									<a href="#" class="btn-square-40" data-toggle="tooltip" title="Google Plus">
										<i class="google-plus-cl fa fa-google-plus" aria-hidden="true"></i>
									</a>
									<a href="#" class="btn-square-40" data-toggle="tooltip" title="Instagram">
										<i class="instagram-cl fa fa-instagram" aria-hidden="true"></i>
									</a>
								</div> -->
								
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
export default {
    name: "jobs",
    data() {
		return {
			recent_jobs: [
				{
					user_full_name: "Kelvin Rapahel Kingara",
					profile_id: 2,
					msisdn: "07891*******",
					user_profile_image: "url",
					location: "Location",
					service_category: "Mechanic",
					date_completed: "Date",
					job_rating: 5
				},
				{
					user_full_name: "Kelvin Rapahel Kingara",
					profile_id: 2,
					msisdn: "07891*******",
					user_profile_image: "url",
					location: "Location",
					service_category: "Mechanic",
					date_completed: "Date",
					job_rating: 5
				},
				{
					user_full_name: "Kelvin Rapahel Kingara",
					profile_id: 2,
					msisdn: "07891*******",
					user_profile_image: "url",
					location: "Location",
					service_category: "Mechanic",
					date_completed: "Date",
					job_rating: 5
				},
				{
					user_full_name: "Kelvin Rapahel Kingara",
					profile_id: 2,
					msisdn: "07891*******",
					user_profile_image: "url",
					location: "Location",
					service_category: "Mechanic",
					date_completed: "Date",
					job_rating: 5
				},
				{
					user_full_name: "Kelvin Rapahel Kingara",
					profile_id: 2,
					msisdn: "07891*******",
					user_profile_image: "url",
					location: "Location",
					service_category: "Mechanic",
					date_completed: "Date",
					job_rating: 5
				},
				{
					user_full_name: "Kelvin Rapahel Kingara",
					profile_id: 2,
					msisdn: "07891*******",
					user_profile_image: "url",
					location: "Location",
					service_category: "Mechanic",
					date_completed: "Date",
					job_rating: 5
				}
			],
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
					profile_id: 2,
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
    methods: {}
}
</script>

<style>

</style>