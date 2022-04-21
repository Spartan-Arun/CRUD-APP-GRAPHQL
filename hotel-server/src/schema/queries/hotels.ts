import { GraphQLInt, GraphQLList, GraphQLString } from 'graphql'
import { Hotels } from '../../entities/hotels'
import {HotelType} from '../typedefs/hotels'

export const GET_ALL_HOTELS = {
    type: new GraphQLList(HotelType),
    resolve(){
        return Hotels.find();
    }
}

export const FILTER_HOTLES = {
    type: new GraphQLList(HotelType),
    args:{
        city: {type: GraphQLString},
        prices: {type: new GraphQLList(GraphQLInt)}
    },
    resolve(parent: any, args: any){
        const {city='', prices=[]} = args;
        return Hotels.find().then(hotels =>{
            let res = hotels
            if(city)
                res = res.filter(hotel =>hotel.city.toLocaleLowerCase() === city.toLocaleLowerCase());
            if(city)
                res = res.filter(hotel =>hotel.city.toLocaleLowerCase() === city.toLocaleLowerCase());
            if(prices.length>0)
                res = res.filter(hotel => hotel.price >= prices[0] && hotel.price <= prices[1])
            return res;
        });
    }
}