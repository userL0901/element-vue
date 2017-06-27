import Vue from 'vue';
import VueRouter from 'vue-router';
import Router from 'vue-router';
import header from '../components/header/header.vue';
import shop from '../components/shop/shop.vue';
import assess from '../components/assess/assess.vue';
import content from '../components/content/content.vue';
Vue.use(Router);
Vue.use(VueRouter);
Vue.use(header);
Vue.use(shop);
Vue.use(assess);
Vue.use(content);

export default new VueRouter({
  // mode: 'history',
  // base: __dirname,
  routes: [
    {
      path: '/',
      component: content
    },
    {
      path: '/shop',
      component: shop
    },
    {
      path: '/assess',
      component: assess
    },
    {
      path: '/content',
      component: content
    }
  ]
});
