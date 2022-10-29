const mongoose=require("mongoose")
const unival=require("mongoose-unique-validator")
const validator=require("validator")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcryptjs")


const scm=new mongoose.Schema({
    fname:{
        type:String,
        required:true,
        minlength:[3,"minimum length is 3"],
        maxlength:[25,"maximum length is 25"],

    },
    lname:{
        type:String,
        required:true,
        minlength:[3,"minimum length is 3"],
        maxlength:[25,"maximum length is 25"],

    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(val) {
            if (!validator.isEmail(val)) {
                throw new Error("email is not valid");
            }
        }
        
    },
    pass: {
        type: String,
        required: true,
        minlength:3
        
    },
    cpass:{
        type: String

    },
    date: {
        type: String,
        default: new Date().toLocaleString()
    },
    hno: {
        type: String
    },
    area: {
        type: String
    },
    pin: {
        type: String
    },
    cod: {
        type: String
    },
    city: {
        type: String
    }
})
scm.plugin(unival)

scm.pre("save",async function(next){
    try {
        if(this.isModified("pass"))
        {
            this.pass=await bcrypt.hash(this.pass,10)
            next();
        }
    } catch (error) {
        console.log(`password hashing err`+error);
    }
})

scm.methods.gentoken=async function(){
    try {
        const token=jwt.sign({_id:this._id},"%$^&%&*^&*HJjhgjgsdjmdsbgmvdfvbjb3489875364765454W$&%UI^&%^%$#$#$%UI&^")
        return token;
    } catch (error) {
        
        console.log(`json token genrate err`+error);
    }
}
const upmodel=new mongoose.model("signup",scm)

module.exports=upmodel;