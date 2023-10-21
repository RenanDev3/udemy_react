import React, {useState} from 'react'

import DropDown from './components/DropDown'


function App(){
    const [color, setColor] = useState()

    const options = [
        { label: 'Red', value: 'red' },
        { label: 'Green', value: 'green' },
        { label: 'Blue', value: 'blue' }
    ]

    
    // value and change are convention names
    return (
        <div className='flex'>
            <DropDown options={options} value={color} onChange={setColor}/>
            <DropDown options={options} value={color} onChange={setColor}/> 
        </div>
)}

export default App