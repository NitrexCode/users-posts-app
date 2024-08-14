import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '../redux/store'
import { fetchUsers } from '../redux/usersSlice'

import UserItem from './UserItem'

interface User {
  id: number
  name: string
  email: string
}

const UserList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()

  const users = useSelector((state: RootState) => state.users.users)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <div>
      {users.map((user: User) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  )
}

export default UserList
