import mongoose from "mongoose";
//schema
const userSchema = mongoose.Schema({
   userName: String,
   email: {
    type: String,
    required: true,
    unique : true
   },
   password: String,
   wishList: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book'
   }]



})
//model
const User= mongoose.model("User",userSchema)

export default User;