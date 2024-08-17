import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid } from '@mui/material' // Import Material-UI Grid

import { AppDispatch, RootState } from '../../redux/store'
import { fetchUsers } from '../../redux/usersSlice'
import { UserItem } from '../'

const UserList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()

  const users = useSelector((state: RootState) => state.users.users)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <Grid container spacing={3}>
      {users.map((user) => (
        <Grid item xs={12} sm={6} key={user.id}>
          <UserItem user={user} />
        </Grid>
      ))}
    </Grid>
  )
}

export default UserList
