<script setup lang="ts">
import { computed } from 'vue'
import { useModal } from './composables/modal'
import { useUsersStore } from './store/users'

const usersStore = useUsersStore()

const modal = useModal()

const showModal = computed(() => {
  return {
    display: modal.show.value ? 'block' : 'none'
  }
})

const handleClickOutside = (event: Event) => {
  const type = (event.target as HTMLInputElement).type
  if (!type) {
    modal.hideModal()
  }
}

const handleLogout = () => {
  usersStore.logOut()
}
</script>

<template>
  <div class="modal" style="color: white" :style="showModal">
    <div class="modal-background" @click="$event => handleClickOutside($event)">
      <div class="modal-content">
        <div id="modal"></div>
      </div>
    </div>
    <button class="modal-close is-large" @click="modal.hideModal()"></button>
  </div>
  <section class="container">
    <va-navbar style="height: 100px">
      <template #left> </template>
      <template #right>
        <va-navbar-item class="fontSize20" v-if="usersStore.currentUserId">
          <va-button :to="{ name: 'newPost' }">New Task</va-button>
        </va-navbar-item>
        <va-navbar-item class="fontsize20" v-else>
          <va-button @click="modal.showModal('signUp')">Sign Up</va-button>
        </va-navbar-item>

        <va-navbar-item class="fontSize20" v-if="!usersStore.currentUserId">
          <va-button class="fontSize20" @click="modal.showModal('signIn')">Login</va-button>
        </va-navbar-item>
        <va-navbar-item class="fontSize20" v-else>
          <va-button class="fontSize20" @click="handleLogout">Logout</va-button>
        </va-navbar-item>
      </template>
      <Teleport to="#modal">
        <component :is="modal.component.value"></component>
      </Teleport>
    </va-navbar>

    <RouterView />
  </section>
</template>

<style>
@import 'highlight.js/styles/atom-one-dark.css';
@import 'https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css';

.container {
  max-width: 1344px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
}

.fontSize20 {
  font-size: 20px;
}
</style>
