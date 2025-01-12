
const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    profession : {
        type : String,
        required : true
    },
    state : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    }
},{timestamps: true});

let userSchema = mongoose.model("users", userModel);
module.exports = {userSchema};