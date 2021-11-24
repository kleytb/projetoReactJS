import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    imagem: {type: String, required: true},
    marca: {type: String, required: true},
    categoria: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    countInStock: {type: Number, required: true},
    rating: {type: Number, required: true},
    numReviews: {type: Number, required: true},
}, {
    timestamps: true
    }
);

const Product = mongoose.model('Product', productSchema);

export default Product;