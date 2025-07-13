import mongoose from "mongoose"
import {adminSeeder} from "../seeders/adminSeeder.js"

const connectDb = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("db is connected succefully")
        
        adminSeeder()

    }catch(error){
        console.log(error.message)
    }

    
}

export default connectDb;