import React, {useState} from 'react'
import {BiRightArrow, BiDownArrow} from 'react-icons/bi'

function Accordion({items}) {
    const [expandIndex, setExpandIndex] = useState(1);

    function handleClick(index){
        if (index === expandIndex) {
            setExpandIndex(-1)
        } else {setExpandIndex(index)}

    }

    const renderedItems = items.map((item, index) => {
        const isExpanded = expandIndex === index

        // function handleClick(){
        //     setExpandIndex(index) // this is allowed because it takes the value of the variable from the local scope
        // }

        return (
            <div key={item.id}>
                <div className='flex w-96 justify-between p-3 bg-gray-50 border-b items-center cursor-pointer' onClick={() => handleClick(index)}>
                    {item.label}
                    {isExpanded ? <BiDownArrow />: <BiRightArrow />}
                </div>
                {isExpanded && <div className='border-b p-5'>{item.content}</div>}
            </div>
        )
    })

  return (
    <div className='border-x border-t rounded'>
    { renderedItems }
    </div>
  )
}

export default Accordion