

const express = require("express");
const { userSchema } = require("../model/userSchema");

const router = express.Router();

router.get("/getUsers",async (req, res)=>{

    try {
        let page = req.query.page || 1;
        let limit = req.query.limit || 5;

        // console.log("*** ", page, limit);
        let skip = (page -1) * limit;
        limit = limit> 5 ? 5 : limit;

        let itemsCount = await userSchema.find({});
        let allUsers = await userSchema.find({}).skip(skip).limit(limit);

        if(allUsers.length == []){
            return res.status(200).json({message : "Empty List", success : true, data : []})
        }

        res.status(200).json({data : allUsers, success : true  , itemsCount : itemsCount.length || 0})
    } catch (error) {
        console.log("*** ", error)
    }

});

router.post("/createUser", async(req, res)=>{

    try {
        let {name,age, profession , state, city} = req.body;

        if(!name || !age  || !profession || !state || !city){
            return res.status(400).json({message : "Please Enter All Fields", success:false});
        }

        let createUser = await userSchema.create({
            name : name,
            age : age,
            profession : profession,
            state : state,
            city : city,
        });

        if(!createUser){
           return res.status(400).json({message : "Some issue occurred", success:false});
        }
        if(createUser){
            res.status(201).json({message : "User Inserted", success:true});
        }

    } catch (error) {
        console.log("error in creating user ", error)
    }
});

router.patch("/updateUser", async(req, res)=>{

    try {
        let {name,age, profession , state, city, id} = req.body;

        let findUser = await userSchema.findByIdAndUpdate(id, req.body, {returnDocument:"after"});

        // console.log("findUser", findUser);

        if(!findUser){
            return res.status(404).json({message : "User Not Found", success : false});
        }

        // Object.keys(req.body).forEach(val => findUser[val] == req.body[val]);
        // findUser.name = name;
        // findUser.age = age;

        // await findUser.save();

        res.status(200).json({message : "User Updated", success : true});

    } catch (error) {
        console.log("error in updating user ", error)
    }
});

router.delete("/delete/:id", async(req, res)=>{
    let id = req.params.id;

    try {
        if(id !== undefined){
            let delUser = await userSchema.findByIdAndDelete(id);

            res.status(200).json({message : `User Deleted`, success: true, delUser});
        }else {
            res.status(400).json({message : "Some issues in deleting", success : false});
        }
       
    } catch (error) {
        console.log("error in deleting user ", error)
    }
});

module.exports = router;