import React, { useState } from 'react'

import AnimalShow from './components/AnimalShow'

function App() {
  const [count, setCount] = useState(0)

  function handleClickButton(){
    setCount(count+1)
  }

  return (
    <div>
      <AnimalShow props={count}/>
      <button onClick={handleClickButton}>+1</button>
    </div>
  )
}

export default App