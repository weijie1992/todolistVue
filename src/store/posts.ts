import { defineStore } from 'pinia'
import { PostState } from '../types/post'
import { DateTime } from 'luxon'
import { Period } from '../constants'
import { dateToDay } from '../mapping'
import { Post } from '../types/post'

const initialState: PostState = {
  posts: [{ id: '1', title: 'Title test', created: DateTime.now().toISODate() || '', markdown: '', html: '' }],
  selected: DateTime.now().toISODate() as string
}

export const usePostsStore = defineStore('posts', {
  state: (): PostState => ({
    posts: [{ id: '1', title: 'Title test', created: DateTime.now().toISODate() || '', markdown: '', html: '' }],
    selected: DateTime.now().toISODate() as string
}),

  actions: {
    setSelectedDate(date: string) {
      console.log("🚀 ~ file: posts.ts:21 ~ setSelectedDate ~ date:", date)
      // this.selected = date
      this.selected= date
    }
  },

  getters: {
    getSelectedDatePosts: (state: PostState): Post[] => {
      return state.posts.filter(p => p.created === state.selected)
    },
    getSelectedDateByPeriod: (state: PostState): Period => {
      return dateToDay[state.selected]
    }
  }
})
