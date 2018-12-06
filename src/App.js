import React from 'react'
import classes from './App.css'
import Logo from './components/Logo'
import Svgr from './components/Svgr'
import Counter from './components/Counter'
import CounterWithWorker from './components/CounterWithWorker'

const test = true;

const App = () => {
  return (
    <div>
      <div className={classes.app}>안녕                                 React!</div>
      <Logo />
      <Svgr />
      <Counter initialCount={10} />
      <CounterWithWorker initialCount={100} />
    </div>
  )
}

export default App
