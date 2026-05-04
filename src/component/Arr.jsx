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

  

//   useEffect(() => {
//      const api = async () => {
//     try {
//         const res = await fetch("https://dummyjson.com/products");
//         const data = await res.json();
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
//   }

//     api()
//   }, [])

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
    <div>
        {products.map((item)=>(
          <div key={item.id} className='text-red-500 flex mb-5 gap-5
           border border-accent w-[200px] h-[100px] rounded-2xl justify-center items-center'>
            <p>{item.name}</p>
            <p>{item.price}</p>
          </div>  
        ))}
        
   
       <p>{count}</p>
       
    </div>
  )
}

export default Arr