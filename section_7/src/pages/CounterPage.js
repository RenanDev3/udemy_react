import React, { useReducer } from 'react'
import {produce} from 'immer'

import Button from "../components/Button"

const INCREMENT_COUNT = 'increment'
const DECREMENT_COUNT = 'decrement'
const FULL_INCREMENT = 'fullIncrement'
const SET_VALUE_TO_ADD = 'changeValueToAdd'

function reducer(state, action){
  switch(action.type){
    case INCREMENT_COUNT:
      state.count = state.count + 1
      return
    case FULL_INCREMENT:
      state.count = state.count + state.valueToAdd
      state.valueToAdd = 0
      return
    case DECREMENT_COUNT:
      state.count = state.count -1
      return
    case SET_VALUE_TO_ADD:
      state.valueToAdd = action.payload
      return
    default:
      return
  }
}


function CounterPage({ initialCount }) {
  // const [count, setCount] = useState(initialCount)
  // const [valueToAdd, setValueToAdd] = useState(0)
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0
  })

  function incrementCount(){
    dispatch({type: INCREMENT_COUNT})
  }

  function decrementCount(){
    dispatch({type: DECREMENT_COUNT})
  }

  function handleChange(event){
    const value = parseInt(event.target.value) || 0
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value
    })
  }

  function handleSubmit(event){
    event.preventDefault()
    dispatch({type: FULL_INCREMENT})
  }

  return (
    <div className='m-3'>
        <div className='text-lg'>Count is {state.count}</div>
        <div className='flex flex-row'>
          <Button primary onClick={incrementCount}>Increment</Button>
          <Button secondary onClick={decrementCount}>Decrement</Button>
        </div>
        <form onSubmit={handleSubmit}>
          <label
          >Add a lot</label>
          <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type='number'
          className='p-1 m-3 bg-gray-50 border-gray-300' />
          <Button>Add it</Button>
        </form>
    </div>
  )
}

export default CounterPage