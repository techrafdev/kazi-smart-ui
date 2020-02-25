<template>
  
    <!-- ====================== Start Signup Form ============= -->
		<section class="gray">
			<div class="container">
				<div class="container">
			
					<div class="log-box">
						<form class="log-form">
							<div v-if="this.purpose == 'client' || this.purpose == 'service'" class="row">
								<div class="col-md-12">
									<div class="form-group">
										<label>Name*</label>
										<input :class="{'form-error' : form.errors.full_name}" type="text" v-model="form.full_name" class="form-control" placeholder="Your Name">
									</div>
								</div>							
							</div>

							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<label>Phone Number*</label>
										<input :class="{'form-error' : form.errors.msisdn}" type="text" class="form-control" v-model="form.msisdn" placeholder="Your Phone Number..">
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label>Email (Optional)</label>
										<input type="email" class="form-control" v-model="form.email" placeholder="Your Email..">
									</div>
								</div>
							</div>

							<div v-if="purpose == 'service'" class="row">

								<div class="col-md-6">
									<div class="form-group">
										<label>Category*</label>
										<select class="wide form-control">
											<option data-display="Location">Information Of Technology</option>
											<option value="1">Hardware</option>
											<option value="2">Machanical</option>
										</select>
									</div>
								</div>

								<div class="col-md-6">
									<div class="form-group">
										<label>ID NUMBER*</label>
										<input type="number" class="form-control" placeholder="Your Id Number...">
									</div>
								</div>

							</div>

							<!-- <div class="row">
								<div class="col-md-12">
									<div class="form-group">
										<label>Service Category</label>
										<vue-select 
											class="vue-select2" 
											name="service_categories.value"
											:options="service_categories" 
											:model.sync="form.service_category_id"
											:searchable="true" 
											language="en-US"
											>
											
										</vue-select>
									</div>
								</div>
							</div> -->
							
							<!-- <div v-if="purpose == 'service'" class="row">
								<div class="col-md-6">
									<div class="form-group">
										<label>ID NUMBER*</label>
										<input type="number" class="form-control" placeholder="Your Id Number...">
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label>Upload ID</label>
										<div class="custom-file-upload">
											<input type="file" id="file" name="id_upload"  />
										</div>
									</div>
								</div>
							</div> -->

							<div v-if="purpose == 'service'" class="form-row">
								<label class="file-lebel">
									<div class="container-fluid">
										<div class="row">
											<div class="col-12">
												<i class="fa fa-cloud-upload fa-2x" aria-hidden="true"></i>
											</div>
										</div>

										<div class="row">
											<div class="col-12">
												<p class="lead-color"> Upload ID </p>
											</div>
										</div>

										<div class="row">
											<div class="col-12">
												<p class="text-file"> Your file here, or browse </p>
											</div>
										</div>

									</div>
									<input type="file" size="60" >
								</label> 
							</div>
							
							<div class="row">
								<div class="col-md-12">
									<div class="form-group text-center mrg-top-15">
										<button type="button" @click="submit()" class="btn theme-btn btn-m">Create An Account</button>
									</div>
								</div>
							</div>
							
						</form>
						
						<!-- <div class="log-option"><span>OR</span></div>
						
						<div class="row">
							<div class="col-md-6">
								<a href="#" title="" class="fb-log-btn log-btn"><i class="fa fa-facebook"></i>SignUP With Facebook</a>
							</div>
							<div class="col-md-6">
								<a href="#" title="" class="gplus-log-btn log-btn"><i class="fa fa-google-plus"></i>SignUp With Google+</a>
							</div>
						</div> -->
						
					</div>
				</div>
				
			</div>
		</section>
		<!-- ====================== End Signup Form ============= -->

</template>

<script>
// import select2 from "select2";
import $ from "jquery";
// import VueSelect from 'vue-select2';
export default {
	data() {
		return {
			purpose: this.$route.params.role,
			service_categories: [
				{
					value: 1,
					text: "Test One"
				}
			],
			form: {
				role: 0,
				full_name: '',
				email: '',
				msisdn: '',
				id_number: '',
				id_number_upload: 0,
				service_category_id: 0,
				errors: {
					full_name: false,
					msisdn: false,
					id_number:false,
					id_number_upload: false,
					service_category_id: false
				}
			}
		}
	},
	components: {
		// "vue-select": require("vue-select2").default
	},
	created() {
		// $(".service_category").select2({
		// 	tags: true
		// });
	},
	methods: {
		submit() {

			var required_data = {}

			if(this.purpose == "client" || this.purpose == "service") {

				if(this.form.full_name.length <= 0) {

					$(".log-box").addClass("animated").addClass("shake");

					this.form.errors.full_name = true

					setTimeout(function() {
						$(".log-box").removeClass("animated").removeClass("shake");
					}, 500)

					console.log("Full Name Required")

				} else if(this.form.full_name.length < 3) {

					$(".log-box").addClass("animated").addClass("shake");

					this.form.errors.full_name = true

					setTimeout(function() {
						$(".log-box").removeClass("animated").removeClass("shake");
					}, 500)


					console.log("Your Name is too short")
				} else if(this.form.msisdn.length <= 0) {

					$(".log-box").addClass("animated").addClass("shake");

					this.form.errors.full_name = false
					this.form.errors.msisdn = true

					setTimeout(function() {
						$(".log-box").removeClass("animated").removeClass("shake");
					}, 500)

					console.log("Phone Number Required")
				} else if(this.form.msisdn.length < 10) {

					$(".log-box").addClass("animated").addClass("shake");

					this.form.errors.full_name = false
					this.form.errors.msisdn = true

					setTimeout(function() {
						$(".log-box").removeClass("animated").removeClass("shake");
					}, 500)

					console.log("Invalid Phone Number")
				} else {
					
					if(this.purpose == "client") {

						required_data = {
							full_name: this.form.full_name,
							msisdn: this.form.msisdn,
							email: this.form.email,
							role: 3
						}

						console.log(required_data);

					} else {

						if(!this.form.id_number) {
							console.log("Your Id is Required")
						} else if(!this.form.id_number_upload) {
							console.log("Id is Required")
						} else if(!this.service_category_id) {
							console.log("Service Category Required")
						} else {

							required_data = {
								full_name: this.form.full_name,
								msisdn: this.form.msisdn,
								email: this.form.email,
								role: 2,
								id_number: this.form.id_number,
								id_number_upload: this.form.id_number_upload,
								service_category_id: this.form.service_category_id
							}

							console.log(required_data);

						}

					}

				}

			} else {
				alert("Error")
			}
		}
	}
}
</script>

<style>

	.form-error {
		border-color: red;
	}

	.file-input {
        display: none;
    }
    .file-lebel {
        padding: 10px;
        display: table;
        color: #fff;
        width: 100%;
        border: 1px dashed #36A9CC;
        color: #36A9CC;
        text-align: center;
        cursor: pointer;
     }
    input[type="file"] {
        display: none;
    }

</style>