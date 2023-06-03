<script setup lang="ts">
import PostWriter from '../components/PostWriter.vue'
import { usePostsStore } from '../store/posts'
import { useRoute, useRouter } from 'vue-router'
import { Post } from '../types/post'

const router = useRouter()

const route = useRoute()
const postId = route.params.id as string

const postsStore = usePostsStore()
const currentPost: Post = postsStore.posts.filter((post: Post) => post.id === postId)[0]

const handleEdit = (post: Post) => {
  postsStore.editTask(post)
  router.push({ name: 'home' })
}
</script>
<template>
  <PostWriter :post="currentPost" @submit="handleEdit" />
</template>
