export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export interface User {
  id: number
  name: string
  email: string
  username?: string
  phone?: string
  website?: string
  company?: {
    name: string
    catchPhrase: string
    bs: string
  }
  address?: {
    street: string
    suite: string
    city: string
    zipcode: string
  }
  posts: Post[]
}

export interface UserItemProps {
  user: User
}
