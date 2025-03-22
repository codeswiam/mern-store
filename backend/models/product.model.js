import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    price: {
        type: Number,
        required: true
    },
    image : {
        type: String,
        required: true
    }
}, {
    timestamps: true // so that the createdAt and updatedAt fields are present
});

// creation of the Product model
const Product = mongoose.model('Product', productSchema);

export default Product;