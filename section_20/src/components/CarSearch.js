import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

import { changeSearchTerm } from '../store'

function CarSearch() {
  const { searchTerm } = useSelector((state) => state.cars)
  const dispatch = useDispatch()

  function handleChangeSearchTerm(event){
    dispatch(changeSearchTerm(event.target.value))
  }

  return (
    <div className='list-header'>
      <h3 className='title is-3'>My cars</h3>
      <div className='search field is-horizontal'>
        <label className='label'>Search</label>
        <input 
        className='input'
        value={searchTerm}
        onChange={handleChangeSearchTerm}
        />
      </div>

    </div>
  )
}

export default CarSearch