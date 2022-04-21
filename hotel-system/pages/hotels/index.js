import { Button, Card } from "react-bootstrap";

import {useQuery} from '@apollo/client'
import { FILTER_HOTELS } from "../../grapgql/Queries";
import { Slider } from "@material-ui/core";
import { useCallback, useState } from "react";
import { Book } from "./book";

const Hotels = () => {

    const [city,setCity] = useState('');

    const [prices,setPrices] = useState([2000,7000]);

    const [show,setShow] = useState(false);

    const [hotel,setHotel] = useState({});

    const handleChange = (event, newValue) => {
        setPrices(newValue);
    };

    const {data:hotels} = useQuery(FILTER_HOTELS,{variables:{city,prices}});

    const handleBook = hotel =>{
        setShow(true);
        setHotel(hotel);
    }

    const onClose = useCallback(()=>{
        setHotel({});
        setShow(false);
    },[setShow,setHotel])

    return (
        <div className="container">
            <div className="d-flex align-items-center justify-content-between mb-3">
                <label className="form-label mr-2">City:</label>
                <select className="form-select" onChange={e=>setCity(e.target.value)}>
                    <option default value="City" hidden/>
                    <option>Chennai</option>
                    <option>Bangalore</option>
                </select>
                <label htmlFor="customRange1" className="form-label mx-2 ">Price:</label>
                <Slider
                    value={prices}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    min={1000}
                    max={10000}
                />
            </div>
            <div className="d-flex">
                {
                    hotels?.filterHotels?.map(
                        (hotel,index) => (
                        <Card key={index} style={{ width: '18rem', marginRight:'2rem', marginBottom:'2rem' }}>
                            <Card.Img height="200" variant="top" src={hotel.image}/>
                            <Card.Body>
                                <Card.Title >{hotel.name}</Card.Title>
                                <Card.Text>
                                    <div className="d-flex align-items-center">
                                        <h6 className="m-0">Price</h6>: Rs.{hotel.price}/day
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <h6 className="m-0">City</h6>: {hotel.city}
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <label>Compliments</label>:
                                        {hotel.wifi && <span className="icon-connection m-0 mx-2"></span>}
                                        {hotel.coffee && <span className="icon-mug m-0 mx-2"></span>}
                                        <span className="icon-spoon-knife m-0 mx-2"></span>
                                    </div>
                                </Card.Text>
                                <Button variant="primary" onClick={()=>handleBook(hotel)}>Book</Button>
                            </Card.Body>
                        </Card>
                        )
                    )
                }
            </div>
            <Book hotel={hotel} show={show} onClose={onClose}/>
        </div>
    )
}

export default Hotels;