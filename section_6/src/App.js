import React,{useEffect} from 'react'

import useBooksContext from './hooks/use-books-context'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'


function App() {
  const { fetchBooks } = useBooksContext()

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