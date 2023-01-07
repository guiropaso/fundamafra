import React from 'react'
import {FaMedal} from 'react-icons/fa'

export default function Proyectos() {
  return (
    <>
      <section id='proyectos-banner' className='bg-blend-multiply'>
          <div className='container mx-auto flex flex-col py-36 justify-center items-center'>
              <h2 className='text-5xl font-bold text-pink-500'>AYÚDANOS <span className='text-5xl font-bold text-white'> A CUMPLIR SUEÑOS</span> </h2>
              <p className='text-white mt-2 font-bold text-lg max-w-lg '>Conoce nuestros proyectos</p>
              <p className='text-white mt-5 text-lg max-w-2xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium exercitationem praesentium cum rerum rem libero incidunt, natus, aperiam consequuntur eius necessitatibus hic veniam neque quam dicta odit aliquid quas qui!</p>
          </div>
      </section>
      <section id='proyectos-enfoque'>
        <h3 className='text-center my-20 font-bold text-5xl text-royal md:text-3xl'>NUESTRO <span className='text-center my-20 font-bold text-5xl text-mainJam md:text-3xl'>ENFOQUE</span></h3>
        <div className='container mx-auto flex justify-around items-center md:flex-row'>
          <div>
            <div className='flex justify-center space-x-5 bg-lavender items-center flex-row'>
              <div className='text-red-500'>
                <FaMedal className='text-6xl'/>
              </div>
              <div className='max-w-md'>
                <h4 className='text-3xl mb-5 text-royal'>Give Donation</h4>
                <p className='text-lg text-purple'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sunt quibusdam quia suscipit. Ratione, ullam!</p>
              </div>
              <span className='proyectos--span-rotated text-sm font-bold bg-red-500 p-1'>Prueba 1</span>
            </div>
            <div></div>
            <div></div>
          </div>
          <div>
            <img className='mx-auto' src="../../public/manos.png" alt="" />
          </div>
        </div>
      </section>
    </>
  )
}
