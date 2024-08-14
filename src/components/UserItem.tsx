import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'
interface User {
  id: number
  name: string
  email: string
}

interface UserItemProps {
  user: User
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{user.name}</Typography>
        <Typography color="textSecondary">{user.email}</Typography>
      </CardContent>
    </Card>
  )
}

export default UserItem
