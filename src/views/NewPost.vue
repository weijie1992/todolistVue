<script setup lang="ts">
import { ref } from 'vue'
import { Post } from '../types/post'
import { usePostsStore } from '../store/posts'
import { useRouter } from 'vue-router'
import PostWriter from '../components/PostWriter.vue'

const post = ref<Post>({
  id: '',
  title: '',
  created: '',
  markdown: '',
  html: ''
})

const router = useRouter()

const postStore = usePostsStore()

const handleSubmit = (post: Post) => {
  postStore.addTask(post)
  router.push({ name: 'home' })
}
</script>

<template>
  <PostWriter :post="post" @submit="handleSubmit" />
</template>

<style scoped>
.input-text {
  margin-top: 25px;
  width: 100%;
  /* Occupy the full width of the parent container */
  max-width: 100%;
  /* Limit the width to the maximum width of the parent container */
  box-sizing: border-box;
  /* Include padding and border in the width calculation */
  padding: 8px;
  /* Add some padding for better visibility */
  border: 1px solid #ccc;
  /* Add a border */
  transition: border-color 0.3s;
  /* Add a transition for smooth effect */
  height: 2.5rem;
}

.input-text:focus {
  border-color: #00a0e9;
  /* Customize the border color when input is focused */
  outline: none;
  /* Remove the default focus outline */
}

.textarea-container {
  margin-top: 25px;
  display: flex;
  /* Use flexbox to create a horizontal layout */
  width: 100%;
  /* Occupy the full width of the parent container */
}

.textarea {
  flex-grow: 1;
  /* Distribute the width equally among the textarea elements */
  box-sizing: border-box;
  /* Include padding and border in the width calculation */
  padding: 8px;
  /* Add some padding for better visibility */
  border: 1px solid #ccc;
  /* Add a border */
  resize: vertical;
  /* Allow vertical resizing of the textarea */
  height: 60vh;
}

.button-container {
  display: flex;
  justify-content: flex-end;
  /* Align the button to the right side */
  margin-top: 8px;
  /* Add margin to separate the button from the textarea */
}

.textarea-like {
  width: 50%;
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px;
  font-family: Arial, sans-serif;
  font-size: 14px;
  line-height: 1.5;
  min-height: 100px;
  resize: vertical;
  overflow-y: auto;
}
</style>
