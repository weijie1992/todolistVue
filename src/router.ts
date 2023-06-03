import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import NewPost from './views/NewPost.vue'
import ViewPost from './views/ViewPost.vue'
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home'
    },
    {
      path: '/posts/new',
      component: NewPost,
      name: 'newPost'
    },
    {
      path: '/posts/:id',
      component: ViewPost,
      name: 'viewPost'
    }
  ]
})
