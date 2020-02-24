<template>

    <div class="site">
        
        <Navigation />

        <HomeBanner />

        <Jobs />

        <JobsCategory />

        <NewsLetter />

        <Footer />

        <SignIn />
    

    </div>
    
</template>

<script>

import Navigation from "../components/site/Navigation";
import HomeBanner from "../components/site/HomeBanner";
import Jobs from "../components/site/Jobs";
import JobsCategory from "../components/site/JobsCategory";
import NewsLetter from "../components/site/NewsLetter";
import Footer from "../components/site/Footer";
import SignIn from "../components/site/SignIn";

export default {
    name: "site",
    data() {
        return {
            title: "Home Page"
        }
    },
    components: {
        Navigation,
        HomeBanner,
        Jobs,
        JobsCategory,
        NewsLetter,
        Footer,
        SignIn
    },
    methods: {

    }
}
</script>

<style scoped>

    .site {
        /* background: black; */
    }

</style>