<template>

    <!-- ======================= Start Banner ===================== -->
		<div class="main-banner" style="background-image:url(assets/img/banner-1.jpg);" data-overlay="8">
			<div class="container">
				<div class="col-md-12 col-sm-12">
				
					<div class="caption text-center cl-white">
						<h2>Find Your Career. You Deserve it.</h2>
						<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias</p>
					</div>
					
					<form>
						<fieldset class="home-form-1">
						
							<!-- <div class="col-md-4 col-sm-4 padd-0">
								<input type="text" class="form-control br-1" placeholder="Skills, Designation, Companies" />
							</div> -->
								
							<div class="col-md-3 col-sm-3 padd-0">
								<select id="service" class="wide form-control br-1">
									<!-- <option data-display="Location">All Country</option> -->
									<option v-for="service in services" :key="service.id" :value="service.id" v-text="service.name"></option>
								</select>
							</div>
								
							<div class="col-md-3 col-sm-3 padd-0">
								<select id="location" class="wide form-control">
									<option data-display="Category">Show All</option>
									<option value="1">Web Design</option>
									<option value="2">Accountant</option>
									<option value="3" disabled>Marketting</option>
									<option value="4">Farmer</option>
								</select>
							</div>
								
							<div class="col-md-2 col-sm-2 padd-0 m-clear">
								<button type="button" @click="submit()" class="btn theme-btn cl-white seub-btn">FIND JOB</button>
							</div>
								
						</fieldset>
					</form>
					
					<div class="row">
					
						<div class="col-md-4 col-sm-4">
							<div class="cmp-overview">
								<div class="cmp-icon">
									<i class="cmp-i icon-profile-male"></i>
									<i class="fa fa-check"></i>
								</div>
								<div class="cmp-detail">							
									<h3 v-text="total_active_service_providers"></h3>
									<span>Active Service Providers</span>
								</div>
							</div>
						</div>
						
						<div class="col-md-4 col-sm-4">
							<div class="cmp-overview">
								<div class="cmp-icon">
									<i class="cmp-i icon-desktop"></i>
									<i class="fa fa-check"></i>
								</div>
								<div class="cmp-detail">							
									<h3 v-text="total_clients"></h3>
									<span>Clients</span>
								</div>
							</div>
						</div>
						
						<div class="col-md-4 col-sm-4">
							<div class="cmp-overview">
								<div class="cmp-icon">
									<i class="cmp-i icon-global"></i>
									<i class="fa fa-check"></i>
								</div>
								<div class="cmp-detail">							
									<h3>47</h3>
									<span>Countries</span>
								</div>
							</div>
						</div>
						
					</div>
				</div>
			</div>
		</div>
    <!-- ======================= End Banner ===================== -->
  
</template>

<script>

import $ from "jquery";
import axios from "axios";
import { urlObject } from "../../url";

export default {
    name: "banner",
    data() {
		return {
			total_clients: 0,
			total_active_service_providers: 0,
			services: []
		}
	},
	components: {},
	mounted() {
		this.get_all_services();
		this.get_active_clients();
		this.get_active_providers();
		this.auth(); 
	},
    methods: {

		auth() {
			let token = this.$cookies.get("token");

			console.log(this.$jwtDec(token))
		},

		get_all_services() {
			axios.get(`${urlObject.baseUrl}/service/all`)
			.then((response) => {
				this.services = response.data.response
			})
			.catch(error => console.log(error))
		},
		get_active_clients() {
			axios.get(`${urlObject.baseUrl}/user/active/users`)
			.then( (resp) => {
				this.total_clients = resp.data.response.active_users;
			} )
		},
		get_active_providers() {
			axios.get(`${urlObject.baseUrl}/user/active/providers`)
			.then( (resp) => {
				this.total_active_service_providers = resp.data.response.active_providers;
			} )
		},
		submit() {

			let service_id = $("#service").val();
			let location = $("#location").val();

			console.log(service_id, location)

			this.$router.push({
				path: '/service-providers/search/'+ service_id + "/" + location
			})

		}
	}
}
</script>

<style>

</style>