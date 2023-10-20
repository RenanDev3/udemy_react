import React, { useState } from 'react'

import {BiDownArrow} from 'react-icons/bi'

function DropDown({options, value, onChange}) {
    const [isOpen, setIsOpen] = useState(false)

    const renderOptions = options.map((option) => {
        return <div className="hover:bg-zinc-400 rounded cursor-pointer p-1" key={option.value} onClick={() => {handleColorSelection(option)}}>{option.label}</div>
    })

    function handleOpen(){
        setIsOpen((currentIsOpen) => !currentIsOpen)
    }

    function handleColorSelection(option){
        onChange(option)
        handleOpen()
    }

  return (
    <div className='relative w-48'>
        <div className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full" onClick={handleOpen}>
            {value?.label || "Select..."}
            <span className="my-auto"><BiDownArrow /></span>
        </div>
        <div>
            {isOpen && <div className='absolute top-full border rounded p-3 shadow bg-white w-full'>{renderOptions}</div>}
        </div>
    </div>
  )
}

export default DropDown