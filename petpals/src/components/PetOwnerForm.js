import React from 'react'
import Form from './Form'

const PetOwnerForm = () => {
    let imageUrl = 'https://images.unsplash.com/photo-1601758177266-bc599de87707?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  return (
    <div className='flex w-full'>
        <div className='w-full'>
            <img className='h-screen w-full' src={imageUrl} alt=""/>
        </div>
        <div className='bg-[#BDB09D] w-1/3'>
            <h1 className='text-2xl p-2 m-2 font-bold'>Register as a Pet Owner</h1>
            <Form charge={false} />
        </div>
    </div>
  )
}

export default PetOwnerForm