import React from 'react'

import { useDeleteAlbumMutation } from '../store'
import ExpandablePanel from './ExpandablePanel'
import Button from './Button'
import PhotosList from './PhotosList'

function AlbumListItem({album}) {
    const [ deleteAlbum, result ] = useDeleteAlbumMutation()

    function handleDeleteAlbum(){
        deleteAlbum(album)
    }

    const header = (
        <div className='flex flex-row'>
            <Button onClick={handleDeleteAlbum} loading={result.isLoading}>X</Button>
            <div>{album.title}</div>
        </div>
    )
    
  return (
    <ExpandablePanel key={album.id} header={header}>
        <PhotosList album={album}/>
    </ExpandablePanel>
  )
}

export default AlbumListItem