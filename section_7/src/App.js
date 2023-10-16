import React from 'react'

import Button from './components/Button'

function App(){
    return (
    <div>
        <h2>App</h2>
        <div>
        <Button primary>Click me</Button>
        </div>    
        <div>
        <Button success>Buy now</Button>
        </div>
        <div>
        <Button warning>See deal</Button>
        </div>
        <div>
        <Button danger>Hide Ads</Button>
        </div>
        <div>
        <Button secondary>Something</Button>
        </div>
    </div>
)}

export default App