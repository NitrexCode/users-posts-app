import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'

import { UserItemProps } from '../../types/types'

import './UserItem.css'

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  return (
    <Card className="user-card">
      <CardContent>
        <Typography variant="h5" className="user-name">
          {user.name} ({user.username})
        </Typography>
        <Typography color="textSecondary">{user.email}</Typography>
        <Typography color="textSecondary">Phone: {user.phone}</Typography>
        <Typography color="textSecondary">Website: {user.website}</Typography>
        <Typography color="textSecondary">
          Address: {user.address.street}, {user.address.suite},{' '}
          {user.address.city} {user.address.zipcode}
        </Typography>
        <Typography color="textSecondary">
          Company: {user.company.name}
        </Typography>
        <Typography color="textSecondary">
          Catchphrase: {user.company.catchPhrase}
        </Typography>
        <Typography color="textSecondary">BS: {user.company.bs}</Typography>
      </CardContent>
    </Card>
  )
}

export default UserItem
