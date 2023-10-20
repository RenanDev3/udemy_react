import React, {useState} from 'react'
import {BiRightArrow, BiDownArrow} from 'react-icons/bi'

function Accordion({items}) {
    const [expandIndex, setExpandIndex] = useState(1);

    // this can create a bug because of the delay of React at upading states
    // function handleClick(index){
    //     if (index === expandIndex) {
    //         setExpandIndex(-1)
    //     } else {setExpandIndex(index)}

    // }

    // this is the fixed version that prevents this bug

    const handleClick = (nextIndex) => {
        setExpandIndex((currentExpandedIndex) => {
            if (currentExpandedIndex === nextIndex){
                return -1
            } else {
                return nextIndex
            }
        })
    }

    const renderedItems = items.map((item, index) => {
        const isExpanded = expandIndex === index

        // function handleClick(){
        //     setExpandIndex(index) // this is allowed because it takes the value of the variable from the local scope
        // }

        return (
            <div className='w-96' key={item.id}>
                <div className='flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer' onClick={() => handleClick(index)}>
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