import { GraphQLList } from "graphql";
import { Bookings } from "../../entities/bookings";
import { BookingType } from "../typedefs/bookings";

export const GET_ALL_BOOKINGS = {
    type: new GraphQLList(BookingType),
    resolve(){
        return Bookings.find();
    }
}