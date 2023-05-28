import { defineStore } from 'pinia'
import { PostState } from '../types/post'
import { DateTime } from 'luxon'
import { Period } from '../constants'
import { dateToDay } from '../mapping'

const initialState: PostState = {
  posts: [{ id: '1', title: 'Title test', created: DateTime.now().toISODate() || '', markdown: '', html: '' }],
  selected: '2023-05-28'
}
export const usePostsStore = defineStore('posts', {
  state: (): PostState => initialState,

  actions: {
    setSelectedDate(date: string) {
      this.selected = date
    }
  },

  getters: {
    getSelectedDatePosts: (state: PostState) => {
      return state.posts.filter(p => p.created === state.selected)
    },
    getSelectedDateByPeriod: (state: PostState): Period | null => {
      return dateToDay[state.selected]
    }
  }
})