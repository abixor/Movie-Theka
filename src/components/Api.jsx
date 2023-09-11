import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import MoviesCard from './Card'
import './Style.css'
import Spinner from './Spinner'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Popup from './Popup';
import Search from './Search';
const Api = (props) => {
    const { search } = props


    const [data, setData] = useState([])
    const [loader, setLoader] = useState(true)
    const [error, setError] = useState("")
    const [singledata, setSingledata] = useState('')
    const [show, setShow] = useState(false)

    const Getapi = async () => {

        const find = (props) => {
            const { Search } = props
        }

        const get = await fetch(`http://www.omdbapi.com/?s=${search === '' ? "wanted" : `${search}`}&apikey=${process.env.REACT_APP_SECRETKEY}`)
        const res = await get.json()
        if (res.Response === 'True') {
            setLoader(false)
            setData(res.Search)

        } else {
            console.log("res", res);
            setLoader(false)
            setError(res.Error)

        }

    }
    // console.log("error", error);
    // const Getapi = () => {
    //     axios.get(`${process.env.REACT_APP_BASEURL}/?s=gadar&apikey=${process.env.REACT_APP_SECRETKEY}`).then((res) => {
    //         console.log("res", res);
    //     }).catch((err) => {
    //         conso le.log(err);
    //     })
    // }
    useEffect(() => {
        AOS.init();
        Getapi()
    }, [search])

    const ClickToShow = (id) => {
        // console.log("iddddd", id)
        const match = data.find((e) => e.imdbID === id)
        setSingledata(match)
        setShow(true)

    }
    // console.log("sing", singledata);
    return (
        <div className={`container-fluid  ${loader ? 'container_move' : ''}`}>
            <div className={`container ${singledata === '' ? "" : "d-flex justify-content-around "} `} >
                <div className={`row d-flex justify-content-around align-items-center ${loader ? " " : "shadow-lg bg-light"}`}>


                    {loader ? <Spinner /> : data.length > 0 ? (data.map((e, id) => {

                        return (
                            <div className='col-md-4 my-3 ' key={id} data-aos="zoom-in-down" onClick={() => ClickToShow(e.imdbID)}>
                                <MoviesCard title={e.Title} year={e.Year} type={e.Type} img={e.Poster} value={"loop"} />
                            </div>
                        )

                    })) : (<h2 className='text-dark mt-5 fs-1'>{error}</h2>)}


                    {singledata === '' ? "" : <div >
                        {/* <MoviesCard  /> */}
                        <Popup show={show} setshow={setShow} title={singledata.Title} year={singledata.Year} type={singledata.Type} img={singledata.Poster} setSingledata={setSingledata} />
                    </div>}

                </div>

            </div>

        </div>
    )
}

export default Api
