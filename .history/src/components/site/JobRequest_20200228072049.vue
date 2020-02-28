<template>

    <div>
        <Navigation />
        <Banner />

        <Footer />        
    </div>  

</template>

<script>
import Banner from "../site/signup/Banner";
import Navigation from "../site/Navigation";
import Footer from "../site/Footer";
export default {
    data() {
        return {

        }
    },
    components: {
        Banner,
        Navigation,
        Footer
    }
}
</script>

<style>

</style>