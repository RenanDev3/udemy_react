import React from 'react'

import Card from './Card'
import { assistantsData } from './data/assistants'

function App() {
  return (
    <>
    <h2 className='title'>Personal Digital Assistants</h2>
    <div className='container'>
    {assistantsData.map((assistant) => <Card data={assistant} key={assistant.name}/>)}
    </div>
    </>
  )
}

export default App