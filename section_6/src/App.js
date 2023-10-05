import React,{useState} from 'react'

import BookCreate from './components/BookCreate'
import BookList from './components/BookList'


function App() {
  const [books, setBooks] = useState([])
  const [id, setId] = useState(1)

  function createBook(newBook){
    setBooks([...books, {id: id, title: newBook}])
    setId(id + 1)
  }

  function updateBook(idBook, newTitle){
    setBooks(books.map((book) => {
      if(book.id === idBook){
        return {...book, title: newTitle}
      }
      return book
    }))
  }

  function deleteBook(idBook){
    setBooks(books.filter((book) => book.id !== idBook))
  }

  return (
    <div>
      <div>
        <BookList books={books} updateBook={updateBook} deleteBook={deleteBook}/>
      </div>
      <div>
        <BookCreate createBook={createBook}/>
      </div>
    </div>
  )
}

export default App