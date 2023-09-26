import React, {useState} from 'react'

function SearchBar({onSubmit}) {
  const [term, setTerm] = useState("")

  function handleSubmit(event){
    event.preventDefault()
    onSubmit(term)
  }

  function handleChangeTerm(event){
    setTerm(event.target.value.replace(/[A-Z0-9]/, ''))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={term} onChange={handleChangeTerm}/>
      </form>
    </div>
  )
}

export default SearchBar