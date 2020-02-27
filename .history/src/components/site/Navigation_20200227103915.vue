<template>
  
    <!-- ======================= Start Navigation ===================== -->
		<nav class="navbar navbar-default navbar-mobile navbar-fixed white no-background bootsnav">
			<div class="container">
			
				<!-- Start Logo Header Navigation -->
				<div class="navbar-header">
					<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
						<i class="fa fa-bars"></i>
					</button>
					<a class="navbar-brand" href="index.html">
						<img src="assets/img/logo-light.png" class="logo logo-display" alt="">
						<img src="assets/img/logo.png" class="logo logo-scrolled" alt="">
					</a>

				</div>
				<!-- End Logo Header Navigation -->

				<!-- Collect the nav links, forms, and other content for toggling -->
				<div class="collapse navbar-collapse" id="navbar-menu">
				
					<ul class="nav navbar-nav navbar-left" data-in="fadeInDown" data-out="fadeOutUp">
					
						<li class="dropdown">
							<a href="javascript:void(0)" @click="home()" class="dropdown-toggle" data-toggle="dropdown">Home</a>
						</li>
					
						<li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown">Employer</a>
						</li>
						
						<li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown">Candidate</a>
						</li>
						
						<li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown">Extra</a>
						</li>
						
						<li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown">Elements</a>
							<ul class="dropdown-menu animated fadeOutUp">
								<li><a href="icons.html">Icons</a></li>
								<li><a href="404.html">404</a></li>
								<li><a href="pricing.html">Pricing</a></li>
								<li><a href="job-detail.html">Job Detail</a></li>
								<li><a href="blog.html">Blog</a></li>
								<li><a href="blog-detail.html">Blog Detail</a></li>
								<li><a href="contact.html">Contact</a></li>
								<li><a href="component.html">Component</a></li>
								<li><a href="typography.html">Typography</a></li>
							</ul>
						</li>
						
					</ul>
					
					<ul class="nav navbar-nav navbar-right">
						<li class="br-right"><a href="javascript:void(0)"  data-toggle="modal" data-target="#signin"><i class="login-icon ti-user"></i>Login</a></li>
						<!-- <li class="sign-up"><a href="javascript:void(0)"  data-toggle="modal" class="btn-signup red-btn" data-target="#signup-option"><i class="ti-briefcase"></i>Login</a></li> -->
						<li class="sign-up"> <a class="btn-signup red-btn" data-toggle="modal" data-target="#signup-options" href="javascript:void(0)"> <span class="ti-briefcase"></span> Sign Up </a></li>
					</ul>
						
				</div>
				<!-- /.navbar-collapse -->
			</div>   
		</nav>
		<!-- ======================= End Navigation ===================== -->

</template>

<script>
import Custombox from "custombox";
export default {
	data() {
		return {

		}
	},
	methods: {
		signup_box() {

			let modal = new Custombox.modal({
			content: {
				effect: 'fadein',
				target: '#signup-option'
			}
			});

			modal.open();
		},

		home() {

			this.$route.push("/")

		}
	}

}
</script>

<style>

</style>