import React, { useEffect } from 'react'
import  {useSelector } from 'react-redux'

import useThunk from '../hooks/use-thunk'
import { fetchUsers } from '../store'
import { addUser } from '../store'
import Skeleton from './Skeleton'
import Button from './Button'

function UsersList() {
  const [doFetchUsers, isLoadingUsers, loadingUsersErrors] = useThunk(fetchUsers)
  const [doAddUser, isCreatingUser, creatingUserError] = useThunk(addUser)
  const { data } = useSelector((state) => state.users)

  useEffect(() => {
    doFetchUsers()
  }, [doFetchUsers])

  if (isLoadingUsers){
    return <h1><Skeleton times={6} customClasses="h-10 w-full"/></h1>
  }
  if (loadingUsersErrors){
    return <h1>Error: {loadingUsersErrors.message}</h1>
  }

  const renderedUsers = data.map((user) => {
    return <div key={`userList-${user.id}`}> {user.name} </div>
  })

  function handleAddUser(){
    doAddUser()
  }

  return (
    <div>
      <div className='flex flex-row justify-between m-3'>
        <h1 className='m-2 text-xl'>Users</h1>
        {
          isCreatingUser ? "Creating user..." :
          <Button primary onClick={handleAddUser}>+ Add User</Button>
        }
        { creatingUserError && "Error at creating new user." }
      </div>
      <div>{renderedUsers}</div>
    </div>
  )
}

export default UsersList