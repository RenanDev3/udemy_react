import React,{useEffect, useContext} from 'react'

import BookCreate from './components/BookCreate'
import BookList from './components/BookList'
import BooksContext from './context/books'


function App() {
  const { fetchBooks } = useContext(BooksContext)

  useEffect(() => {fetchBooks()}, [])

  return (
    <div>
      <div>
        <BookList />
      </div>
      <div>
        <BookCreate />
      </div>
    </div>
  )
}

export default App