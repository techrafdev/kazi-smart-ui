<template>
    <section class="gray">
        <div class="container">
            <form class="c-form">

                <!-- Resume Content -->
                <div class="box">
                    <div class="box-header">
                        <h4>Resume Content</h4>
                    </div>
                    <div class="box-body">
                        <div class="box-body">
							<div class="row">
                                <div class="col-sm-4">
									<label>First Name</label>
									<datepicker class="form-control"></datepicker>
								</div>
							</div>
                        </div>
                        <div class="row">
                            
                            <div class="col-sm-12">
                                <label>Content</label>
                                <textarea class="form-control height-120 textarea" placeholder="Resume"></textarea>
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
                start_date: new Date(2016, 9,  16)
            }
        }
    },
    components: {
        Datepicker
    }
}
</script>

<style>

</style>