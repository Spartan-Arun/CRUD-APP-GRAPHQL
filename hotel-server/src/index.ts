import express from 'express';

import {graphqlHTTP} from 'express-graphql';

import cors from 'cors';

import {createConnection} from 'typeorm';

import {schema} from './schema';
import { Hotels } from './entities/hotels';
import { Bookings } from './entities/bookings';

const main =async () => {
    await createConnection({
        type:'mysql',
        database:'hotelDB',
        username: 'root',
        password: '',
        logging:true,
        synchronize:false,
        entities:[Hotels,Bookings],
    });

    const app = express();
    app.use(cors());
    app.use(express.json());

    app.use('/graphql',graphqlHTTP({
        schema,
        graphiql:true
    }));

    app.listen(3001,()=>console.log('server running on port 3001'))
}

main().catch(err => {console.log(err)})