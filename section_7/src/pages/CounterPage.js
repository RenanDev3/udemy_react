import React from 'react'

import useCounter from '../hooks/useCounter'
import Button from "../components/Button"

function CounterPage({ initialCount }) {

  const {count, incrementCount} = useCounter(0)

  return (
    <div>
        <div>CounterPage</div>
        <div>Count is {count}</div>
        <Button primary onClick={incrementCount}>Increment</Button>
    </div>
  )
}

export default CounterPage