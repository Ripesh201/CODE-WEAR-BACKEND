const cors=require("cors")

const express=require("express")
const app=express()
require("./db/conn")
app.use(cors({origin:"http://localhost:3000",credentials:true}))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/auth",require("./routes/auth"))
app.use("/details",require("./routes/getdetails"))

app.use('/addToCart', require('./routes/addToCart'))
app.use('/getCart', require('./routes/getCartDetails'))
app.use('/increaseQty', require('./routes/increaseQty'))
app.use('/decreaseQty', require('./routes/decreaseQty'))
app.use('/cartTotal', require('./routes/cartTotal'))
app.use('/clearCart', require('./routes/clearCart'))
app.use('/removeFromCart', require('./routes/removeFromCart'))
app.use("/yourorder",require('./Routes/yourorder'))


const port=5000 
app.listen(port,()=>{
    console.log(`server start at ${port}`)
})