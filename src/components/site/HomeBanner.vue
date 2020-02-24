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
						
							<div class="col-md-4 col-sm-4 padd-0">
								<input type="text" class="form-control br-1" placeholder="Skills, Designation, Companies" />
							</div>
								
							<div class="col-md-3 col-sm-3 padd-0">
								<select class="wide form-control br-1">
									<option data-display="Location">All Country</option>
									<option value="1">Allahabad</option>
									<option value="2">India</option>
									<option value="3" disabled>Australia</option>
									<option value="4">United State</option>
								</select>
							</div>
								
							<div class="col-md-3 col-sm-3 padd-0">
								<select class="wide form-control">
									<option data-display="Category">Show All</option>
									<option value="1">Web Design</option>
									<option value="2">Accountant</option>
									<option value="3" disabled>Marketting</option>
									<option value="4">Farmer</option>
								</select>
							</div>
								
							<div class="col-md-2 col-sm-2 padd-0 m-clear">
								<button type="submit" class="btn theme-btn cl-white seub-btn">FIND JOB</button>
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
									<h3>674.058</h3>
									<span>Active Workers</span>
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
									<h3>74.587</h3>
									<span>Companies</span>
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
export default {
    name: "banner",
    data() {},
    components: {},
    methods: {}
}
</script>

<style>

</style>