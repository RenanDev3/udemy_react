import React from 'react'

function ImageList({imagesList}) {

  return (
    <div style={{"display": "flex", "flexWrap": "wrap"}}>
      {imagesList?.map((image) => {
        return <img style={{"margin":"5px"}} src={image.urls.small} alt={image.alt_description} key={image.id}/>
      })}
    </div>
  )
}

export default ImageList