import React from 'react'
import banner from '../assets/main-banner.jpg'
function Banner() {
  return (
    <>
        <div className=' sm:grid sm:grid-cols-2 mx-auto sm:mb-0 mb-10'>
        <div className='p-3 sm:p-20'>
            <div className='mt-10 sm:mt-52 sm:text-left text-center'>
                <p className=' text-gray-500 font-thin sm:mt-20 text-xl'>Fitclub</p>
                <h2 className='text-gray-500 text-bold sm:text-5xl text-xl mt-3'>Be Powefull, Do Sport !</h2>
                <p className=' text-gray-500 font-thin text-sm sm:text-xl'>Get best advices for your next workout</p>
                <button className='bg-blue-500 text-sm sm:text-md font-light text-white p-2 rounded-md mt-5'>Exercises</button>
                <h1 className='hidden sm:block text-300 mt-20 text-gray-200 sm:opacity-50'>Exercises</h1>
            </div>   
            </div>
            <div className=' items-center text-center z-30 hidden sm:block'>
                <img src={banner}/>
            </div> 
        </div> 
    </>
  )
}

export default Banner