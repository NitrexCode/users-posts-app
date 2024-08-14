import React from 'react'
import { Provider } from 'react-redux'

import store from './redux/store'
import UserList from './components/UserList'
import PostsChart from './components/PostsChart'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>User List with Posts</h1>
        <UserList />
        <PostsChart />
      </div>
    </Provider>
  )
}

export default App
