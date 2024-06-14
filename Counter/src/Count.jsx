import React from 'react'
import { useState } from 'react'

export default function Count() {
    const [count,setCount] = useState(10);
  return (
    <>
    <h2 className='mt-5 mb-3'>Count : {count}</h2>
    <button className='btn btn-success me-2' onClick={()=>{setCount(count + 10)}}>increment</button>
    <button  className='btn btn-danger ms-2' onClick={()=>{setCount(count - 10)}}>decrement</button><br /><br /><br /><br /><br /><br /><br />
    </>
  )
}