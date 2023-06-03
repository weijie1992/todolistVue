<script setup lang="ts">
import FormInput from './FormInput.vue'
import { useUsersStore } from '../store/users'
import { useModal } from '../composables/modal'

const modal = useModal()
const usersStore = useUsersStore()

const handleSignUp = (username: string, password: string) => {
  console.log('🚀 ~ file: Signup.vue:6 ~ handleSignUp ~ password:', password)
  console.log('🚀 ~ file: Signup.vue:6 ~ handleSignUp ~ username:', username)
  usersStore.signUp(username, password)
  modal.hideModal()
}
</script>
<template>
  <FormInput buttonText="SignUp" @submit="handleSignUp" />
</template>
