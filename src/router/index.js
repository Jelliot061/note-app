import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/note',
    name: 'note',
    component: () => import('../views/NoteView.vue')
  },
  {
    path: '/create-note',
    name: 'create-note',
    component: () => import('../views/CreateNote.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/logIn.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
