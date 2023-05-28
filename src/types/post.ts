export interface Post {
  id: string
  title: string
  created: string
  markdown: string
  html: string
}

export interface PostState {
  posts: Post[]
  selected: string
}
