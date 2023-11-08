import React from 'react'
import { TiDelete } from 'react-icons/ti'

import useThunk from '../hooks/use-thunk'
import { deleteUser } from '../store'
import Button from './Button'

function UserListItem({user}) {
    const [ doDeleteUser, isDeletingUser, deletingUserError ] = useThunk(deleteUser)

    function handleDeleteUser(userId){
        doDeleteUser(userId)
      }

    return (
        <div className='mb-2 border rounded'>
            <div className='flex p-2 justify-between items-center cursor-pointer'>
                <div className='flex flex-row items-center justify-between'>
                    <Button className='mr-3' loading={isDeletingUser} onClick={() => handleDeleteUser(user.id)}>
                        <TiDelete />
                    </Button>
                    { deletingUserError && <div>Error at deleting user</div> }
                    {user.name}
                </div>
            </div>
        </div>
    )
}

export default UserListItem