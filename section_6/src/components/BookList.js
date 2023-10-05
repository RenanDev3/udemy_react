import React from 'react'

import BookCard from './BookCard'

function BookList({books, setBooks, updateBook, deleteBook}) {
  return (
    <div className='book-container'>
      { books?.map((book) => <BookCard book={book} updateBook={updateBook} deleteBook={deleteBook} key={book.id}/>) }
    </div>
  )
}

export default BookList