import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'

import { UserItemProps } from '../../types/types'

import './UserItem.css'

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  return (
    <Card
      className="user-card border-type-1"
      sx={{ margin: 'initial', borderRadius: '12px' }}
    >
      <CardContent className="user-card-content user-info inner">
        <Typography mb={1} variant="h5" className="user-name">
          {user.name} ({user.username})
        </Typography>
        <Typography mb={1} color="textSecondary">
          {user.email}
        </Typography>
        <Typography mb={1} color="textSecondary">
          Phone: {user.phone}
        </Typography>
        <Typography mb={1} color="textSecondary">
          Website: {user.website}
        </Typography>
        <Typography mb={1} color="textSecondary">
          Address: {user.address?.street || 'N/A'},{' '}
          {user.address?.suite || 'N/A'}, {user.address?.city || 'N/A'}{' '}
          {user.address?.zipcode || 'N/A'}
        </Typography>
        <Typography mb={1} color="textSecondary">
          Company: {user.company?.name || 'N/A'}
        </Typography>
        <Typography mb={1} color="textSecondary">
          Catchphrase: {user.company?.catchPhrase || 'N/A'}
        </Typography>
        <Typography mb={1} color="textSecondary">
          BS: {user.company?.bs || 'N/A'}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default UserItem
