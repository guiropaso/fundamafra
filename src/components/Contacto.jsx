import React from 'react'

export default function Contacto() {
  return (
    <>
      <section id='contacto-intro' className='relative'>
        <div className='container mx-auto text-center py-40'>
          <h2 className='text-5xl font-bold text-white'>¿Tienes alguna pregunta?</h2>
          <p className='text-lg mt-12 text-white max-w-xl mx-auto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis voluptatem laudantium dolores dolor et amet quia vero similique quisquam ea.</p>
        </div>
        <div class="curves">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg>
        </div>
      </section>
      <section id='contact-form'>
        <div className='container mx-auto flex flex-col md:flex-row justify-around items-center'>
          <div>
            <img className='relative -mt-36' src="../../public/contacto.png" alt="" />
          </div>
          <div className=''>
            <form className='bg-gray-50 border-2 border-slate-300 p-10 rounded-lg' action="">
              <label htmlFor="name">Name</label>
              <input type="text" id='name' name='name' className='border-2 pl-4 w-60 border-slate-300 mx-auto focus:outline-royal rounded-md'/>
            </form>
          </div>

        </div>
      </section>

    </>
  )
}
