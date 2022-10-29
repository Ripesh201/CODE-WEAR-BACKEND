const express = require('express');
const router = express.Router();
const Cart = require('../model/cartModal');

router.get('/:id', async (req, res) => {

    await Cart.remove({userId: req.params.id})
        .then((result) => {
            res.status(200).json({
                status: true,
                msg: "Cart cleared...!",
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