import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Style.css'



const Search = (props) => {

    const { input, handleSubmit, handleInput } = props



    return (
        <form className='position-relative' onSubmit={handleSubmit}>

            <input className=' m-2 border rounded bg-transparent text-white p-1' type='text' placeholder='Search...' value={input} onChange={handleInput} />
            <button type='search' className='border-0 bg-transparent mt-2 btn_s text-white' ><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </form>
    )
}

export default Search
