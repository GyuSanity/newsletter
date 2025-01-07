import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import NewsLetterView from '../views/NewsLetter.vue'
import AOS from "aos";
import 'aos/dist/aos.css';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: NewsLetterView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  AOS.init(); // Initialize AOS
  next();
})

export default router
