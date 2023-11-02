import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { removeCar } from '../store'

function CarList() {
  const dispatch = useDispatch()
  const {cars, name} = useSelector(({form, cars: {data, searchTerm}}) => {
    const filteredCars = data.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
    return {
      cars: filteredCars,
      name: form.name
    }
  })

  function handleDeleteCar(carId){
    dispatch(removeCar(carId))
  }

  const renderedCars = cars.map((car) => {

    const bold = name && car.name.toLowerCase().includes(name.toLowerCase())

    return (
      <div key={car.id} className={`panel ${bold && 'bold'}`}>
        <p>{car.name} - ${car.cost}</p>
        <button className='button is-danger' onClick={() => handleDeleteCar(car.id)}>X</button>
      </div>
    )
  })

  return (
    <div className='car-list'>
      {renderedCars}
      <hr />
    </div>
  )
}

export default CarList