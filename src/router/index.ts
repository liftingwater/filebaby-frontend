import { createRouter, createWebHistory } from 'vue-router'
import Home from '../../src/views/Home.vue'
import Upload from '../../src/views/Upload.vue'
import MyFiles from '../../src/views/MyFiles.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/upload', name: 'Upload', component: Upload },
  { path: '/files', name: 'MyFiles', component: MyFiles },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
