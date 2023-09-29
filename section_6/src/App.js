import React,{useState} from 'react'

import BookCreate from './components/BookCreate'

function App() {
  const [books, setBooks] = useState([])
  const [id, setId] = useState(1)

  function createBook(newBook){
    setBooks([...books, {id: id, title: newBook}])
    setId(id + 1)
  }

  function updateBook(id, bookData){
    const listBookUpdated = books.map((book) => {
      if (book.id === id){
        return bookData
      } else {
        return book
      }
    })
    setBooks(listBookUpdated)
  }

  function deleteBook(id){
    setBooks(books.filter((book) => book.id !== id))
  }

  return (
    <div>
      <div>
        <BookCreate createBook={createBook}/>
      </div>

    </div>
  )
}

export default App