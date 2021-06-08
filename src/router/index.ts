import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import EventDetails from '../views/event/Details.vue';
import EventEdit from '../views/event/Edit.vue';
import EventRegister from '../views/event/Register.vue';
import EventLayout from '../views/event/Layout.vue';
import About from '../views/About.vue';
import NotFound from '../views/NotFound.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/events',
    name: 'Events',
    props: (route) => ({ page: Number(route.query.page) || 1 }),
    component: () => import(/* webpackChunkName: "events" */ '../views/Events.vue'),
  },
  {
    path: '/about-us',
    name: 'About',
    component: About,
  },
  {
    path: '/about',
    redirect: { name: 'About' },
  },
  {
    path: '/event/:id',
    component: EventLayout,
    props: (route) => ({ id: Number(route.params.id) }),
    children: [
      {
        path: '',
        name: 'EventDetails',
        component: EventDetails,
      },
      {
        path: 'edit',
        name: 'EventEdit',
        component: EventEdit,
      },
      {
        path: 'register',
        name: 'EventRegister',
        component: EventRegister,
      },
    ],
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  },
  {
    path: '/404/:resource',
    name: '404Resource',
    component: NotFound,
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
