import Vue from 'vue';
import Vuex from 'vuex';

import RobotModule from './modules/robots';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    robots: RobotModule,
  },
});
