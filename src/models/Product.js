import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    productName:{
        type: String,
        required: true
    },
    productDescription:{
        type: String
    },
    price: {
        type: Number,
        required : true
    },
    stock:{
        type: Number,
        default: 0
    },
    ram :{
        type: Number
    },
    rom:{
        type: Number
    },
    display:{
        type: String
    },
    processor:{
        type: String
    },
    imageUrl:{
        type: String
    },
    featured : {
        type: Boolean,
        default: true
    },
    rating:{
        type: Number,
        default: 0
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    gen:{
        type: Number
    },
    brand:{
        type: String,
    },
    use:{
        type: String,
        enum: ["Gaming", "Professional", "Normal","Office"]
    }
},
{
    timestamps: true
}
)

const Product = mongoose.model("Product", productSchema)

export default Product;