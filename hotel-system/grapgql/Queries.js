import {gql} from '@apollo/client';

export const GET_ALL_HOTELS = gql`
    query getAllHotels {
        getAllHotels {
            id
            name
            image
            price
            city
            wifi
            coffee
        }
    }
`;

export const FILTER_HOTELS = gql`
    query filterHotels(
        $city: String!
        $prices: [Int!]!
    ) {
        filterHotels(
            city: $city,
            prices: $prices
        ){
            id
            name
            image
            price
            city
            wifi
            coffee
        }
    }
`;

export const GET_ALL_BOOKINGS = gql`
    query getAllBookings{
        getAllBookings{
            hotelName
            checkIn
            checkOut
            price
            guests
            id
            city
        }
    }
`