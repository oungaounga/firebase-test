/** @format */

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import nextTheme from './nextThemes'
import {NextUIProvider, Text} from '@nextui-org/react'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <NextUIProvider theme={nextTheme}>
    <App />
  </NextUIProvider>
)
