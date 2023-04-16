import React from 'react'
import { Link } from 'react-router-dom'

function ExerciseCard({exercise}) {
const capitalizedExerciseName = exercise.name.charAt(0).toUpperCase() + exercise.name.slice(1);
  return (
    <Link to={`/exercises/${exercise.id}`}>
        <div className='sm:p-20 p-5 bg-white'>
            <h1 className='text-blue-400 text-center border-b-2 outline-offset-8 border-blue-300 border-opacity-70 sm:text-sm text-xs p-4'>{capitalizedExerciseName}</h1>
            <img className=' align-middle items-center' src={exercise.gifUrl} loading='lazy'/>
            <div className='flex justify-center my-5'>
                <button className='text-white bg-blue-500 rounded-md p-2'>{exercise.target}</button>
                <button className='text-blue-500 bg-white border-2 border-blue-500 mx-2 rounded-md p-2'>{exercise.bodyPart}</button>
            </div>
        </div>
    </Link>
  )
}

export default ExerciseCard
