/* eslint-disable semi */
import Vue from 'vue'
import Router from 'vue-router'

const routerOptions = [
  {path: '/', component: 'Home'},
  {path: '/about', component: 'About'},
  {path: '*', component: 'NotFound'}
];

const routes = routerOptions.map(route => {
  return {
    ...route,
    // eslint-disable-next-line no-template-curly-in-string
    component: () => {
      return import(`@/components/${route.component}.vue`);
    }
  }
});

Vue.use(Router);

export default new Router({
  routes,
  mode: 'history'
})
