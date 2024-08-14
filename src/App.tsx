import React from 'react'
import { Provider } from 'react-redux'

import store from './redux/store'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>User List with Posts</h1>
      </div>
    </Provider>
  )
}

export default App
