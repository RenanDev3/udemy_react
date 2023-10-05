import React, { useState } from 'react'

function BookCreate({createBook}) {
    const [title, setTitle] = useState("")

    function handleChange(event){
        setTitle(event.target.value)
    }

    function handleClick(event){
        event.preventDefault()
        createBook(title)
        setTitle("")
    }

  return (
    <form className='book-create' onSubmit={handleClick}>
        <h3>Add a book</h3>
        <input onChange={handleChange} value={title}/>
        <button>Add book</button>
    </form>
  )
}

export default BookCreate