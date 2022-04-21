import { GraphQLID, GraphQLInt, GraphQLString } from 'graphql'
import { Bookings } from '../../entities/bookings';
import { BookingType } from '../typedefs/bookings';

export const BOOK_HOTEL = {
    type: BookingType,
    args:{
        hotelName: {type:GraphQLString},
        checkIn: {type:GraphQLString},
        checkOut: {type:GraphQLString},
        city: {type:GraphQLString},
        price: {type:GraphQLInt},
        guests: {type: GraphQLInt},
    },
    async resolve(parent: any, args: any) {
        await Bookings.insert({...args})
        return args;
    }
}

export const CANCELLED_BOOKING = {
    type: BookingType,
    args:{
        id: {type:GraphQLID},
    },
    async resolve(parent: any, args: any) {
        const {id} = args;
        await Bookings.delete(id);
        return id;
    }
}

export const UPDATE_BOOKING = {
    type: BookingType,
    args:{
        id: {type:GraphQLID},
        checkIn: {type:GraphQLString},
        checkOut: {type:GraphQLString},
    },
    async resolve(parent: any, args: any) {
        const {checkIn, checkOut,id} = args;
        await Bookings.update(id, {checkIn,checkOut});
        return 'data updated';
    }
}