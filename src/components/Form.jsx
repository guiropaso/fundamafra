import React from 'react'
import {useFormik} from 'formik'


function Form() {
    const formik = useFormik({})
    return (
        <form className='bg-gray-50 border-2 border-slate-300 p-10 rounded-lg' action="">
            <div className='flex flex-col'>
                <label htmlFor="name" className='font-bold'>Nombre</label>
                <input type="text" id='name' name='name' className='border-2 px-4 w-full border-slate-300 mx-auto focus:outline-royal rounded-md py-2 mb-5 mt-2'/>
                <label htmlFor="tel" className='font-bold'>Teléfono</label>
                <input type="text" id='tel' name='tel' className='border-2 px-4 w-full border-slate-300 mx-auto focus:outline-royal rounded-md py-2 mb-5 mt-2'/>
                <label htmlFor="email" className='font-bold'>Email</label>
                <input type="text" id='email' name='email' className='border-2 px-4 w-full border-slate-300 mx-auto focus:outline-royal rounded-md py-2 mb-5 mt-2'/>
                <label htmlFor="mensaje" className='font-bold'>Mensaje</label>
                <textarea name="mensaje" id="mensaje" cols="30" rows="5" className='border-2 border-slate-300 focus:outline-royal rounded-md py-2 px-4 mt-2'></textarea>
            </div>
            
        </form>
    )
}

export default Form