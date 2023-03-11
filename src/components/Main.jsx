import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {FaTwitter, FaFacebookF, FaLinkedinIn} from 'react-icons/fa'
import {VscFilePdf} from 'react-icons/vsc'
import CVi from '../assets/document.pdf'
function Main() {
  return (
    <div id='main'>
        <img   className='w-full h-screen object-cover object-left scale-x-[-1]' src="https://cdn.stocksnap.io/img-thumbs/960w/office-desk_WPTZMPBOF0.jpg" alt="" />
        <div className='w-full h-screen  absolute top-0 left-0  bg-white/50'>
        <div className='max-w-[700px]  m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
            <h1 className='sm:text-5xl text-4xl  font-bold text-gray-800'>
            Me llamo Federico Molas
            </h1>
            <h2  className='flex  sm:text-3xl text-2xl pt-4 text-gray-800'>
            Soy un <TypeAnimation
      sequence={[
        'Desarrollador Full-Stack', // Types 'One'
        1000, // Waits 1s
        'Programador', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'Desarrollador Back-end', // Types 'Three' without deleting 'Two'
        2000,
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1em', paddingLeft: '5px' }}
    />
            </h2>
            <div className=' flex justify-between pt-6 max-w-[200px]  w-full'>
                
                 <a  href='https://www.linkedin.com/in/federico-luis-molas-sanchez-007aa3230'><FaLinkedinIn className='cursor-pointer' size={20}/></a>

                <FaTwitter  className='cursor-pointer' size={20}/>

                <FaFacebookF className='cursor-pointer' size={20}/>
                <a  href={CVi}><VscFilePdf className='cursor-pointer' size={20}/></a>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Main