import { defineStore } from 'pinia'
import { PostState } from '../types/post'
import { DateTime } from 'luxon'
import { Period } from '../constants'
import { dateToDay } from '../mapping'
import { Post } from '../types/post'

const initialState: PostState = {
  posts: [
    { id: '1', title: 'Title test', created: DateTime.now().toISODate() || '', markdown: 'haha', html: '<p>haha</p>' },
    { id: '2', title: 'Title test2', created: DateTime.local().plus({ days: 1 }).toISODate() || '', markdown: '', html: '' },
    { id: '3', title: 'Title test3', created: DateTime.local().plus({ days: 7 }).toISODate() || '', markdown: '', html: '' }
  ],
  selected: DateTime.now().toISODate() as string
}

export const usePostsStore = defineStore('posts', {
  state: (): PostState => initialState,

  actions: {
    setSelectedDate(date: string) {
      this.selected = date
    },
    addTask(post: Post) {
      const updatedPost = { ...post, id: (Math.random() * 10000).toFixed().toString(), created: DateTime.now().toISODate() as string }

      this.posts.push(updatedPost)
    },
    editTask(post: Post) {
      const index = this.posts.findIndex(p => p.id === post.id)
      if (!index) {
        throw Error('Index not found cant be updated.')
      }
      this.posts[index] = post
    }
  },

  getters: {
    getSelectedDatePosts: (state: PostState): Post[] => {
      return state.posts.filter(p => p.created <= state.selected)
    },
    getSelectedDateByPeriod: (state: PostState): Period => {
      return dateToDay[state.selected]
    }
  }
})
