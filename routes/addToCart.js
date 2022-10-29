const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const Cart = require("../model/cartModal");

router.use(bodyParser.json());

router.post("/", async (req, res) => {
  console.log(req.body);
  const cart = new Cart({
    userId: req.body.userId,
    product: req.body.product,
    qty: req.body.qty,
  });
  cart
    .save()
    .then((product) => {
      res.status(200).json({
        status: true,
        msg: "Product added...!",
        data: product,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(401).json({
        status: false,
        msg: "Something went wrong, Try again...",
        data: error,
      });
    });
});



module.exports = router;
