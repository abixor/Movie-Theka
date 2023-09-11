import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Style.css'



const MoviesCard = (props) => {

    const { title, year, type, img, value } = props
    return (
        <div className='container-fluid mt-5 text-center d-flex justify-content-around' style={{ cursor: 'pointer' }}>

            <Card style={{ width: '18rem' }} className='border border-3 border-dark '>
                <Card.Img style={{ height: '400px' }} variant="top" src={img} className='highlight' />
                {/* <Card.Body style={{ height: '200px' }}>
                    <Card.Title>{title} '{year}'</Card.Title>
                    <Card.Text>
                        {type}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body> */}
            </Card>





        </div>
    );
}



export default MoviesCard
