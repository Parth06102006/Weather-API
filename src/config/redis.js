import Redis from "ioredis";
import dotenv from 'dotenv'
dotenv.config(
    {
        path:'./.env'
    }
)

const  client = new Redis({
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
    password:process.env.password,
});


client.on("connect",()=>{console.log('Redis connected successfully')})
client.on("error",(error)=>{console.log('Error in conneccting Redis',error)})



// export {client}
// import { createClient } from 'redis';

// const client = createClient({
//     username: 'default',
//     password: 'LSD2j6YdLEgBxApzMvUBbqOj0F4xxEtA',
//     socket: {
//         host: 'redis-16718.c305.ap-south-1-1.ec2.redns.redis-cloud.com',
//         port: 16718
//     }
// });

// client.on('error', err => console.log('Redis Client Error', err));

// await client.connect();

// await client.set('foo', 'bar');
// const result = await client.get('foo');
// console.log(result)  // >>> bar

export {client}