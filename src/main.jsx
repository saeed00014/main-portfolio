import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { configureStore } from "@reduxjs/toolkit";

import App from './App'
import UiSlice from './store/UiSlice'
import cardSlice from './store/cardSlice';

const store = configureStore({
  reducer: {
    ui: UiSlice.reducer,
    card : cardSlice.reducer
  }  
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
