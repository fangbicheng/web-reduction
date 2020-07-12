import Vue from 'vue';
import Router from 'vue-router';
import ReductionList from '@/pages/ReductionList';
import ReductionDetail from '@/pages/ReductionDetail';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ReductionList',
      component: ReductionList,
    },
    {
      path: '/reductionDetail/:id',
      name: 'ReductionDetail',
      component: ReductionDetail,
    },
  ],
});
