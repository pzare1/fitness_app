import React from 'react'

function SmilarExercises({targetExercises,equipmentExercises}) {
  const filterExercise = targetExercises.slice(0,6)
  const filterequipment = equipmentExercises.slice(0,6)
  return (
    <>  
      <div className='flex flex-col'>
        <h1 className='sm:text-xl text-sm text-blue-500 border-b-2 border-blue-500 border-opacity-50 border-spacing-5 font-bold py-5 px-5 m-10'>Similar Exercises</h1>
        <div className='grid sm:grid-cols-3 grid-cols-2 align-middle text-center p-10 items-center'>
          {filterExercise.map((item) => (
            <div className=' flex flex-col justify-center p-2 sm:p-10 shadow m-2'>
            <h1 className='text-blue-500 bg-blue-50 sm:font-medium font-light sm:rounded-md rounded-sm text-center sm:text-lg text-xs sm:p-3 p-1 w-full'>{item.name}</h1>
                <img alt={item.name} src={item.gifUrl} className='sm:p-10 p-4'/>
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-col'>
        <h1 className='sm:text-xl text-sm text-blue-500 border-b-2 border-blue-500 border-opacity-50 border-spacing-5 font-bold py-5 px-5 m-10'>Similar Equipment</h1>
        <div className='grid sm:grid-cols-3 grid-cols-2 align-middle text-center p-10 items-center'>
          {filterequipment.map((item) => (
            <div className=' flex flex-col justify-center p-2 sm:p-10 shadow m-2'>
            <h1 className='text-blue-500 bg-blue-50 sm:font-medium font-light sm:rounded-md rounded-sm text-center sm:text-lg text-xs sm:p-3 p-1 w-full'>{item.name}</h1>
                <img alt={item.name} src={item.gifUrl} className='sm:p-10 p-4'/>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default SmilarExercises