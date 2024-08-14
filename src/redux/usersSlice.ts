import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users')
  const users = await Promise.all(
    response.data.map(async (user: any) => {
      const postsResponse = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${user.id}/posts`,
      )
      return { ...user, posts: postsResponse.data }
    }),
  )
  return users
})

const usersSlice = createSlice({
  name: 'users',
  initialState: { users: [], status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload
      state.status = 'succeeded'
    })
  },
})

export default usersSlice.reducer
