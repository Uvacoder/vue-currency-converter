import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./style/index.css";
import { apolloProvider } from "./vue-apollo-client";

Vue.config.productionTip = false;

new Vue({
  router,
  apolloProvider,
  render: (h) => h(App),
}).$mount("#app");
