import { GraphQLID, GraphQLInt, GraphQLString } from 'graphql'
import { Hotels } from '../../entities/hotels';
import {HotelType} from '../typedefs/hotels';

export const CREATE_HOTEL = {
    type: HotelType,
    args:{
        name: {type:GraphQLString},
        image: {type:GraphQLString},
        city: {type:GraphQLString},
        wifi: {type:GraphQLInt},
        coffee: {type:GraphQLInt},
        price:{type:GraphQLInt}
    },
    async resolve(parent: any, args: any) {
        await Hotels.insert({...args})
        return args;
    }
}

export const DELETE_HOTEL = {
    type: HotelType,
    args:{
        id: {type: GraphQLID},
    },
    async resolve(parent: any, args: any) {
        await Hotels.delete(args.id)
        return args;
    }
}