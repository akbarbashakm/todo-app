import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'
import { LastLocationProvider } from 'react-router-last-location';

const store = createStore(rootReducer)

const AppBundle = (
  <Provider store={store}>
      <BrowserRouter>
        <LastLocationProvider>
          <App />
        </LastLocationProvider>
      </BrowserRouter>
  </Provider>
)

ReactDOM.render(AppBundle, document.getElementById('root'));