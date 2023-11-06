import React, { useEffect } from 'react'
import  {useDispatch, useSelector } from 'react-redux'

import { fetchUsers } from '../store'
import { addUser } from '../store'
import Skeleton from './Skeleton'
import Button from './Button'

function UsersList() {
  const dispatch = useDispatch()
  const {isLoading, data, error} = useSelector((state) => state.users)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  if (isLoading){
    return <h1><Skeleton times={6} customClasses="h-10 w-full"/></h1>
  }
  if (error){
    return <h1>Error: {error.message}</h1>
  }

  const renderedUsers = data.map((user) => {
    return <div key={`userList-${user.id}`}> {user.name} </div>
  })

  function handleAddUser(){
    dispatch(addUser())
  }

  return (
    <div>
      <div className='flex flex-row justify-between m-3'>
        <h1 className='m-2 text-xl'>Users</h1>
        <Button primary onClick={handleAddUser}>
          + Add User
        </Button>
      </div>
      <div>{renderedUsers}</div>
    </div>
  )
}

export default UsersList