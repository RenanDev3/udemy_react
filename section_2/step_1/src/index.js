// 1) Import React and ReactDOM
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

// 2) Get a reference to the div with ID root
const el = document.getElementById('root')

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el)

// 4) Create a component
// function App(){
  // const inputType = 'number'
  // const min = 5
  // return <input type={inputType} min={min} max={23-min} list={[1,2,3]} style={{color: "red"}} alt='Enter a message'/>
  // return <textarea autoFocus={true} />
  // return <input placeholder='hi there' />
// }

// 5) Show the component on the screen
root.render(<App />)
