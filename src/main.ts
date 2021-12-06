import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import VuePageTransition from "vue-page-transition";

Vue.use(VuePageTransition);

import "material-design-icons-iconfont/dist/material-design-icons.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
