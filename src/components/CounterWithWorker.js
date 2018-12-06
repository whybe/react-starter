import React from 'react'
import PropTypes from 'prop-types'
import {compose, defaultProps, setPropTypes, withState, withHandlers, lifecycle } from 'recompose'
import CounterWorker from './counter.worker.js'

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

var worker;

export default compose(
  setPropTypes({
    initialCount: PropTypes.number
  }),
  defaultProps({
    initialCount: 0
  }),
  withState('count', 'setCount', ({ initialCount }) => (initialCount)),
  withHandlers({
    onCountUp: ({ count }) => () => worker.postMessage({ cmd: 'countUp', count }),
    onCountDown: ({ count }) => () => worker.postMessage({ cmd: 'countDown', count }) ,
    onCountReset: ({ initialCount }) => () => worker.postMessage({ cmd: 'countReset', initialCount }),
  }),
  lifecycle({
    componentDidMount() {
      const { setCount } = this.props
      worker = new CounterWorker()
      worker.onmessage = e => {
        console.log(e.data)

        setCount(e.data.count)
      }
    },
    componentWillUnmount() {
      worker.terminate()
      worker = null
    }
  })
)(Counter)
