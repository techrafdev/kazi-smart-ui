<template>
    <section class="gray">
        <div class="container">
            <form class="c-form">

                <!-- Resume Content -->
                <div class="box">
                    <div class="box-header">
                        <h4>Job Request Data</h4>
                    </div>
                    <div class="box-body">
                        <div class="box-body">
							<div class="row">
                                <div class="col-sm-6 col-md-6">
									<label>Date To Start</label>
									<datepicker v-model="form.start_date" placeholder="Select Date To Start" class="date-picker"></datepicker>
								</div>
                                <div class="col-sm-6 col-md-6">
									<label>Job Location</label>
									
                                   <div class="btn-box">
                                        <button class="btn btn-success">Find Me</button>
                                        <button class="btn btn-success">Use Google Maps</button>
                                   </div>

								</div>
							</div>
                        </div>
                        <div class="row">
                            
                            <div class="col-sm-12">
                                <label>Job Description</label>
                                <textarea class="form-control height-120 textarea" placeholder="Job Description"></textarea>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
                <div class="text-center">
                    <button type="submit" class="btn btn-m theme-btn">Submit & Exit</button>
                </div>

            </form>
        </div>
    </section>
</template>

<script>

import Datepicker from 'vuejs-datepicker';

export default {
    data() {
        return {
            form: {
                start_date: new Date()
            }
        }
    },
    components: {
        Datepicker
    }
}
</script>

<style>
    .date-picker input {
        height: 50px;
        border-radius: 10px;
        text-align: center;
        width: 100%;
    }

    .btn-box {
        display: block;
    }
</style>