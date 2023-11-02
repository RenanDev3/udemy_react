import React from 'react'
import { useSelector } from 'react-redux'

export default function CarValue() {

  const totalCost = useSelector(({cars: {data, searchTerm}}) => {
    return data.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase())).reduce((acc, curr) => acc + curr.cost, 0)
  })

  return (
    <div className='car-value'>
      Total cost:  ${totalCost}
    </div>
  )
}
