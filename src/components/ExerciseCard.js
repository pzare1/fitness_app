import React from 'react'
import { Link } from 'react-router-dom'


function ExerciseCard({exercise}) {
const capitalizedExerciseName = exercise.name.charAt(0).toUpperCase() + exercise.name.slice(1);
const capitalbodyPart = exercise.bodyPart.charAt(0).toUpperCase() + exercise.bodyPart.slice(1);
const capitalTarget = exercise.target.charAt(0).toUpperCase() + exercise.target.slice(1);
  return (
    <Link to={`/exercises/${exercise.id}`}>
        <div className='sm:p-10 p-5 bg-white hover:scale-110 transition-all duration-300'>
            <h1 className='text-blue-400 text-center border-b-2 outline-offset-8 border-blue-300 border-opacity-70 sm:text-xs text-xs p-4 w-full'>{capitalizedExerciseName}</h1>
            <img className=' align-middle items-center' src={exercise.gifUrl} loading='lazy'/>
            <div className='flex justify-center my-5'>
              <h1 className='text-blue-500 bg-blue-100 p-2 w-full rounded-sm text-xs sm:text-md'>{exercise.id}</h1>
                <button className='text-white text-xs sm:text-sm w-[100px] bg-blue-500 rounded-md p-1'>{capitalTarget}</button>
                <button className='text-blue-500 text-xs sm:text-sm w-[100px] bg-white border-2 border-blue-500 mx-2 rounded-md p-1'>{capitalbodyPart}</button>
            </div>
        </div>
    </Link>
    
  )
}

export default ExerciseCard
