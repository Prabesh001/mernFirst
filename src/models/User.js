import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({

    userName: {
        type: String,
    },
    email: {
        type : String,
        unique: true,
        required: true
    },

    password : {
        type : String,
        required: true
    },
    phone : {
        type : Number,
    },
    role:{
        type : String,
        anum : ['ADMIN','EMPLOYEE', 'CUSTOMER'],
        default: 'CUSTOMER'
    }
},{
        timestamps: true
    }

)

export default mongoose.model('User', userSchema)