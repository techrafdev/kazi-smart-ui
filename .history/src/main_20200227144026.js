import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes';
import VueCookies from 'vue-cookies'
import VueJwtDecode from 'vue-jwt-decode'


Vue.use(VueRouter)
Vue.use(VueCookies)
Vue.use(VueJwtDecode)

Vue.$cookies.config('7d')

Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
