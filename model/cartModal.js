const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: String,
    product: Object,
    qty: Number
})

module.exports = mongoose.model('cart', cartSchema, 'cart');