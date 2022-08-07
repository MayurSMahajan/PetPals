import React from 'react'
import Form from './Form'

const PetSitterForm = () => {
    let imageUrl="https://images.unsplash.com/photo-1604848698030-c434ba08ece1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
  return (
    <div className='flex w-full'>
        <div className='w-full'>
            <img className='h-screen w-full' src={imageUrl} alt=""/>
        </div>
        <div className='bg-[#C7A697] w-1/3'>
            <h1 className='text-2xl p-2 m-2 font-bold'>Register as a Pet Sitter</h1>
            <Form charge={true} user_type="sitter"/>
        </div>
    </div>
  )
}

export default PetSitterForm