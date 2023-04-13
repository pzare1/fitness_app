import React from 'react'

function ItemsBanner({data}) {
  return (
    <>
    <div className=' flex justify-center flex-wrap my-10'>
        {data.map((item) => (
            <div className='p-4 w-[150px] m-5 justify-center space-x-3 rounded-md text-center bg-blue-100 text-blue-500 text-md border-blue-600 border-spacing-1 border-2 border-opacity-5' key={item.id || item}>{item}</div>
        ))}
    </div>
    </>
  )
}

export default ItemsBanner