import {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt} from 'graphql';

export const BookingType = new GraphQLObjectType({
    name: "Booking",
    fields:()=>({
        id: {type: GraphQLID},
        hotelName: {type: GraphQLString},
        checkIn: {type: GraphQLString},
        checkOut: {type: GraphQLString},
        price: {type: GraphQLInt},
        city: {type: GraphQLString},
        guests: {type: GraphQLInt},
    })
});