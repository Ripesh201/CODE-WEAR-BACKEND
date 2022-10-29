const express = require("express")
const router = new express.Router()
const upmodel=require("../model/upmodel")
const validuser=require("../Middleware/validuser")
router.post("/", validuser, async (req, res) => {
    try {
        if (req.body.cod === ""||req.body.city===""||req.body.hno===""||req.body.area===""||req.body.pin==="") {
            res.status(400).json("All Fields Are Required")
        } else {
            
                updateddata=await upmodel.updateOne({ _id: req.id }, { $set: { hno: req.body.hno, area: req.body.area, pin: req.body.pin, city: req.body.city,cod:req.body.cod } }, { new: true })

                // await cartmodel.deleteMany({ userid: req.id })
                // res.status(201).json(orderdata)
                res.status(200).json(updateddata)


            
        }
    } catch (e) {
        res.status(400).json(`${e}`)
    }
})



module.exports = router;