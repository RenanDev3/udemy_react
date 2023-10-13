import React, {useContext} from 'react'

import BookCard from './BookCard'
import BooksContext from '../context/books'

function BookList() {

  const {books} = useContext(BooksContext)


  return (

    <div className='book-container'>
      { books?.map((book) => <BookCard book={book} key={book.id}/>) }
    </div>

  )
}

export default BookList