import React from 'react'

interface UserItemProps {
  user: any
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  return <div>{/* User details will be rendered here */}</div>
}

export default UserItem
