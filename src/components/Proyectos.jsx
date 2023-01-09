import React from 'react'
import {FaMedal, FaChild, FaBook} from 'react-icons/fa'

export default function Proyectos() {
  return (
    <>
      <section id='proyectos-banner' className='bg-blend-multiply'>
          <div className='container mx-auto flex flex-col py-36 justify-center items-center'>
              <h2 className='text-5xl text-center font-bold text-pink-500'>AYÚDANOS <span className='text-5xl font-bold text-white'> A CUMPLIR SUEÑOS</span> </h2>
              <p className='text-white mt-2 font-bold text-lg max-w-lg '>Conoce nuestros proyectos</p>
              <p className='text-white mt-5 text-lg px-2 max-w-2xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium exercitationem praesentium cum rerum rem libero incidunt, natus, aperiam consequuntur eius necessitatibus hic veniam neque quam dicta odit aliquid quas qui!</p>
          </div>
      </section>
      <section id='proyectos-enfoque'>
        <h3 className='text-center my-20 font-bold text-3xl text-royal'>NUESTRO <span className='text-center my-20 font-bold text-3xl text-mainJam'>ENFOQUE</span></h3>
        <div className='container mx-auto flex flex-col justify-around items-center md:flex-row'>
          <div className='space-y-6 max-w-sm md:max-w-none'>
            <div className='flex justify-center space-x-5 bg-lavender items-center flex-row p-5 rounded-md'>
              <div className='text-mainJam'>
                <FaMedal className='text-6xl'/>
              </div>
              <div className='max-w-md'>
                <h4 className='text-3xl mb-5 text-royal'>Aprendizaje Efectivo</h4>
                <p className='text-lg text-purple'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sunt quibusdam quia suscipit. Ratione, ullam!</p>
              </div>
            </div>
            <div className='flex justify-center space-x-5 bg-royal text-white items-center flex-row p-5 rounded-md'>
              <div className=''>
                <FaChild className='text-6xl'/>
              </div>
              <div className='max-w-md text-white'>
                <h4 className='text-3xl mb-5'>Niñez y juventud</h4>
                <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sunt quibusdam quia suscipit. Ratione, ullam!</p>
              </div>
            </div>
            <div className='flex justify-center space-x-5 bg-lavender items-center flex-row p-5 rounded-md'>
              <div className='text-mainJam'>
                <FaBook className='text-6xl'/>
              </div>
              <div className='max-w-md'>
                <h4 className='text-3xl mb-5 text-royal'>Enseñanzas Aplicables</h4>
                <p className='text-lg text-purple'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sunt quibusdam quia suscipit. Ratione, ullam!</p>
              </div>
            </div>
          </div>
          <div>
            <img className='mx-auto mt-10 w-3/4 md:w-full md:mt-0' src="../../public/manos.png" alt="" />
          </div>
        </div>
      </section>
      <section id='proyectos-apadrina' className='bg-mainJam border-b-8 border-royal'>
        <div className='container mx-auto text-center text-white mt-20 py-5'>
          <h4 className='font-bold text-3xl'>WE MAKE A LIVING BY WHAT WE GET. WE MAKE A LIFE BY WHAT WE GIVE.</h4>
          <h5 className='text-sm'>WINSTON S. CHURCHILL</h5>
        </div>
      </section>
      <section id='proyectos-proyectos'>
        <div className='container mx-auto my-20'>
        <h3 className='text-center my-20 font-bold text-3xl text-royal'>PROYECTOS <span className='text-center my-20 font-bold text-3xl text-mainJam'>A EJECUTAR</span></h3>
        </div>
      </section>
    </>
  )
}
