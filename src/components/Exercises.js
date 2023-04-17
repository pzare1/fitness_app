import React, { useState } from 'react'
import ExerciseCard from './ExerciseCard'
import { Pagination } from '@mui/material'

function Exercises({exercises,bodyPart,setexercises}) {
  const [currentPage, setcurrentPage] = useState(1)
  const exercisePerPage = 9;
  console.log(exercises);
  const paginate = (e,value) => {
    setcurrentPage(value);
    window.scrollTo({top:1300,behavior:'smooth'})
  }
  const indexOfLastExercise = currentPage*exercisePerPage;
  const indexOfFirstExercise = indexOfLastExercise-exercisePerPage;
  const currentExercise = exercises.slice(indexOfFirstExercise,indexOfLastExercise)
  return (
    <>
    <div className='grid sm:grid-cols-3 grid-cols-2 items-center text-center m-auto'>
      {currentExercise.map((exercise,index) => (
        <div key={index}><ExerciseCard exercise={exercise}/></div>
      ))}
    </div>
    <div>
    {
        exercises.length>9 && (
          <div className='flex justify-center'>
          <Pagination
           className='text-center items-center m-auto'
           defaultPage={1}
           count={Math.ceil(exercises.length/exercisePerPage)}
           page={currentPage}
           onChange={paginate}
           variant="outlined" color="primary" />
           </div>
        )
      }
    </div>
    </>
  )
}

export default Exercises
