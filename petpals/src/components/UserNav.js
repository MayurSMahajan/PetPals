import React from 'react'
import SearchBar from './SearchBar'
import dogs from "../images/dogs.png"

const UserNav = () => {
    let username = "Mayur"
  return (
    <div className='flex justify-around items-bottom'>
        <div><p>Hey <strong>{username}</strong></p></div>
        <div className='w-2/4'><SearchBar/></div>
        <div ><img src={dogs} className="rounded-full w-12 h-12 border" alt="Avatar"/></div>
    </div>
  )
}

export default UserNav