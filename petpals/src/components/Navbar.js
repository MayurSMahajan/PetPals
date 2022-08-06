import React from 'react'

const Navbar = () => {
  return (
    <div className='h-[10vh] w-full border-b-2 flex justify-around items-center'>
        <h1 className='text-xl font-bold'>PetPals</h1>
        <ul className='list-none flex justify-around items-center w-1/3'>
            <li>About</li>
            <li>GitHub</li>
        </ul>
    </div>
  )
}

export default Navbar