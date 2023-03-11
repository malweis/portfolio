import React from 'react'
import ProjectsItem from './ProjectsItem'
import fotriemImg from '../assets/fotriem.png'

function Projects() {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20  p-4 py-16'>
        <h1 className='text-4xl font-bold  text-center text-[#001b5e]'>Projectos</h1>
        <p  className='text-center py-8'>Proyectos en los que he trabajado sea de forma Profesional o Personal</p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectsItem  img={fotriemImg}  title={'Facultad FOTRIEM index'}/>
        </div>
    </div>
  )
}

export default Projects