const express = require("express")
const User = require("../Schema/UserSchema.js")

const router = express()

router.post("/signup",async (req,res) => {
    const {username,email,password} = req.body
    const newUser = new User({
        "username":username,
        "email":email,
        "password":password
    })
    await newUser.save()
    res.json({
        "message":"Signedup"
    })
})

router.post("/signin",async (req,res) => {
    const {email,password} = req.body
    console.log(email,password)
    const UserIn = await User.find({
        "email":email
    })
    console.log(UserIn);
    if (UserIn.length == 0){
        res.json({
            "message":"Invalid email"
        })
    }
    if (UserIn[0].password == password) {
        res.json({
            "message":"Signedin"
        })
    } else {
        res.json({
            "message":"Invalid Password"
        })
    }
})

router.post("/profile",async (req,res) => {
    const {email} = req.body
    const profile = await User.find({
        "email":email

    })
    res.json({
        "profile":profile[0]
    })
})

router.post("/profile/edit",async (req,res) => {
    const {email,username,profilepic,password} = req.body
    const EditedProfile =  await User.findOneAndUpdate({
        "email":email
    },{
        "username":username,
        "profilepic":profilepic,
        "password":password
    })
    res.json({
        "message":"Profile Updated Successfully"
    })
})
module.exports = router

