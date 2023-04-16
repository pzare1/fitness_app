import React from 'react'
import BodyPart from './BodyPart'

function ItemsBanner({data,bodyPart,setbodyPart}) {
  console.log(bodyPart)
  return (
    <>
    <div className=' flex justify-center flex-wrap my-10'>
        {data.map((item) => (
          <BodyPart key={item.id} item={item} setbodyPart={setbodyPart}/>
        ))}
    </div>
    </>
  )
}

export default ItemsBanner