import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchUsers } from '../redux/usersSlice'

useEffect(() => {
  dispatch(fetchUsers())
}, [dispatch])

const UserList: React.FC = () => {
  const dispatch = useDispatch()
  const users = useSelector((state: any) => state.users.users)

  return <div>{/* Users will be rendered here */}</div>
}

export default UserList
