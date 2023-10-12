import React, { useState, useContext } from 'react'

import BooksContext from '../context/books'

function BookCreate() {
  const {createBook} = useContext(BooksContext)
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