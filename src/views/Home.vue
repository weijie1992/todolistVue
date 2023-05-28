<script setup lang="ts">
import { Period, periods } from '../constants.ts'
import PostItem from '../components/PostItem.vue'
import { usePostsStore } from '../store/posts'
import { dayToDate } from '../mapping'

const postsStore = usePostsStore()

const setSelectedDate = (period: Period) => {
  const date = dayToDate[period]
  if (date) {
    postsStore.setSelectedDate(date)
  }
}
</script>

<template>
  <nav class="nav">
    <ul>
      <li v-for="period in periods" :key="period">
        <va-button
          square
          :color="`${period === postsStore.getSelectedDateByPeriod ? 'primary' : 'secondary'}`"
          @click="setSelectedDate(period)"
          >{{ period }}</va-button
        >
      </li>
    </ul>
  </nav>

  <section v-for="post in postsStore.getSelectedDatePosts" :key="post.id">
    <PostItem :post="post" />
  </section>
</template>

<style scope>
.nav {
  display: flex;
  justify-content: center;
}

.nav li {
  display: inline-block;
  margin-right: 10px;
}

section li {
  margin-bottom: 10px;
}

.item-title {
  font-weight: bold;
}

.item-description {
  color: #888;
}
</style>
