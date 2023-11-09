import React, {useState} from 'react'
import { GoChevronUp, GoChevronDown } from 'react-icons/go'

function ExpandablePanel({header, children}) {
    const [expanded, setExpanded] = useState(false)

    function handleClick(){
        setExpanded((currentState) => !currentState)
    }


  return (
    <div className='mb-2 border rounded'>
        <div className='flex p-2 justify-between items-center'>
            <div className='flex flex-row items-center justify-between'>
                {header}
            </div>
            <div onClick={handleClick} className='cursor-pointer'>
                {expanded ? <GoChevronUp /> : <GoChevronDown />}
            </div>
        </div>
            { expanded && <div className='p-2 border-t'>{children}</div>}
    </div>
  )
}

export default ExpandablePanel