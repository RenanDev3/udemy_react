import React from 'react'

import { useFetchAlbumsQuery, useAddAlbumMutation } from '../store'
import Skeleton from "./Skeleton"
import AlbumListItem from './AlbumListItem'
import Button from "./Button"

function AlbumsList({user}) {
  const { data, error , isFetching } = useFetchAlbumsQuery(user)
  const [ addAlbum, result ] = useAddAlbumMutation()

  let content

  if (isFetching){
    content = <Skeleton times={1}/>
  } else if (error) {
    content = <div>Error loading albums</div>
  } else {
    content = data.map((album) => <AlbumListItem key={`${user.id}-${album.id}`} album={album}/>)
  }

  function handleAddAlbum(){
    addAlbum(user)
  }

  return (
    <div>
      <div className='m-2 flex flex-row items-center justify-between'>
          <h3 className='text-lg font-bold'>AlbumsList for {user.name}</h3>
          <Button onClick={handleAddAlbum} loading={result.isLoading}>+ Add album </Button>
      </div>
      <div>
          {content}
      </div>
    </div>
  )
}

export default AlbumsList