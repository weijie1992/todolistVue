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
<style>
@import 'highlight.js/styles/atom-one-dark.css';

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
