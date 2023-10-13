import React,{useEffect, useContext} from 'react'

import BookCreate from './components/BookCreate'
import BookList from './components/BookList'
import BooksContext from './context/books'


function App() {
  const { stableFetchBooks } = useContext(BooksContext)

  useEffect(() => {stableFetchBooks()}, [stableFetchBooks])

  useEffect(() => {
    function listener(){
      console.log("I was clicked")
    }

    document.body.addEventListener('click', listener)

    function cleanListeners() {
      document.body.removeEventListener('click', listener)
    }

    return cleanListeners

  })


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