<template>
  

    <!-- ================= Category start ========================= -->
		<section class="image-bg" style="background:url(assets/img/banner-2.jpg) no-repeat;" data-overlay="7">
			<div class="container">
			
				<div class="row" data-aos="fade-up">
					<div class="col-md-12">
						<div class="heading light">
							<h2>Browse By Category</h2>
							<p>Each month, more than 7 million Jobhunt turn to website in their search for work, making over<br>160,000 applications every day.</p>
						</div>
					</div>
				</div>
				
				<div class="row">
					
					<div v-for="service_category in service_categories" :key="service_category.id" class="col-md-3 col-sm-6">
						<div class="category-box" data-aos="fade-up">
							<div class="category-desc">
								<div class="category-icon">
									<i class="icon-bargraph" aria-hidden="true"></i>
									<i class="icon-bargraph abs-icon" aria-hidden="true"></i>
								</div>

								<div class="category-detail category-desc-text">
									<router-link to="/" title=""><h4 v-text="service_category.name"></h4></router-link>
									<!-- <p>122 Jobs</p> -->
								</div>
							</div>
						</div>
					</div>
					
					<div class="col-md-12 mrg-top-40">
						<div class="text-center">
							<a href="#" class="btn theme-btn btn-m">Browse All Category</a>
						</div>
					</div>
					
				</div>
				
			</div>
		</section>

    <!-- ================= Category start ========================= -->

</template>

<script>

import { urlObject } from "../../url";
import axios from "axios";

export default {
	data() {
		return {
			service_categories: []
		}
	},
	methods: {
		get_service_category() {
			axios.get(`${urlObject.baseUrl}/service/all`)
			.then((resp) => {
				this.service_categories = resp.data.response
			})
			.catch(error => console.log(error))
		}
	},
	created() {
		this.get_service_category()
	}
}
</script>

<style>

</style>