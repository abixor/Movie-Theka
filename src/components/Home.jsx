import React from 'react'
// import { useNavigate } from 'react-router-dom'
import Api from './Api'
import './Style.css'


const Home = (props) => {
    const { search } = props
    // const navigate = useNavigate()
    return (
        <div>
            <h1 className='my-4 fw-bolder text-1'>WELCOME TO THE MOVIE THEKA</h1>
            <Api search={search} />
        </div>
    )
}

export default Home
