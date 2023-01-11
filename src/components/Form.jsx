import React from 'react'
import {useFormik} from 'formik'

const initialValues = {
    name: '',
    email: '',
    tel: '',
    mensaje: ''
}

const onSubmit = values => console.log(values)

const validate = values => {
    let errors = {}

    if(!values.name) {
        errors.name = 'Required'
    }

    if(!values.email) {
        errors.email = 'Required'
    } else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email format'
    }


    if(!values.tel) {
        errors.tel = 'Required'
    }

    if(!values.mensaje) {
        errors.mensaje = 'Required'
    }

    return errors
}

function Form() {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })


    return (
        <form className='bg-gray-50 border-2 border-slate-300 p-10 rounded-lg' action="" onSubmit={formik.handleSubmit}>
            <div className='flex flex-col'>
                <label htmlFor="name" className='font-bold'>Nombre</label>
                <input type="text" id='name' name='name' onChange={formik.handleChange} value={formik.values.name} className='border-2 px-4 w-full border-slate-300 mx-auto focus:outline-royal rounded-md py-2 mb-5 mt-2'/>
                <label htmlFor="tel" className='font-bold'>Teléfono</label>
                <input type="text" id='tel' name='tel' onChange={formik.handleChange} value={formik.values.tel} className='border-2 px-4 w-full border-slate-300 mx-auto focus:outline-royal rounded-md py-2 mb-5 mt-2'/>
                <label htmlFor="email" className='font-bold'>Email</label>
                <input type="text" id='email' name='email' onChange={formik.handleChange} value={formik.values.email} className='border-2 px-4 w-full border-slate-300 mx-auto focus:outline-royal rounded-md py-2 mb-5 mt-2'/>
                <label htmlFor="mensaje" className='font-bold'>Mensaje</label>
                <textarea name="mensaje" id="mensaje" cols="30" rows="5" onChange={formik.handleChange} value={formik.values.mensaje} className='border-2 border-slate-300 focus:outline-royal rounded-md py-2 px-4 mt-2'></textarea>
                <button type='submit' className='bg-royal p-5 rounded-lg text-white font-bold mt-10 hover:bg-mainBlue'>Enviar Mensaje</button>
            </div>
            
        </form>
    )
}

export default Form