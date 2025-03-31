import React from 'react'

const projects = () => {
  return (
    <section id='projects' className='min-h-screen items-center justify-center flex'>
      <div className='max-w-5xl p-16 shadow-md rounded border'>
        <h2 className='font-bold text-3xl pb-20 text-center'>Projects</h2>
      
      <div className='grid grid-cols-2 gap-14'>
        <div className='p-32 border rounded-xl shadow'>Project 1</div>
        <div className='p-32 border rounded-xl shadow'>Project 2</div>
        
      </div>
      </div>
      
    </section>
  )
}

export default projects
