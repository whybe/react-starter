import React from 'react'
import classes from './App.css'
import Logo from './components/Logo'
import Svgr from './components/Svgr'

const App = () => {
  return (
    <div>
      <div className={classes.app}>안녕 React!</div>
      <Logo />
      <Svgr />
    </div>
  )
}

export default App
