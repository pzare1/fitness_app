import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { exerciseOptions,fetchData } from '../utils/fetchData';
import Detail from '../components/Detail';
import Videos from '../components/Videos';
import SmilarExercises from '../components/SmilarExercises';

function ExerciseDetail() {
  const [exerciseDetail, setexerciseDetail] = useState({});
  const {id} = useParams();
  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions)
      setexerciseDetail(exerciseDetailData);
    }
    fetchExerciseData();
  }, [id])
  
  return (
    <>
      <Detail exerciseDetail={exerciseDetail}/>
      <Videos/>
      <SmilarExercises/>
    </>
  )
}

export default ExerciseDetail