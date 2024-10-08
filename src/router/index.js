import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/todos',
    name: 'todos.index',
    component: () => import('../views/Todos/TodoView.vue')
  },
  {
    path: '/todos/create',
    name: 'todos.create',
    component: () => import('../views/Todos/AddTodoView.vue')
  },
  {
    path: '/todos/:id/edit',
    name: 'todos.edit',
    component: () => import('../views/Todos/EditTodoView.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
