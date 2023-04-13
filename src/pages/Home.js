import React from 'react'
import Banner from '../components/Banner'
import Exercises from '../components/Exercises'
import SearchBox from '../components/SearchBox'

function Home() {
  return (
    <>  
      <Banner/>
      <SearchBox/>
      <Exercises/>
    </>
  )
}

export default Home