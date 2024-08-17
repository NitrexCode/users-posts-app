import React from 'react'
import { Provider } from 'react-redux'
import { Container, Box, Typography, Grid } from '@mui/material'

import store from './redux/store'
import { UserList } from './components'
import { PostsChart } from './components'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            User List with Posts
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 2 }}>
              <UserList />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 2 }}>
              <PostsChart />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Provider>
  )
}

export default App
