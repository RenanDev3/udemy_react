import React,{useState, useEffect} from 'react'

import axios from "axios"

import BookCreate from './components/BookCreate'
import BookList from './components/BookList'


function App() {
  const [books, setBooks] = useState([])

  async function createBook(newBook){
    await axios.post('http://localhost:3001/books', {title: newBook})
    fetchBooks()
  }

  async function fetchBooks(){
    const response = await axios.get('http://localhost:3001/books')
    setBooks(response.data)
  }

  async function updateBook(idBook, newTitle){
    await axios.put(`http://localhost:3001/books/${idBook}`, {title: newTitle})
    fetchBooks()
  }

  async function deleteBook(idBook){
    await axios.delete(`http://localhost:3001/books/${idBook}`)
    fetchBooks()
  }

  useEffect(() => {fetchBooks()}, [])

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