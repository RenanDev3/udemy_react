import React from 'react'

import BookCard from './BookCard'
import useBooksContext from '../hooks/use-books-context'

function BookList() {
  const { books } = useBooksContext()

  return (

    <div className='book-container'>
      { books?.map((book) => <BookCard book={book} key={book.id}/>) }
    </div>

  )
}

export default BookList