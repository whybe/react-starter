import React from 'react'
import classes from './App.css'
import Logo from './components/Logo'

const App = () => {
  return (
    <div>
      <div className={classes.app}>Hello React!</div>
      <Logo />
    </div>
  )
}

export default App
