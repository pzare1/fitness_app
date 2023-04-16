import React, { useState } from 'react'
import Banner from '../components/Banner'
import Exercises from '../components/Exercises'
import SearchBox from '../components/SearchBox'

function Home() {
  const [exercises, setexercises] = useState([]);
  const [bodyPart, setbodyPart] = useState('all ');

  return (
    <>  
      <Banner/>
      <SearchBox setexercises={setexercises} bodyPart={bodyPart} setbodyPart={setbodyPart}/>
      <Exercises setexercises={setexercises} bodyPart={bodyPart} exercises={exercises}/>
    </>
  )
}

export default Home