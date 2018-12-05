import React from 'react'
import PropTypes from 'prop-types'
import {compose, defaultProps, setPropTypes, withState, withHandlers} from 'recompose'

const Counter = ({ count, onCountUp, onCountDown, onCountReset }) => (
    <div>
      <p>{count}</p>
      <button type="button" onClick={onCountUp}>+</button>
      <button type="button" onClick={onCountDown}>-</button>
      <button type="button" onClick={onCountReset}>Reset</button>
    </div>
)

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  onCountUp: PropTypes.func.isRequired,
  onCountDown: PropTypes.func.isRequired,
  onCountReset: PropTypes.func.isRequired
}

export default compose(
  setPropTypes({
    initialCount: PropTypes.number
  }),
  defaultProps({
    initialCount: 0
  }),
  withState('count', 'setCount', ({ initialCount }) => (initialCount)),
  withHandlers({
    onCountUp: ({ setCount }) => () => setCount(c => c + 1),
    onCountDown: ({ setCount }) => () => setCount(c => c - 1),
    onCountReset: ({ setCount, initialCount }) => () => setCount(initialCount),
  })
)(Counter)

