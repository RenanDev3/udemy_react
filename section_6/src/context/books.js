import { createContext, useState, useCallback } from 'react'
import axios from 'axios'

const BooksContext = createContext();

function Provider({children}){

    const [books, setBooks] = useState([])

    async function createBook(newBook){
      await axios.post('http://localhost:3001/books', {title: newBook})
      fetchBooks()
    }
  
    async function fetchBooks(){
      const response = await axios.get('http://localhost:3001/books')
      setBooks(response.data)
    }

    const stableFetchBooks = useCallback(
      fetchBooks,
      []
    )
  
    async function updateBook(idBook, newTitle){
      await axios.put(`http://localhost:3001/books/${idBook}`, {title: newTitle})
      fetchBooks()
    }
  
    async function deleteBook(idBook){
      await axios.delete(`http://localhost:3001/books/${idBook}`)
      fetchBooks()
    }

    const appContext = {
        books,
        stableFetchBooks,
        createBook,
        updateBook,
        deleteBook
    }

    return (
        <BooksContext.Provider value={appContext}>
            {children}
        </BooksContext.Provider>
    )
}

export {Provider}
export default BooksContext;