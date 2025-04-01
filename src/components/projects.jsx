import React from 'react'

const projects = () => {
  return (
    <section id='projects' className='min-h-screen items-center justify-center flex'>
      <div className='max-w-5xl p-14 mx-auto shadow-md rounded border'>
        <h2 className='font-bold text-3xl pb-20 text-center text-blue-950'>Projects</h2>
      
      <div className='grid grid-cols-2 gap-14'>
        <div className='p-6 border rounded-xl shadow hover:-translate-y-2 transition-all'>
          <h3 className='text-xl font-bold mb-2'>Notes Saver</h3>
            <p>A sleek and efficient notes app built with React, Redux, and Tailwind,
               allowing users to create, edit, and organize notes effortlessly.</p>
               <div className='flex flex-wrap gap-2 mt-4'>
          {["React", "Redux", "Tailwind"].map((tech, key) =>(
            <span
            key={key}
            className="
              bg-blue-500/10 text-blue-500 py-1 px-3 
              rounded-full text-sm
              transition
              hover:bg-blue-500/20 hover:-translate-y-0.5
              hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
            "
          >
            {tech}
          </span>
          ))}
               </div>
        </div>
        <div className='p-6 border rounded-xl shadow hover:-translate-y-2 transition-all'>
          <h3 className='text-xl font-bold mb-2'>Room booking site</h3>
            <p>A modern and user-friendly room booking site that allows 
              users to seamlessly search, reserve, and manage room bookings.</p>
              <div className='flex flex-wrap gap-2 mt-4'>
          {["HTML", "CSS", "JAVASCRIPT"].map((tech, key) =>(
            <span
            key={key}
            className="
              bg-blue-500/10 text-blue-500 py-1 px-3 
              rounded-full text-sm
              transition
              hover:bg-blue-500/20 hover:-translate-y-0.5
              hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
            "
          >
            {tech}
          </span>
          ))}
               </div>
          </div>
        
      </div>
      </div>
      
    </section>
  )
}

export default projects
