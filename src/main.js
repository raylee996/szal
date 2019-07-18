// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "@/store"
import "babel-polyfill"
import "common/less/base.less"
import "swiper/dist/css/swiper.min.css"
require("jquery-mousewheel")($);
require('malihu-custom-scrollbar-plugin')($);

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    if (to.path) {
        _hmt.push(['_trackPageview', to.fullPath]);
    }
    next();
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})



