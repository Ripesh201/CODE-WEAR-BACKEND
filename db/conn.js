const { default: mongoose } = require("mongoose");
const mngoose =require("mongoose")

const conn=async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/codewear")
        console.log("connection done.!");
    } catch (e) {
        console.log(`connection err ${e.message}`);        
    }
}

conn()