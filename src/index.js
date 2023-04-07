/** @format */

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import nextTheme from './Components/nextThemes'
import {NextUIProvider, Text} from '@nextui-org/react'
import {BrowserRouter as Router} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <NextUIProvider theme={nextTheme}>
    <Router>
      <App />
    </Router>
  </NextUIProvider>
)
