import React from 'react'
import starUrl, { ReactComponent as Star } from './star.svg'

const Svgr = () => {
  return (
    <div>
      <img alt="star" src={starUrl}  width="24" height="24" />
      <Star />
    </div>
  )
}

export default Svgr

