import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useFormik } from 'formik'
import { contactValidation } from './Validation'
// import Popup from './Popup';

import Swal from 'sweetalert2'




const Contact = () => {
    // 
    const formik = useFormik({
        initialValues: {
            Name: '',
            email: '',
            message: ''
        },
        validationSchema: contactValidation,
        onSubmit: (values) => {
            console.log("values", values);
            // setShow(true)
            Swal.fire(
                '',
                'Thanks for your Support! We will response you shortly',
                'success'
            )

        },
    });

    return (
        <div>

            <h3 className='shadow w-50 m-auto bg-danger text-white fw-bolder my-5 p-2'>CONTACT US</h3>
            <form onSubmit={formik.handleSubmit} className='form-group w-50 m-auto ' style={{ marginTop: '!00px' }}>
                <div className='form-control border-0 '>

                    <input
                        id="Name"
                        name="Name"
                        type="text"
                        placeholder='Name'
                        className='border-0 border-bottom border-dark w-50 py-2'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                    />
                    {formik.touched.Name && formik.errors.Name ? (
                        <div className='text-danger'>{formik.errors.Name}</div>
                    ) : null}

                </div>
                <div className='form-control border-0 '>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder='Email'
                        className='border-0 border-bottom  border-dark w-50 py-2'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div className='text-danger'>{formik.errors.email}</div>
                    ) : null}
                </div>
                <div className='form-control border-0 '>
                    <textarea
                        id="message"
                        name="message"
                        type="text"
                        placeholder='Enter your Queries....'
                        className='border-0 border-bottom  border-dark w-50 py-2'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.message}
                    />
                    {formik.touched.message && formik.errors.message ? (
                        <div className='text-danger'>{formik.errors.message}</div>
                    ) : null}
                </div>

                <button type="submit" className='px-2 bg-danger text-white fw-bolder mt-3'>Submit</button><br />

            </form>

        </div>

    );
};



export default Contact
