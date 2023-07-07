import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieList from '../views/MovieListView.vue'
import HomeView from '../views/HomeView.vue'
import TechnologyView from '../views/TechnologyView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/movies',
    name: 'Movies',
    component: MovieList
  },
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/technology',
    name: 'Technology',
    component: TechnologyView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
