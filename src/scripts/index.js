import Vue from 'vue';
import App from './Component/App.vue';
import BootstrapVue from 'bootstrap-vue';
import '../styles/index.scss';

Vue.config.productionTip = false

Vue.use(BootstrapVue)

new Vue({
  render: h => h(App)
}).$mount('#app')
