const { gql } = require("@apollo/client");

export const BOOK_HOTEL=gql`
    mutation bookHotel(
        $checkIn: String!
        $checkOut: String!
        $guests: Int!
        $city: String!
        $price: Int!
        $hotelName: String!
    ){
        bookHotel(
            checkIn:$checkIn
            checkOut:$checkOut
            guests:$guests
            city:$city
            price:$price
            hotelName:$hotelName
        ){
            id
        }
    }
`;

export const CANCEL_BOOKING = gql`
    mutation cancelBooking(
        $id: ID!
    ){
        cancelBooking(
            id:$id
        ){
            id
        }
    }
`;

export const UPDATE_BOOKING = gql`
    mutation updateBooking(
        $id: ID!
        $checkIn: String!
        $checkOut: String!
    ){
        updateBooking(
            id: $id
            checkIn: $checkIn
            checkOut: $checkOut
        ){
           id 
        }
    }
`;