import React from 'react'
import './Style.css'


const Spinner = () => {

    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Spinner
