<script setup lang="ts">
import { ref } from 'vue'

const username = ref('')
const password = ref('')

defineProps<{ buttonText: 'SignIn' | 'SignUp' }>()
const emit = defineEmits<{ (event: 'submit', username: string, password: string): void }>()

const handleSubmit = () => {
  emit('submit', username.value, password.value)
}
</script>

<template>
  <div class="form-container">
    <form @submit.prevent="handleSubmit" class="login-form">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" required />

      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required />

      <button type="submit">{{ buttonText }}</button>
    </form>
  </div>
</template>

<style scoped>
.form-container {
  display: flex;
  justify-content: center;
}

.login-form {
  width: 300px;
  padding: 20px;
}

.login-form label {
  display: block;
  margin-bottom: 10px;
}

.login-form input {
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.login-form button {
  width: 100%;
  padding: 10px;
  background-color: #1a379f;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.login-form button:hover {
  background-color: #45a049;
}
</style>
