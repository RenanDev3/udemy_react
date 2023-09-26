import React, { useState } from 'react'

import HeartImage from "../assets/heart.svg"

function AnimalShow({props}) {

  const [heartSize, setHeartSize] = useState(30)

  function handleClick(){
    setHeartSize(heartSize+15)
  }

  return (
    <div className='container-animals' onClick={handleClick}>
        <img src={props} className="animal" alt='animal'/>
        <img src={HeartImage} className="heart" alt='heart'
        style={{  position: "absolute",
                  width: `${heartSize}px`,
                  height: `${heartSize}px`,
                  right: "3px",
                  bottom: "3px"
                  }}/>
    </div>
  )
}

export default AnimalShow