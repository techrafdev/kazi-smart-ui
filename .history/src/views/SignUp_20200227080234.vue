<template>
  <div class="text">
      <Navigation />
      <Banner />
      <SignUpForm />
      <Footer />

    <Options />

      <SignIn />

  </div>
</template>

<script>

import Navigation from "../components/site/Navigation";
import Banner from "../components/site/signup/Banner";
import SignUpForm from "../components/site/signup/SignUpForm";
import Footer from "../components/site/Footer";
import SignIn from "../components/site/SignIn";
import Options from "../components/site/signup/Options";

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
        SignIn,
        Options
    },
    methods: {

    }
}
</script>

<style>

</style>