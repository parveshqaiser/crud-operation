

const express = require("express");
const app = express();
const cors = require("cors");
const {dbConnection} = require("../backend/src/database/db");
const userRouter= require("./src/routes/routes");

app.use(express.json());

app.use(cors({
    origin : ["http://localhost:1234","http://localhost:63023"],
    credentials : true
}))


app.get("/home", (req, res)=>{
    res.status(200).json({message : "Welcome to Hello world", success : true})
})

app.use("/", userRouter);

dbConnection().then(()=>{
    console.log("DB connected");

    app.listen(6060,()=>{
        console.log("Server running at http://127.0.0.1:6060");
    })
}).catch((err)=>{
    console.log("Error in connecting DB");
})

