<template>
  <div class="text">
      <Navigation />
      <Banner />
      <SignUpForm />
      <Footer />
      <SignIn />
  </div>
</template>

<script>
import Navigation from "../components/site/Navigation";
import Banner from "../components/site/signup/Banner";
import SignUpForm from "../components/site/signup/SignUpForm";
import Footer from "../components/site/Footer";
import SignIn from "../components/site/SignIn";
export default {
    name : "sign_up",
    data() {
        return {
            title: "SignUp"
        }
    },
    components: {
        Navigation,
        Banner,
        SignUpForm,
        Footer,
        SignIn
    },
    methods: {

    }
}
</script>

<style>

</style>