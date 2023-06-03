<script setup lang="ts">
import FormInput from './FormInput.vue'
import { useUsersStore } from '../store/users'
import { useModal } from '../composables/modal'

const modal = useModal()
const usersStore = useUsersStore()

const handleSignIn = (username: string, password: string) => {
  usersStore.signIn(username, password)
  modal.hideModal()
}
</script>

<template>
  <FormInput buttonText="SignIn" @submit="handleSignIn" />
</template>
