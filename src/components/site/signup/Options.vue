<template>
  
    <!-- Sign Up Window Code -->
		<div class="modal fade" id="signup-options" tabindex="-1" role="dialog" aria-labelledby="myModalLabel1" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content" id="myModalLabel1">
					<div class="modal-body">
						<div class="text-center"><img src="assets/img/logo.png" alt="" class="img-responsive"></div>
							
						<div class="tab-content signup-options">
						
							<div class="container-fluid">
								<div class="row">
									<div class="col-md-6">

										<router-link to="/signup/1">
											<div class="card border-success mb-3">
												<div class="card-header text-center">
													<h5>Client</h5>
												</div>
												<div class="card-body text-success">
													<!-- <h5 class="card-title">Success card title</h5> -->
													<p class="card-text text-center pt-3">
														<i class="fa fa-briefcase fa-4x"></i>
													</p>
												</div>
											</div>
										</router-link>

									</div>
									<div class="col-md-6">

										<router-link to="/signup/2">
											<div class="card border-success mb-3">
												<div class="card-header text-center">
													<h5>Service Provider</h5>
												</div>
												<div class="card-body text-success">
													<!-- <h5 class="card-title">Success card title</h5> -->
													<p class="card-text text-center pt-3">
														<i class="fa fa-black-tie fa-4x"></i>
													</p>
												</div>
											</div>
										</router-link>

									</div>
								</div>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</div>   
    <!-- End Sign Up Window -->


</template>

<script>
export default {
    mounted() {
        // alert("Success")
    }
}
</script>

<style>

	.signup-options {
		/* background: black;
		height: 200px; */
	}

</style>