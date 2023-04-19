import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { exerciseOptions,fetchData } from '../utils/fetchData';
import Detail from '../components/Detail';
import SmilarExercises from '../components/SmilarExercises';

function ExerciseDetail() {
  const [exerciseDetail, setexerciseDetail] = useState({});
  const [targetExercises, settargetExercises] = useState([]);
  const [equipmentExercises, setequipmentExercises] = useState([]) 
  const {id} = useParams();
  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions)
      setexerciseDetail(exerciseDetailData);
      const targetEx = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,exerciseOptions)
      settargetExercises(targetEx);
      const equipmentEx = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,exerciseOptions)
      setequipmentExercises(equipmentEx)
    }
    fetchExerciseData();
  }, [id])
  
  return (
    <>
      <Detail exerciseDetail={exerciseDetail}/>
      <SmilarExercises targetExercises={targetExercises} equipmentExercises={equipmentExercises}/>
    </>
  )
}

export default ExerciseDetail