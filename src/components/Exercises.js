import React from 'react'
import ExerciseCard from './ExerciseCard'

function Exercises({exercises,bodyPart,setexercises}) {
  return (
    <div className='grid sm:grid-cols-3 grid-cols-2 items-center text-center'>
      {exercises.map((exercise,index) => (
        <div key={index}><ExerciseCard exercise={exercise}/></div>
      ))}
    </div>
  )
}

export default Exercises
