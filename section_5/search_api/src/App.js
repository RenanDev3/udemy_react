import React, { useState } from 'react'

import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'
import searchImages from './services/api'

function App() {
  const [images, setImages] = useState()

  async function handleSubmit(term){
    const images = await searchImages(term)
    setImages(images)
  }

  return (
    <div>
      <SearchBar onSubmit={handleSubmit}/>
      <ImageList imagesList={images}/>
    </div>
  )
}

export default App