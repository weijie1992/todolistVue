<script setup lang="ts">
import { usePostsStore } from '../store/posts'
import { useRoute } from 'vue-router'
import { Post } from '../types/post'

const route = useRoute()
const postId: string = route.params.id as string

const postsStore = usePostsStore()
const currentPost: Post = postsStore.posts.filter((post: Post) => post.id === postId)[0]
if (!currentPost) {
  throw Error(`Post with ${postId} not found`)
}
</script>

<template>
  <div>
    <va-button :to="`${postId}/edit`">Edit</va-button>
    <h1>{{ currentPost.title }}</h1>
    <div v-html="currentPost.html" />
  </div>
</template>
