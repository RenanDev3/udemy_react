import React, { useReducer } from 'react'

import Button from "../components/Button"

const INCREMENT_COUNT = 'increment'
const DECREMENT_COUNT = 'decrement'
const FULL_INCREMENT = 'fullIncrement'
const SET_VALUE_TO_ADD = 'changeValueToAdd'

function reducer(state, action){
  switch(action.type){
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1
      }
    case FULL_INCREMENT:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0
      }
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count -1
      }
    case SET_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload
      }
    default:
      return state
  }
}


function CounterPage({ initialCount }) {
  // const [count, setCount] = useState(initialCount)
  // const [valueToAdd, setValueToAdd] = useState(0)
  const [state, dispatch] = useReducer(reducer, {
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