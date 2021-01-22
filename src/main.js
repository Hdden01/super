import Vue from 'vue'
import App from './App.vue'
import { Icon } from 'vant';
Vue.use(Icon);
import router from './router';
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
