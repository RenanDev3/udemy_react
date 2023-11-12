import React from 'react'

import { useAddPhotoMutation, useFetchPhotosQuery } from '../store'
import Button from './Button'
import Skeleton from './Skeleton'
import PhotosListItem from './PhotosListItem'

function PhotosList({album}) {
  const { data, isFetching, errorFetchingPhoto } = useFetchPhotosQuery(album)
  const [addPhoto, result] = useAddPhotoMutation()

  function handleAddPhoto(){
    addPhoto(album)
  }

  let content

  if (isFetching) {
    content = <Skeleton className='h-8 w-8' times={4}/>
  } else if (errorFetchingPhoto) {
    content = <h2>Error fetching photos!!!</h2>
  } else {
    content = data.map((photo) => <PhotosListItem key={`photo-${photo.id}`} photo={photo}/>)
  }

  return (
    <div>
      <div className='m-2 flex flex-row items-center justify-between'>
        <h3 className='text-lg font-bold'>Photos in {album.title}</h3>
        <Button loading={result.isLoading} onClick={handleAddPhoto}>+ Add Photo</Button>
      </div>
      <div className='mx-8 flex flex-row flex-wrap justify-center'>{content}</div>     
    </div>
  )
}

export default PhotosList