
const mongoose = require("mongoose");

async function dbConnection()
{
    await mongoose.connect("mongodb+srv://parveshqaiser:parvesh@cluster0.kv3ztw3.mongodb.net/CrudOperation")
}

module.exports= {dbConnection};