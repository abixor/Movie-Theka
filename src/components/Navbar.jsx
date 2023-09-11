import React from 'react';
import { NavLink } from 'react-router-dom';
import './Style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClapperboard } from '@fortawesome/free-solid-svg-icons';
import Search from './Search';


const Navbar = (props) => {
    const { input, handleSubmit, handleInput } = props
    return (

        <nav className=' border-bottom border-dark bg-dark p-2'>
            <div className='d-flex justify-content-between'>
                <div>
                    <h3><NavLink to='/' className='text-dark text-decoration-none text-end text-white'><FontAwesomeIcon icon={faClapperboard} className='px-3 mt-2 text-white' />Movie Theka</NavLink></h3>
                </div>
                <div className='d-flex list-unstyled mt-2'>
                    <li className='link' ><NavLink to="/" className={'text-decoration-none text'}>Home</NavLink></li>
                    <li className='link'><NavLink to="/about" className={'text-decoration-none text'}>About</NavLink></li>
                    <li className='link'><NavLink to="/contact" className={'text-decoration-none text'}>Contact us</NavLink></li>

                </div>
                <div className='d-flex'>

                    <Search input={input} handleSubmit={handleSubmit} handleInput={handleInput} />
                    <button className='border-0 m-2 bg-danger fw-bolder'><NavLink to='/SignIn' className='text-white text-decoration-none'>SIGN IN</NavLink></button>
                </div>

            </div>
        </nav>
    )
};

export default Navbar;
