import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../home/HomePage.vue';
import RobotBuilder from '../builder/RobotBuilder.vue';
import PartInfo from '../parts/PartInfo.vue';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: HomePage,
  }, {
    path: '/builder',
    name: 'Builder',
    component: RobotBuilder,
  }, {
    path: '/parts/:partType/:id',
    name: 'Parts',
    component: PartInfo,
  }],
});
