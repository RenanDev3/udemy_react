import React,{useEffect, useContext} from 'react'

import BookCreate from './components/BookCreate'
import BookList from './components/BookList'
import BooksContext from './context/books'


function App() {
  const { stableFetchBooks } = useContext(BooksContext)



  useEffect(() => {stableFetchBooks()}, [stableFetchBooks])


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