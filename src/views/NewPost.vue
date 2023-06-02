<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { Post } from '../types/post'
import debounce from 'lodash/debounce'
import { marked } from 'marked'
import highlightjs from 'highlight.js'

const post = ref<Post>({
  id: '',
  title: '',
  created: '',
  markdown: '',
  html: ''
})

const content = ref('')
const html = ref('')

const contentEditable = ref<HTMLDivElement>()

onMounted(() => {
  if (!contentEditable.value) {
    throw Error('content not defined')
  }
  contentEditable.value.innerText = 'abc'
  content.value = contentEditable.value.innerText
})

const parseHtml = (content: string) => {
  marked.parse(
    content,
    {
      gfm: true,
      breaks: true,
      highlight: code => {
        return highlightjs.highlightAuto(code).value
      }
    },
    (_, parseResult) => {
      html.value = parseResult
    }
  )
}

watch(
  content,
  debounce(newContent => {
    parseHtml(newContent)
  }, 250),
  { immediate: true }
)

const handleInput = () => {
  if (!contentEditable.value) throw 'No content'
  content.value = contentEditable.value.innerText
}
</script>

<template>
  <input type="text" class="input-text" placeholder="Title here" v-model="post.title" />
  <div class="textarea-container">
    <div contenteditable ref="contentEditable" @input="handleInput" class="textarea-like" />
    <div v-html="html"></div>
  </div>
  <div class="button-container">
    <va-button class="button">Submit</va-button>
  </div>
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
