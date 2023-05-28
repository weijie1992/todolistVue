<script setup lang="ts">
import { Post } from '../types/post'

defineProps<{ post: Post }>()
</script>
<template>
  <va-card>
    <va-card-title>{{ post.title }}-{{ post.created }}</va-card-title>
    <va-card-content> {{ post.html }} </va-card-content>
  </va-card>
</template>
