import { useMutation, useQuery } from "@apollo/client"
import { Dialog } from "@material-ui/core";
import { useState } from "react";
import { Button, CloseButton } from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import { CANCEL_BOOKING, UPDATE_BOOKING } from "../../grapgql/Mutations";
import { GET_ALL_BOOKINGS } from "../../grapgql/Queries"

export const Bookings = () =>{
    const {data:bookings,} = useQuery(GET_ALL_BOOKINGS);
    const [booking,setBooking] = useState();
    const [show,setShow] = useState(false);
    const [checkIn,setCheckIn] = useState();
    const [checkOut,setCheckOut] = useState();
    const [cancleBooking] = useMutation(CANCEL_BOOKING,{
        refetchQueries:[
            GET_ALL_BOOKINGS,
            'getAllBookings'
        ]
    });
    const [updateBooking] = useMutation(UPDATE_BOOKING,{
        refetchQueries:[
            GET_ALL_BOOKINGS,
            'getAllBookings'
        ]
    });

    const handleEdit = booking => {
        setBooking(booking);
        setCheckOut(booking?.checkOut);
        setCheckIn(booking?.checkIn);
        setShow(true);
    }

    const handleUpdateBooking = () => {
        updateBooking({
            variables:{
                id: booking?.id,
                checkIn,
                checkOut
            }
        }).then(res=>{
            setCheckIn();
            setCheckOut();
            setShow(false);
            setBooking();
        });
    }

    const columns=[
        {dataField:'id',text:'Booking ID'},
        {dataField:'hotelName',text:'Hotel'},
        {dataField:'city',text:'City'},
        {dataField:'checkIn',text:'CheckIn Date'},
        {dataField:'checkOut',text:'CheckOut Date'},
        {formatter:(col,row)=><Button variant="link" onClick={()=>handleEdit(row)}>Edit</Button>},
        {formatter:(col,row)=><Button variant="primary" className="btn btn-danger" onClick={()=>cancleBooking({variables:{id:row.id}})}>Cancel</Button>}
    ];

    const onClose = () =>{
        setCheckIn();
        setCheckOut();
        setShow(false);
        setBooking();
    }

    return (
        <div className="container">
            <BootstrapTable stripped keyField='id' columns={columns} data={bookings?.getAllBookings??[]}/>
            <Dialog open={show} maxWidth="sm" fullWidth modal={false} onClose={onClose}>
               <div className="container">
                <div className="d-flex flex-row-reverse">
                        <CloseButton className="btn-sm" onClick={onClose}/>
                    </div>
                    <div className="form-group mb-2">
                        <label>CheckIn</label>
                        <input className="form-control" type="date" value={checkIn} onChange={e=>setCheckIn(e.target.value)}/>
                    </div>
                    <div className="form-group mb-2">
                        <label>CheckOut</label>
                        <input className="form-control" type="date" value={checkOut} onChange={e=>setCheckOut(e.target.value)}/>
                    </div>
                    <button className="btn btn-sm btn-primary m-2" onClick={handleUpdateBooking}>Save</button>
               </div>
            </Dialog>
        </div>
    )
}