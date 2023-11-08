import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import useThunk from '../hooks/use-thunk'
import { fetchUsers, addUser } from '../store'
import Skeleton from './Skeleton'
import Button from './Button'
import UserListItem from './UserListItem'

function UsersList() {
  const [doFetchUsers, isLoadingUsers, loadingUsersErrors] = useThunk(fetchUsers)
  const [doAddUser, isCreatingUser, creatingUserError] = useThunk(addUser)
  const { data } = useSelector((state) => state.users)

  useEffect(() => {
    doFetchUsers()
  }, [doFetchUsers])

  let content = null
  if (isLoadingUsers){
    content =  <h1><Skeleton times={6} customClasses="h-10 w-full"/></h1>
  } else if (loadingUsersErrors) {
    content = <h1>Error: {loadingUsersErrors.message}</h1>
  } else {
    content = data.map((user) => <UserListItem key={user.id} user={user} />)
  }

  function handleAddUser(){
    doAddUser()
  }

  return (
    <div>
      <div className='flex flex-row justify-between m-3'>
        <h1 className='m-2 text-xl'>Users</h1>
          <Button primary onClick={handleAddUser} loading={isCreatingUser}>+ Add User</Button>
        { creatingUserError && "Error at creating new user." }
      </div>
      <div>{content}</div>
    </div>
  )
}

export default UsersList