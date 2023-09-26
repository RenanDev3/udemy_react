import React, {useState} from 'react'

import AnimalShow from './components/AnimalShow'
import {ANIMALS} from "./constants/animals"

function App() {
  const [animalsList, setAnimalsList] = useState([])

  function handleAddAnimal(){
    setAnimalsList([...animalsList, Math.floor(Math.random()*ANIMALS.length)])
  }

  return (
    <div className='container'>
      <button className='add' onClick={handleAddAnimal}>Add animal</button>
      <div className='grid'>
      { animalsList.map((value, index) => {
        return <AnimalShow props={ANIMALS[value]} key={index} />
      }) }
      </div>
    </div>
  )
}

export default App