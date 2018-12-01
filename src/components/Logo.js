import React from 'react'
import classes from './Logo.css'

const Logo = ({title}) => {
  return (
      <div className={classes.logo}>{title}</div>
  )
}

export default Logo
