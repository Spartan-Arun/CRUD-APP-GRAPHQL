import {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLNonNull} from 'graphql';

export const HotelType = new GraphQLObjectType({
    name: "Hotel",
    fields:()=>({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        image: {type: GraphQLString},
        city: {type: GraphQLString},
        wifi: {type: GraphQLInt},
        coffee: {type: GraphQLInt},
        price:{type: GraphQLInt},
    })
});