import React from 'react'

import Route from './components/Route'
import SideBar from './components/SideBar'
import AccordionPage from './pages/AccordionPage'
import ButtonPage from './pages/ButtonPage'
import DropDownPage from './pages/DropDownPage'
import ModalPage from './pages/ModalPage'
import TablePage from './pages/TablePage'

function App(){

    return (
        <div className='container mx-auto grid grid-cols-6 gap-4 mt-4'>
            <SideBar />
            <div className='col-span-5'>
                <Route path="/"><h2>Home page</h2></Route>
                <Route path='/accordion'> <AccordionPage /> </Route>
                <Route path='/button'> <ButtonPage /> </Route>
                <Route path='/dropdown'> <DropDownPage /> </Route>
                <Route path='/modal'><ModalPage /></Route>
                <Route path='/table'><TablePage /></Route>
            </div>
        </div>
)}

export default App