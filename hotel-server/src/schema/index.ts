import { GraphQLObjectType, GraphQLSchema } from "graphql";
import {FILTER_HOTLES, GET_ALL_HOTELS} from './queries/hotels';
import {CREATE_HOTEL, DELETE_HOTEL} from './mutations/hotels';
import {BOOK_HOTEL, CANCELLED_BOOKING, UPDATE_BOOKING} from './mutations/bookings';
import { GET_ALL_BOOKINGS } from "./queries/bookins";

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields:{
        getAllHotels:GET_ALL_HOTELS,
        filterHotels: FILTER_HOTLES,
        getAllBookings: GET_ALL_BOOKINGS
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields:{
        createHotel: CREATE_HOTEL,
        bookHotel: BOOK_HOTEL,
        deleteHotel: DELETE_HOTEL,
        cancelBooking: CANCELLED_BOOKING,
        updateBooking: UPDATE_BOOKING
    }
});

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})