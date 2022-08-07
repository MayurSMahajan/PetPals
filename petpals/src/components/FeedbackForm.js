import React from 'react'

const FeedbackForm = () => {
  return (
    <div className='flex flex-col m-1 p-1'>
        <h1 className='m-2 text-3xl font-bold'>Thank You for using our service!</h1>
        <p className='m-2 text-md font-semibold'>We value your feedback and will use it to improve our service.</p>
        <form className='flex m-2 flex-col w-1/2'>
            <label className='m-2'>
                <p>How much did you like the platform?</p>
                <input type="text" className='m-1 p-2 rounded-md' placeholder="1-5" />
            </label>
            <label className='m-2'>
                <p>How much did you like the platform?</p>
                <input type="text" className='m-1 p-2 rounded-md' placeholder="1-5" />
            </label>
            <label className='m-2'>
                <p>How much did you like the platform?</p>
                <input type="text" className='m-1 p-2 rounded-md' placeholder="1-5" />
            </label>
            <button type="submit" className='border w-24 m-1 p-1 rounded-lg'>Submit</button>
        </form>
    </div>
  )
}

export default FeedbackForm