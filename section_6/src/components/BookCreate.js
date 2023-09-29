import React, { useState } from 'react'

function BookCreate({createBook}) {
    const [title, setTitle] = useState("")

    function handleChange(event){
        setTitle(event.target.value)
    }

    function handleClick(){
        createBook(title)
        setTitle("")
    }

  return (
    <div className='book-create'>
        <h3>Add a book</h3>
        <input onChange={handleChange} value={title}/>
        <button onClick={handleClick}>Create</button>
    </div>
  )
}

export default BookCreate