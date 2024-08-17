import React from 'react'
import { Provider } from 'react-redux'
import { Container, Box, Typography } from '@mui/material' // Material-UI components

import store from './redux/store'
import { UserList } from './components'
import { PostsChart } from './components'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            User List with Posts
          </Typography>
        </Box>
        <Box sx={{ mb: 4 }}>
          <UserList />
        </Box>
        <Box>
          <PostsChart />
        </Box>
      </Container>
    </Provider>
  )
}

export default App
