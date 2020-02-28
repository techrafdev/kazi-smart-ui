<template>


    <!-- Sign Up Window Code -->
		<div class="modal fade" id="signin" tabindex="-1" role="dialog" aria-labelledby="myModalLabel1" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content" id="myModalLabel1">
					<div class="modal-body">
						<div class="text-center"><img src="assets/img/logo.png" alt="" class="img-responsive"></div>
						
						<!-- Nav tabs -->
						<!-- <ul class="nav nav-tabs nav-advance theme-bg" role="tablist">
							<li class="nav-item active">
								<a class="nav-link" data-toggle="tab" href="#employer" role="tab">
								<i class="ti-user"></i> Employer</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" data-toggle="tab" href="#candidate" role="tab">
								<i class="ti-user"></i> Candidate</a>
							</li>
						</ul> -->
						<!-- Nav tabs -->
							
						<!-- Tab panels -->
						<div class="tab-content">
						
							<!-- Employer Panel 1-->
							<div class="tab-pane fade in show active" id="employer" role="tabpanel">
								<form>
									
									<div class="form-group">
										<label>Phone Number</label>
										<input type="text" :class="{'form-field-error' : form.validations.msisdn_error}" class="form-control form-control-c" v-model="form.msisdn" placeholder="Phone Number">
									</div>
									
									<div class="form-group">
										<label>Password</label>
										<input type="password"  :class="form.validations.password_error ? 'form-field-error' : ''"  class="form-control form-control-c" v-model="form.password" placeholder="*********">
									</div>
									
									<div class="form-group">
										<span style="opacity: 0;" class="custom-checkbox">
											<input type="checkbox" id="4">
											<label for="4"></label>Remember me
										</span>
										<a href="#" title="Forget" class="fl-right">Forgot Password?</a>
										<!-- <a class="fl-right" title="Forget" data-toggle="tab" href="#candidate" role="tab"> -->
									</div>
									<div class="form-group text-center">
										<button @click="submit()" type="button" class="btn theme-btn full-width btn-m">
											<div v-if="form.loading" class="loader">
												<img style="height: 20px; margin-top: 0; margin-bottom: 0;" src="assets/img/loader.gif" alt="Loader">
											</div>

											<div v-if="!form.loading" class="login">
												LogIn
											</div>

										</button>
									</div>
									
								</form>
								
								<!-- <div class="log-option"><span>OR</span></div>
								
								<div class="row mrg-bot-20">
									<div class="col-md-6">
										<a href="#" title="" class="fb-log-btn log-btn"><i class="fa fa-facebook"></i>Sign In With Facebook</a>
									</div>
									<div class="col-md-6">
										<a href="#" title="" class="gplus-log-btn log-btn"><i class="fa fa-google-plus"></i>Sign In With Google+</a>
									</div>
								</div> -->
					
							</div>
							<!--/.Panel 1-->
							
							<!-- Candidate Panel 2-->
							<!-- <div class="tab-pane fade" id="candidate" role="tabpanel">
								<form>
									
									<div class="form-group">
										<label>User Name</label>
										<input type="text" class="form-control" placeholder="User Name">
									</div>
									
									<div class="form-group">
										<label>Password</label>
										<input type="password" class="form-control" placeholder="*********">
									</div>
									
									<div class="form-group">
										<span class="custom-checkbox">
											<input type="checkbox" id="44">
											<label for="44"></label>Remember me
										</span>
										<a href="#" title="Forget" class="fl-right">Forgot Password?</a>
									</div>
									<div class="form-group text-center">
										<button type="button" class="btn theme-btn full-width btn-m">LogIn </button>
									</div>
									
								</form>
								
								<div class="log-option"><span>OR</span></div>
								
								<div class="row mrg-bot-20">
									<div class="col-md-6">
										<a href="#" title="" class="fb-log-btn log-btn"><i class="fa fa-facebook"></i>Sign In With Facebook</a>
									</div>
									<div class="col-md-6">
										<a href="#" title="" class="gplus-log-btn log-btn"><i class="fa fa-google-plus"></i>Sign In With Google+</a>
									</div>
								</div>
								
							</div> -->
							<!--/.Panel 2-->
							
						</div>
						<!-- Tab panels -->
					</div>
				</div>
			</div>
		</div>   
    <!-- End Sign Up Window -->

</template>

<script>

import $ from 'jquery';
import axios from "axios";
import { urlObject } from "../../url"

export default {
    name: "SignIn",
    data() {
        return {
            form: {
				loading: false,
				msisdn: '',
				password: '',
				validations: {
					msisdn_error: false,
					password_error: false
				}
			}
        }
    },
    components: {

    },
    methods: {
		submit() {
			if(this.form.msisdn.length <= 0) {
				
				$(".modal-content").addClass("animated").addClass("shake");

				this.form.validations.msisdn_error = true;

				setTimeout(function() {
					$(".modal-content").removeClass("animated").removeClass("shake");
				}, 500)

				console.log("Phone Number Required");

			} else if(this.form.msisdn.length < 10) {

				$(".modal-content").addClass("animated").addClass("shake");

				this.form.validations.msisdn_error = true;

				setTimeout(function() {
					$(".modal-content").removeClass("animated").removeClass("shake");
				}, 500)

				console.log("Invalid Phone Number")
			} else if(this.form.password <= 0) {

				$(".modal-content").addClass("animated").addClass("shake");

				this.form.validations.msisdn_error = false;
				this.form.validations.password_error = true;


				setTimeout(function() {
					$(".modal-content").removeClass("animated").removeClass("shake");
				}, 500)

				console.log("Password Required") 

			} else if(this.form.password.length < 6) {

				$(".modal-content").addClass("animated").addClass("shake");

				this.form.validations.msisdn_error = false;
				this.form.validations.password_error = true;


				setTimeout(function() {
					$(".modal-content").removeClass("animated").removeClass("shake");
				}, 500)

				console.log("Invalid Password")

			} else {

				this.form.validations.msisdn_error = false;
				this.form.validations.password_error = false;

				this.form.loading = true;

				// console.log(this.form)

				let auth_data = {
					password: this.form.password,
					msisdn: this.form.msisdn
				}

				axios.post(`${urlObject.baseUrl}/user/login`, auth_data)
				.then( (resp) => {
					var response = resp.data

					if(response.status == 104) {

						$(".modal-content").addClass("animated").addClass("shake");

						this.form.validations.msisdn_error = true;
						this.form.validations.password_error = true;


						setTimeout(function() {
							$(".modal-content").removeClass("animated").removeClass("shake");
						}, 500)

						this.form.loading = false;

					} else if(response.status == 200) {
						alert("Success")
					}

					console.log(response)
				} ).catch(err => console.log(err))

			}
			
		}
    }
}
</script>

<style>

	.form-field-error {
		border: .5px solid red;
	}

	.form-control-c {
		border-radius: 10px;
	}

</style>