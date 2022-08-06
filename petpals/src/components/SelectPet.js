import React from 'react'
import cats from "../images/cats.png"
import dogs from "../images/dogs.png"
import other from "../images/other.png"

const SelectPet = () => {
    let cats_url = "";
    let dogs_url = "";
    let other_url = "";

    return (
        <div className="container mx-auto px-4 bg-gray-100 pt-10">
            <div className='text-center'>
                <h1 className='text-4xl font-semibold mt-5'>Which Pet are you Interested in?</h1>
                <p className='text-slate-600 mt-5'>Select your which type of pet you have or which type of pet you want to take care of</p>
            </div>  
            <div className='flex justify-around pt-20 pb-20'>
                <div className='w-80 rounded-2xl hover:scale-105 delay-200 transition-all'>
                    <a href={cats_url}><img src={cats} alt='Cats'></img></a>
                    <p>Cats</p>                    
                </div>
                <div className='w-80 rounded-2xl hover:scale-105 delay-200 transition-all'>
                    <a href={dogs_url}><img src={dogs} alt='Dogs'></img></a>
                    <p>Dogs</p>
                </div>
                <div className='w-80 rounded-2xl hover:scale-105 delay-200 transition-all'>
                    <a href={other_url}><img src={other} alt='Other'></img></a>
                    <p>Other</p>
                </div>
            </div>        
        </div>
    )
}

export default SelectPet