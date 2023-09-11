import React from 'react'
import './Style.css'
import { useFormik } from 'formik';
import { SignUpValidation } from './Validation';
import { NavLink } from 'react-router-dom';


const SignUp = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            Confirm_Password: ''
        },
        validationSchema: SignUpValidation,
        onSubmit: (values) => {

            // console.log("values", values);
        },
    });



    return (
        <div className='signUp'>

            <h3 className='shadow w-50 m-auto bg-danger text-white fw-bolder my-5 p-2'>SIGN UP</h3>
            <form onSubmit={formik.handleSubmit} className='form-group w-50 m-auto ' style={{ marginTop: '!00px' }}>
                <div className='form-control border-0 '>

                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder='First Name'
                        className='border-0 border-bottom border-dark w-50 py-2'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                        <div className='text-danger'>{formik.errors.firstName}</div>
                    ) : null}
                </div>

                <div className='form-control border-0 '>

                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder='Last Name'
                        className='border-0 border-bottom border-dark w-50 py-2'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                        <div className='text-danger'>{formik.errors.lastName}</div>
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

                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder='Password'
                        className='border-0 border-bottom  border-dark w-50 py-2'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />

                    {formik.touched.password && formik.errors.password ? (
                        <div className='text-danger'>{formik.errors.password}</div>
                    ) : null}
                </div>

                <div className='form-control border-0 '>

                    <input
                        id="Confirm_Password"
                        name="Confirm_Password"
                        type="password"
                        className='border-0 border-bottom border-dark w-50 py-2'
                        placeholder='Confirm Password'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.Confirm_Password}
                    />

                    {formik.touched.Confirm_Password && formik.errors.Confirm_Password ? (
                        <div className='text-danger'>{formik.errors.Confirm_Password}</div>
                    ) : null}
                </div>
                <div>

                    <button type="submit" className='mt-4 mb-2 px-2 text-white bg-danger fw-bolder border-0 p-1'>Submit</button>
                </div>
                <p>Already a member? <NavLink to='/SignIn' className='text-dark fw-bolder text-decoration-none'>Log In</NavLink></p>
            </form>

        </div >
    )
}

export default SignUp
