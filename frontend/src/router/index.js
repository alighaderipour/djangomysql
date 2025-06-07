import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Employees from '../views/Employees.vue'
import AddEmployee from '../views/AddEmployee.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/employees', component: Employees },
  { path: '/add_employee', component: AddEmployee },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
