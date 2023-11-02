import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { changeName, changeCost, addCar } from '../store'

function CarForm() {
  const dispatch = useDispatch()
  const { carName, carCost } = useSelector((state) => {
    return {
      carName: state.form.name,
      carCost: state.form.cost
    }
  })

  function handleChangeName(event){
    dispatch(changeName(event.target.value))
  }

  function handleChangeCost(event){
    const targetCost = parseInt(event.target.value) || 0
    dispatch(changeCost(targetCost))
  }

  function handleSubmit(event){
    event.preventDefault()

    dispatch(addCar({
      name: carName,
      cost: carCost
    }))
  }

  return (
    <div className='car-form panel'>
      <h4 className='subtitle is-3'>Add car</h4>
      <form onSubmit={handleSubmit}>
        <div className='field-group'>
          <div className='field'>
            <label className='label'>Name</label>
            <input 
            className='input is-expanded'
            value={carName}
            onChange={handleChangeName}
            />
            <label className='label'>Cost</label>
            <input 
            className='input is-expanded'
            type='number'
            value={carCost}
            onChange={handleChangeCost}
            />
          </div>
        </div>
        <div className='field'>
          <button className='button is-link'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default CarForm