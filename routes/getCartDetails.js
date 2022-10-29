const express = require('express');
const router = express.Router();
const Cart = require('../model/cartModal');

router.get('/:id', async (req, res) => {
    await Cart.find({ userId: req.params.id })
        .then((result) => {
            res.status(200).json({
                status: true,
                msg: "Product...",
                data: result
            })
        })
        .catch((err) => {
            console.log(err);
            res.status(401).json({
                status: false,
                msg: 'Something went wrong, Try again...',
                data: err
            })
        })
})

module.exports = router;