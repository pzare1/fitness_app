import React from 'react'
import BodyPart from './BodyPart'

function ItemsBanner({data,bodyParts,setbodyParts}) {
  return (
    <>
    <div className=' flex justify-center flex-wrap my-10'>
        {data.map((item) => (
          <BodyPart key={item.id} item={item} bodyParts={bodyParts} setbodyParts={setbodyParts}/>
        ))}
    </div>
    </>
  )
}

export default ItemsBanner