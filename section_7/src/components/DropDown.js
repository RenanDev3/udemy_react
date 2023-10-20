import React, { useState } from 'react'

import {BiDownArrow} from 'react-icons/bi'

function DropDown({options, value, onChange}) {
    const [isOpen, setIsOpen] = useState(false)

    const renderOptions = options.map((option) => {
        return <p className="hover:bg-zinc-400" key={option.value} onClick={() => {handleColorSelection(option)}}>{option.label}</p>
    })

    function handleOpen(){
        setIsOpen((currentIsOpen) => !currentIsOpen)
    }

    function handleColorSelection(option){
        onChange(option)
        handleOpen()
    }

  return (
    <div className='mt-6 ml-2 w-32 border border-slate-600'>
        <div className="flex border-b border-slate-600 justify-between hover:cursor-pointer" onClick={handleOpen}>
            {value?.label || "Select..."}
            <span className="my-auto"><BiDownArrow /></span>
        </div>
        <div>
            {isOpen && renderOptions}
        </div>
    </div>
  )
}

export default DropDown