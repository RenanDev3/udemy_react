import React from 'react'

import Button from './components/Button'

function App(){
    return (
    <div>
        <h2 className="text-3xl underline text-red-600 mb-4 text-center">App</h2>       
        <div>
            <Button >Primary</Button>
        </div>
        <div>
            <Button>Secondary</Button>
        </div>
        <div>
            <Button>Success</Button>
        </div>
        <div>
            <Button>Warning</Button>
        </div>
        <div>
            <Button>Danger</Button>
        </div>
    </div>
)}

export default App