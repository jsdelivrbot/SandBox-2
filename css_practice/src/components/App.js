import React from 'react'

import AppHeader from './AppHeader'

import './style.css'

export default ({ children }) => {
  return (
    <div className="container">
      <AppHeader />
      <div className="app-body">
        {children}
      </div>
    </div>
  )
}
