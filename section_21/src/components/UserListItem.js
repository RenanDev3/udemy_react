import React from 'react'
import { TiDelete } from 'react-icons/ti'

import useThunk from '../hooks/use-thunk'
import { deleteUser } from '../store'
import Button from './Button'
import ExpandablePanel from './ExpandablePanel'
import AlbumsList from './AlbumsList'

function UserListItem({user}) {
    const [ doDeleteUser, isDeletingUser, deletingUserError ] = useThunk(deleteUser)

    function handleDeleteUser(userId){
        doDeleteUser(userId)
      }

    const header = <>
                    <Button className='mr-3' loading={isDeletingUser} onClick={() => handleDeleteUser(user.id)}>
                        <TiDelete />
                    </Button>
                    { deletingUserError && <div>Error at deleting user</div> }
                    {user.name}
                    </>

    return (
        <ExpandablePanel header={header}>
            <AlbumsList user={user}/>
        </ExpandablePanel>
    )
}

export default UserListItem