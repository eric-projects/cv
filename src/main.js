import Vue from "vue";
import less from "less";
import { Button, Tag, message, Divider } from "ant-design-vue";
import "ant-design-vue/dist/antd.less";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(less);
Vue.use(Button);
Vue.use(Tag);
Vue.use(Divider);

Vue.prototype.$message = message;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
