import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { configureStore } from "@reduxjs/toolkit";

import App from './App'
import UiSlice from './store/UiSlice'

const store = configureStore({
  reducer: {
    ui: UiSlice.reducer
  }  
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
