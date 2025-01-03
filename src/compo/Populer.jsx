import React, { useEffect, useState } from 'react'

const Populer = ({blogs}) => {
 const bloggs=blogs.slice(0,6);
  return (
    <div>
        <h1 className='text-xl font-semibold'>Populer Blogs</h1> 
        <div className='flex flex-col gap-2 text-sm '>
      {bloggs.map((populerBlog)=>{
        return (
            <>
            <div key={populerBlog.id} className='border-b'>
                <h2>{populerBlog.title}</h2>
                <p>{populerBlog.read_time}</p>
            </div>
            </>
        )
      })}
      </div>
        </div>
   
  )
}

export default Populer