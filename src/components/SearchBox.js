import React, { useEffect, useState } from 'react'
import { fetchData,exerciseOptions } from '../utils/fetchData'
import ItemsBanner from './ItemsBanner'

function SearchBox() {
    const [search, setsearch] = useState("")
    const [exercises, setexercises] = useState([])
    const [bodyParts, setbodyParts] = useState([])
    const getFetch = async(e) => {
        e.preventDefault();
        if(search){
            const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
            const searchedData = exerciseData.filter((exercise) => 
                exercise.name.toLowerCase().includes(search) ||
                exercise.equipment.toLowerCase().includes(search) ||
                exercise.target.toLowerCase().includes(search) ||
                exercise.bodyPart.toLowerCase().includes(search)
            );
            setsearch('');
            setexercises(searchedData)
        }
        console.log(exercises)
    }
    useEffect(() => {
        const bodyPartData = async() => {
        const getBodyPart = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);
        setbodyParts(['all',...getBodyPart])
        }
        bodyPartData();
    }, [])
    
  return (
    <>
        <div className='flex justify-center flex-col'>
            <h2 className='text-gray-500 text-medium sm:text-2xl text-md text-center'>Find your best exercises for your next workout !</h2>
            <div className='flex justify-center mt-10'>
                <input value={search.toLowerCase()} onChange={(e) => setsearch(e.target.value)}  type='text' className='p-2 border-2 border-gray-100 rounded-sm w-6/12 focus:outline-blue-100' placeholder='type your exercise...'/>
                <button onClick={getFetch} className='bg-blue-500 text-white px-1 py-2 sm:px-4 sm:py-2 sm:text-md text-sm rounded-sm text-light sm:text-light'>Search</button>
            </div>
            <ItemsBanner data={bodyParts}/>
        </div>

    </>
  )
}

export default SearchBox