import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

interface User {
  id: number
  name: string
  email: string
  posts: Post[]
}

export const fetchUsers = createAsyncThunk<User[]>(
  'users/fetchUsers',
  async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users',
    )
    const users = await Promise.all(
      response.data.map(async (user: User) => {
        const postsResponse = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${user.id}/posts`,
        )
        return { ...user, posts: postsResponse.data }
      }),
    )
    return users
  },
)

const initialState: { users: User[]; status: string } = {
  users: [],
  status: 'idle',
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload
      state.status = 'succeeded'
    })
  },
})

export default usersSlice.reducer
