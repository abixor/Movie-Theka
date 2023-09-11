import React from 'react'
import { NavLink } from 'react-router-dom'


const SignIn = () => {

    return (
        <div className='signIn' >
            <h3 className='shadow p-2 bg-danger text-white fw-bolder w-50 m-auto mt-5'>WELCOME BACK</h3>
            <form className='form-group'>
                <div className='border border-0  m-auto mt-5 text-center '>
                    <input type='email' placeholder='Email address' className='border-0 border-bottom border-dark w-25 py-2 m-2' /><br />
                    <input type='text' placeholder='Password' className='border-0 border-bottom border-dark w-25 py-2 mt-2' />
                </div>
            </form>
            <button className='px-2 bg-danger text-white fw-bolder mt-4 border-0 p-1'><NavLink to='/' className='text-decoration-none text-white'>Sign In</NavLink></button><br />
            <p className='mt-4'>Don't have an account yet? <NavLink to='/SignUp' className='text-decoration-none text-dark fw-bolder'>Sign Up</NavLink></p>
        </div >
    )

}
export default SignIn
