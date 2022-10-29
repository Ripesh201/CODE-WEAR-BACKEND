const express = require('express');
const router = express.Router();
const Cart = require('../model/cartModal');

router.get('/:id', async (req, res) => {
    const products = await Cart.find({ userId: req.params.id })

    let totalItems = 0;
    let totalRate = 0;

    products.map((product) => {
        for (let i = 0; i < product.qty; i++) {
            totalItems = totalItems + 1;
            totalRate = totalRate + product.product.price;
        }
    })
    res.status(200).json({
        status: true,
        msg: "Cart details...",
        data: {
            totalItems,
            totalRate,
        }
    })
})

module.exports = router;