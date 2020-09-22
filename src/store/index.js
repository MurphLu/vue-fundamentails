import Vue from 'vue';
import Vuex from 'vuex';

import RobotModule from './modules/robot';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    robot: RobotModule,
  },
});
