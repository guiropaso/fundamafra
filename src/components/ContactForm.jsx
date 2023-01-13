import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

const initialValues = {
    name: '',
    email: '',
    tel: '',
    mensaje: ''
}

const onSubmit = values => console.log(values)

const phoneRegExp = /^\+?[1-9][0-9]{7,14}$/

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    tel: Yup.string().matches(phoneRegExp,'Ingrese un número telefónico válido'),
    mensaje: Yup.string().required('Required')
})

function ContactForm() {

    return (
        <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        >
            <Form className='bg-gray-50 border-2 border-slate-300 p-10 rounded-lg' action="">
                <div className='flex flex-col'>
                    <label htmlFor="name" className='font-bold'>Nombre</label>
                    <Field
                        className='border-2 px-4 w-full border-slate-300 mx-auto focus:outline-royal rounded-md py-2 mt-2'
                        type="text"
                        id='name'
                        name='name'
                    />
                    <ErrorMessage name='name'/>
                    <label htmlFor="tel" className='font-bold mt-5'>Teléfono</label>
                    <Field
                        className='border-2 px-4 w-full border-slate-300 mx-auto focus:outline-royal rounded-md py-2 mt-2'
                        type="text"
                        id='tel'
                        name='tel'
                        />
                    <ErrorMessage name='tel'/>
                    <label htmlFor="email" className='font-bold mt-5'>Email</label>
                    <Field
                        className='border-2 px-4 w-full border-slate-300 mx-auto focus:outline-royal rounded-md py-2 mt-2'
                        type="text"
                        id='email'
                        name='email'
                        />
                    <ErrorMessage name='email'/>
                    <label htmlFor="mensaje" className='font-bold mt-5'>Mensaje</label>
                    <Field as='textarea'
                        className='border-2 border-slate-300 focus:outline-royal rounded-md py-2 px-4 mt-2'
                        name="mensaje"
                        id="mensaje"
                        cols="30"
                        rows="5">
                    </Field>
                    <ErrorMessage name='mensaje'/>
                    <button type='submit' className='bg-royal p-5 rounded-lg text-white font-bold mt-10 hover:bg-mainBlue'>Enviar Mensaje</button>
                </div>  
            </Form>
        </Formik>
    )
}

export default ContactForm