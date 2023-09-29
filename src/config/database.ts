import mongoose from "mongoose";
import dotenv from 'dotenv';

// Se cargan las variables de entorno
dotenv.config();

let connection: any

const connect = async () => {
    if(connection) return

    const MONGO_URI = process.env.DATABASE_URL as string
    connection = mongoose.connection

    connection.once('open', ()=>{
        console.log('Connected to MongoDB')
    })

    connection.on('disconnected', ()=>{
        console.log('Disconnected from MongoDB')
    })

    connection.on('error', (error : any)=>{
        console.log('Error connecting to MongoDB', error)
    })

    await mongoose.connect(MONGO_URI)
}

export default connect