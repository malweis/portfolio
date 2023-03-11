import React from 'react'
import TrabajosItem from './TrabajosItem'

const data  = [
    {
        year:  2023,
        title: 'Facultad FOTRIEM',
        duration: '3 Meses',
        details: 'Desarrollo de landings y parte del sistema de inscripciones'
    },
];
function Trabajos() {
  return (
    <div  id="work" className='max-w-[1040px] m-auto  md:pl-20  p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Trabajos</h1>
        {data.map((item, idx)=>(
            <TrabajosItem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details}/>
        ))}
    </div>
  )
}

export default Trabajos