import React, { useEffect, useState } from 'react'

let price = 700

const products = [
    {
        id : 1 ,
        name : "phone",
        price : `$1010`

    },
    {
        id : 2 ,
        name : "laptop",
        price : `400`

    },
    {
        id : 3 ,
        name : "iron",
        price : `$300`

    }
]

const Arr = () => {

   const [count , setCount] = useState(0)
      const increase = () => {
        setCount(count + 1)
      }

      useEffect(()=> {
        setInterval(() => {
            setCount(prev => prev + 1)
        },2000)
      },[])
      
  return (
    <div className='w-full'>
        <div className='flex flex-col gap-3 sm:gap-4 md:gap-5'>
          {products.map((item)=>(
            <div key={item.id} className='text-red-500 flex flex-col sm:flex-row gap-3 sm:gap-5 border border-accent rounded-2xl justify-center sm:justify-start items-center sm:items-center p-4 sm:p-5 w-full sm:w-auto md:w-80'>
              <p className='text-base sm:text-lg font-semibold'>{item.name}</p>
              <p className='text-base sm:text-lg font-semibold'>{item.price}</p>
            </div>  
          ))}
        </div>
        
        <div className='mt-6 sm:mt-8'>
          <p className='text-lg sm:text-xl font-bold'>Count: {count}</p>
        </div>
    </div>
  )
}

export default Arr
