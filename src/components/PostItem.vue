<script setup lang="ts">
import { Post } from '../types/post'

defineProps<{ post: Post }>()
</script>
<template>
  <RouterLink :to="`posts/${post.id}`">
    <va-card>
      <va-card-title>{{ post.created }}</va-card-title>
      <va-card-content> {{ post.title }} </va-card-content>
    </va-card>
  </RouterLink>
</template>
