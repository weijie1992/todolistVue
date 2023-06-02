<script setup lang="ts"></script>
<template>
  <section class="container">
    <va-navbar style="height: 100px">
      <template #left>
        <!-- <va-navbar-item class="logo"> LOGO </va-navbar-item> -->
      </template>
      <template #right>
        <va-navbar-item class="fontSize20">
          <va-button :to="{ name: 'newPost' }">New Task</va-button>
        </va-navbar-item>
        <va-button class="fontSize20">Login</va-button>
      </template>
    </va-navbar>
    <RouterView />
  </section>
</template>
<style scoped>
@import 'highlight.js/styles/atom-one-dark.css';
.logo {
  font-weight: 600;
  font-size: 1.5rem;
}

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
.router-link {
  display: inline-block;
  text-decoration: none;
  color: #000;
  font-weight: bold;
  padding: 5px 10px;
  border: 1px solid #000;
  border-radius: 4px;
  background-color: #f0f0f0;
}

.router-link:hover {
  background-color: #e0e0e0;
}
</style>
