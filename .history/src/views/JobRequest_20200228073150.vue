<template>

    <div>
        <Navigation />
        <Banner />



        <Footer />        
    </div>  

</template>

<script>
import Banner from "../components/site/signup/Banner";
import Navigation from "../components/site/Navigation";
import Footer from "../components/site/Footer";
export default {
    data() {
        return {

        }
    },
    components: {
        Banner,
        Navigation,
        Footer
    },
    methods: {
        get_provider_info() {
            
        }
    }
}
</script>

<style>

</style>