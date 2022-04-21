import { Dialog } from "@material-ui/core";
import { Button, CloseButton, Modal } from "react-bootstrap";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { BOOK_HOTEL } from "../../grapgql/Mutations";
export const Book = ({ hotel={}, show=false, onClose}) => {
    const [checkIn,setCheckIn] = useState();
    const [checkOut,setCheckOut] = useState();
    const [guests,setGuests] = useState();
    const [bookHotel,{error}] = useMutation(BOOK_HOTEL);
    const handleBook = () => {
        bookHotel({
            variables:{
                hotelName:hotel.name,
                ...hotel,
                checkIn,
                checkOut,
                guests:+guests
            }
        }).then(res=>{
            onClose()
            setCheckIn();
            setCheckOut();
            setGuests();
        });
    }
    return (
            <Dialog maxWidth="sm" fullWidth modal={false} open={show} onClose={onClose}>
                <div className="row p-3">
                    <div className="d-flex flex-row-reverse justify-content-between">
                        <CloseButton className="btn-sm" onClick={onClose}/>
                        <h6>{hotel.name}</h6>
                    </div>
                    <div className="row align-items-end mb-2">
                        <div className="form-group d-flex flex-column col-5">
                            <label>CheckIn</label>
                            <input className="form-control" value={checkIn} onChange={e=>setCheckIn(e.target.value)} type='date' min={new Date().toISOString().split('T')[0]} />
                        </div>
                        <span className="col-2 text-center">To</span>
                        <div className="form-group d-flex flex-column col-5">
                            <label>CheckOut</label>
                            <input className="form-control" value={checkOut} onChange={e=>setCheckOut(e.target.value)} type='date' min={new Date().toISOString().split('T')[0]} />
                        </div>
                    </div>
                    <div className="form-group d-flex flex-column col-6">
                        <label>No. of Guests</label>
                        <input className="form-control" value={guests} onChange={e=>setGuests(e.target.value)} type="number" min="1"/>
                    </div>
                </div>
                <div className="btn-group">
                    <Button variant="secondary" className="col-2 m-2 btn-sm" onClick={onClose}>Cancel</Button>
                    <Button variant="primary" className="col-2 m-2 btn-sm" onClick={handleBook}>Confirm</Button>
                </div>
            </Dialog>
    );
}