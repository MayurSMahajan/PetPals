import React from 'react'

const Hero = () => {
    return (
        <div className='flex m-2 min-h-[85vh] w-full'>
            <div className='flex flex-col w-2/3'>
                <h1 className='text-xl'>Welcome to PetPals</h1>
            </div>
            <div className='flex flex-col w-1/3'>
                <button className='rounded-md p-2 w-1/2 items-center m-1 hover:bg-blue-900 bg-blue-500 text-white'>Continue as a Pet Owner</button>
                <button className='rounded-md p-2 w-1/2 items-center m-1 hover:bg-blue-900 bg-blue-500 text-white'>Continue as a Pet Sitter</button>
            </div>            
        </div>
    )
}

export default Hero