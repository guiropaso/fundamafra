import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {

  useEffect(() => {
    let hambutton = document.getElementById('menu-btn')
    let mobileNav = document.getElementById('menu')
    hambutton.addEventListener('click',() => {
      hambutton.classList.toggle('open')
      mobileNav.classList.toggle('flex')
      mobileNav.classList.toggle('hidden')
    })
  },[])

  return (
    <>
        <nav className='relative max-w-sm md:container mx-auto py-6 '>
          {/* Container */}
          <div className='flex items-center justify-between'>
            {/* Logo */}
            <div>
              <img  src="/fundamafra-logoweb.png" alt="" />
            </div>
            {/* Pages */}
            <div className='hidden space-x-12 font-semibold md:flex'>
              <Link className='hover:text-mainJam' to="/">Inicio</Link>
              <Link className='hover:text-mainJam' to="/proyectos">Proyectos</Link>
              <Link className='hover:text-mainJam' to="/contacto">Contacto</Link>
            </div>
            {/* CTA */}
            <a className='p-2 px-6 hidden text-white font-medium bg-purple rounded-full hover:bg-mainJam md:block' href="#">Dona</a>
            <button id="menu-btn" className='block md:hidden focus:outline-none'>
              <span className='hamburguer-top'></span>
              <span className='hamburguer-middle'></span>
              <span className='hamburguer-bottom'></span>
            </button>
          </div>
          {/* Hamburguer Menu */}
          <div className='md:hidden'>
            <div id='menu' className='absolute hidden flex-col items-center mt-10 font-semibold left-20 right-20 drop-shadow-md divide-y'>
              <a className='w-full text-center leading-10 rounded-t bg-white' href="#">Proyectos</a>
              <a className='w-full text-center leading-10 bg-white' href="#">Inicio</a>
              <a className='w-full text-center leading-10 bg-white' href="#">Contacto</a>
              <a className='w-full text-center leading-10 rounded-b bg-indigo-600 text-white' href="#">Dona ahora</a>
            </div>
          </div>
        </nav>
    </>
  )
}
