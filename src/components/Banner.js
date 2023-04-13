import React from 'react'
import banner from '../assets/main-banner.jpg'
function Banner() {
  return (
    <>
        <div className=' grid grid-cols-2 mx-auto'>
        <div className='p-20'>
            <div className='mt-10 sm:mt-30 text-left'>
                <p className=' text-gray-500 font-thin sm:mt-20 text-xl'>Fitclub</p>
                <h2 className='text-gray-500 text-bold sm:text-5xl text-xl mt-3'>Be Powefull, Do Sport !</h2>
                <button className='bg-blue-500 sm:text-xl text-white p-2 rounded-md mt-5'>Exercises</button>
                <h1 className='hidden sm:block text-300 text-gray-200 sm:opacity-50'>Exercises</h1>
            </div>   
            </div>
            <div className=' items-center text-center z-30'>
                <img src={banner}/>
            </div> 
        </div> 
    </>
  )
}

export default Banner