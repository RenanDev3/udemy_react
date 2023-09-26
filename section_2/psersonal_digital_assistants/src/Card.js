import React from 'react'

function Card({data}) {
    const {image, name, instagram, message} = data
  return (
    <div className='card'>
        <img src={image} alt='Logo'/>
        <h3>{name}</h3>
        <p>{instagram}</p>
        <br />
        <p>{message}</p>
    </div>
  )
}

export default Card