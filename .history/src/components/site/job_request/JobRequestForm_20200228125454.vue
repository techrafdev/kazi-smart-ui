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
                                        <button @click="findMe" type="button" class="btn btn-success">
                                            <img v-if="loading" class="loader" src="https://gifimage.net/wp-content/uploads/2018/04/loader-gif-transparent-background-11.gif" alt="Loader">
                                            <span v-if="!loading || form.location !== null">Find Me</span>
                                            <span v-if="form.location !== null" v-text="form.location"></span>
                                        </button>
                                        <button type="button" class="btn btn-success">Use Google Maps</button>
                                   </div>

								</div>
							</div>
                        </div>
                        <div class="row">
                            
                            <div class="col-sm-12">
                                <label>Job Description</label>
                                <yimo-vue-editor class="editor" v-model="form.description"></yimo-vue-editor>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
                <div class="text-center">
                    <button type="submit" class="btn btn-m theme-btn">Send Request</button>
                </div>

            </form>
        </div>
    </section>
</template>

<script>

import Datepicker from 'vuejs-datepicker';
import YimoVueEditor from 'yimo-vue-editor'

import $ from "jquery";

export default {
    data() {
        return {
            loading: false,
            form: {
                start_date: new Date(),
                description: 'xyz',
                latitude: null,
                longitude: null,
                location: null
            },
            location: null
        }
    },
    components: {
        Datepicker,
        YimoVueEditor
    },
    methods: {

        findMe: function() {

            this.loading = true;
            var self = this;

            $.getJSON("https://api.ipify.org?format=json", function(data) {

            $.getJSON("https://ipapi.co/" + data.ip + "/json", function(data) {

                console.log("Data From ipapi:", data)

                self.form.location = data.city;

                function success(position) {

                    const latitude  = position.coords.latitude;
                    const longitude = position.coords.longitude;

                    self.form.latitude = latitude;
                    self.form.longitude = longitude;

                    self.loading = false;

                }

                function error() {
                    alert('Unable to retrieve your location');
                }

                if (!navigator.geolocation) {
                    alert('Geolocation is not supported by your browser');
                } else {

                    navigator.geolocation.getCurrentPosition(success, error);

                    console.log(self.form)
                }

            });

        });

        },
        get_ip_info() {

            $.getJSON("https://api.ipify.org?format=json", function(data) {

                $.getJSON("https://ipapi.co/" + data.ip + "/json", function(data) {

                    console.log(data)
                    this.location = data.city;

                });

            });

        }
    }
}
</script>

<style>
    .loader {
        height: 20px;
    }
    .date-picker input {
        height: 50px;
        border-radius: 10px;
        text-align: center;
        width: 100%;
    }

    .btn-box {
        display: block;
        display: flex;
        flex-direction: row;

    }

    .btn-box button {
        flex: 1;
        border-radius: 10px;
        height: 50px;
    }

    .wangEditor-container {
        border-radius: 20px;
    }
    .wangEditor-menu-container {
       border-top-left-radius: 10px;
       border-top-right-radius: 10px !important;
    } 
</style>