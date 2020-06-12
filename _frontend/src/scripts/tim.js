import 'core-js/features/promise'; // polyfill for Vuex
import Vue from 'vue';

import '../components/async';
import '../components/global';
import '../styles/tim.scss';
import BootstrapBreakpoints from './helpers/BootstrapBreakpoints';
import store from './store';
import UserAgentParser from './helpers/UserAgentParser';

// Don't warn about using the dev version of Vue in development.
Vue.config.productionTip = process.env.NODE_ENV === 'production';

new Vue({
  store,
}).$mount('#app');

new UserAgentParser().addClasses();
new BootstrapBreakpoints().detect();
