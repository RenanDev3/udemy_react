import React, {useState} from 'react'

import useBooksContext from '../hooks/use-books-context'
import EditIcon from "../assets/edit.svg"
import DeleteIcon from "../assets/delete.svg"

function BookCard({book}) {
  const {updateBook, deleteBook} = useBooksContext()
  const [editMode, setEditMode] = useState(false)
  const [editTitle, setEditTitle] = useState(book.title)

  function handleUpdateTitle(event){
    event.preventDefault()
    updateBook(book.id, editTitle)
    setEditMode(!editMode)
  }

  function handleDeleteItem(){
    deleteBook(book.id)
  }

  function handleChangeTitle(event){
    setEditTitle(event.target.value)
  }

  return (
    <div className='book-card'>
      <div className='edit-container'>
        <img className='edit-container-icon' src={EditIcon} onClick={()=>setEditMode(!editMode)} alt='Edit'/>
        <img className='edit-container-icon' src={DeleteIcon} onClick={handleDeleteItem} alt='Delete'/>
      </div>
      <img className='book-image' src={`https://picsum.photos/seed/${book.id}/200`} alt='book'/>
      {!editMode && <h3 className='book-title'>{book.title}</h3>}
      {editMode && (
        <form onSubmit={handleUpdateTitle}>
          <input value={editTitle} onChange={handleChangeTitle}></input>
          <button>Save</button>
        </form>
      )}
    </div>
  )
}

export default BookCard