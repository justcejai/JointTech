const User = require("../models/user")
const express = require('express');
const router = express.Router();
const passport = require('passport');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { loginValidation, signupValidation } = require("../validation")

function verifyJWT(req, res, next) {
    const token = req.headers["x-access-token"]?.split(' ')[1]

    if(token) {
        jwt.verify(token, process.env.PassportSecret, (err, decoded) => {
            if(err) {
                return res.json({
                    isLoggedIn: false,
                    message: "Failed to authenticate"
                })
            }
            res.user = {}
            req.user.id = decoded.id
            req.user.username = decoded.username
            next()
        })
    } else {
        res.json({message: "Incorrect Token Given", isLoggedIn: false})
    }
}

// router.get("/getUserinfo", verifyJWT, (req,res) => {
//     res.json({isLoggedIn: true, username: req.user.username})
// })

// Route for registering the use to the database.
router.post('/signup', async (req,res) => {
    const user = req.body
    console.log(user)
    const retrievedUsername = await User.findOne({ username: user.username })
    const retrievedEmail = await User.findOne({email: user.email})
    const errorValidating = signupValidation(user)

    if ( errorValidating ) {
        return res.json({message: "Error validating user info."})
    } else 
    if ( retrievedUsername || retrievedEmail ) {
        return res.json({message: "Username or Email already exists"})
    } else {
        user.password = await bcrypt.hash(req.body.password, 10)

        const databaseUser = new User({
            name: user.name,
            username: user.username,
            email: user.email,
            password: user.password
        })

        databaseUser.save()
        res.json({message:"Success"})
    }
});

// router.post("/login", (req,res) => {
//     const userLoginInfo = req.body;
    
//     User.findOne({username: userLoginInfo.username})
//     .then(databaseUser => {
//         if (!databaseUser) {
//             return res.json({
//                 message: "Invalid username or password"
//             })
//         } 
//         bcrypt.compare(userLoginInfo.password, databaseUser.password)
//         .then(matchPassword => {
//             if (matchPassword) {
//                 const payLoad = {
//                     id: databaseUser._id,
//                     username: databaseUser.username
//                 }
//                 jwt.sign(
//                     payLoad,
//                     process.env.PassportSecret,
//                     {expiresIn: 86400},
//                     (err, token) => {
//                         return res.json({
//                             message: "success",
//                             token: "Bearer" + token
//                         })
//                     }
//                 )
//             } else {
//                 return res.json({
//                     message: "Invalid username or password"
//                 })
//             }
//         })
//     })
// })


// router.get("/logout", verifyUser,(req,res) => {
    
// })

// router.get("/profile", verifyUser, (req,res) => {
//     res.send(req.user)
// })

module.exports = router;