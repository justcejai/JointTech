const User = require("../models/user")
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require("jsonwebtoken")

const { getToken, CookieOptions, verifyUser, getRefreshToken } = require("../strategies/authenticate")

// Route for registering the use to the database.
router.post('/signup', (req,res,next) => {
    if (!req.body.fullName) {
        res.statusCode = 500
        res.send({
            name: "NameError",
            message: "Name Required",
        })
    } else {
        // Add the user to the database
        User.register( 
            new User({username: req.body.email}),
            req.body.password,
            (err, user) => {
                if(err) {
                    res.statusCode = 500
                    res.send(err)
                } else {
                    user.fullName = req.body.fullName
                    user.fullEmail = req.body.fullEmail
                    const token = getToken({ _id: user._id })
                    const refreshToken = getRefreshToken({_id: user._id})
                    user.refreshToken.push({refreshToken})
                    user.save(err,user => {
                        if(err) {
                            res.status(500).send({ message: "Invalid info."});
                        } else {
                            res.cookie("refreshToken", refreshToken, CookieOptions)
                            res.send({ success: true, token })
                        }
                    })
                }
            }
        )
    }
});

router.post("/login", passport.authenticate("local"), (req,res,next) => {
    const token = getToken({ _id: req.user._id})
    const refreshToken = getRefreshToken({_id: req.user._id})
    User.findById(req.user._id).then(user => {
            user.refreshToken.push({refreshToken})
            user.save((err,user) => {
                if(err) {
                    res.statusCode = 500
                    res.send(err)
                } else {
                    res.cookie("refreshToken", refreshToken, CookieOptions)
                    res.send({success: true, token})
                }
            })
        },
      err => next(err)
    )
})

router.post("/refreshToken", (req,res,next) => {
    const { signedCookies = {} } = req;
    const { refreshToken } = signedCookies

    if (refreshToken) {
        try {
            const payload = jwt.verift(refreshToken, process.env.RefreshSecret)
            const userId = payload._id
            User.findOne({_id: userId}).then(
                user => {
                    if(user) {
                        const tokenIndex = user.refreshToken.findIndex( 
                            item => item.refreshToken === refreshToken)

                        if (tokenIndex === -1) {
                            res.statusCode = 401
                            res.send("Unauthorized")
                        } else {
                            const token = getToken({_id: userId})
                            const newRefreshToken = getRefreshToken({ _id: userId})
                            user.refreshToken[tokenIndex] = { refreshToken: newRefreshToken }
                            user.save((err,user) => {
                                if(err) {
                                    res.statusCode = 500
                                    res.send(err)
                                } else {
                                    res.cookie("refreshToken", newRefreshToken, CookieOptions)
                                    res.send({ success: true, token})
                                }
                            })
                        }
                        
                    } else {
                        res.statusCode = 401
                        res.send("Unauthorized")
                    }
                },
                err => next(err)
            )   
            } catch (err) {
                res.statusCode = 401
                res.send("Unauthorized")
            }
        } else {
            res.statusCode = 401
            res.send("Unauthorized")
    }
})

router.get("/logout", verifyUser,(req,res,next) => {
    const { signedCookies = {} } = req
    const { refreshToken } = signedCookies
    User.findById(req.user._id).then(
        user => {
            const tokenIndex = user.refreshToken.findIndex(
                item => item.refreshToken === refreshToken
            )

            if (tokenIndex !== -1) {
                user.refreshToken.id(user.refreshToken[tokenIndex]._id).remove()
            }

            user.save((err,user) => {
                if(err) {
                    res.statusCode = 500
                    res.send(err)
                } else {
                    res.clearCookie("refreshToken", CookieOptions)
                    res.send({success: true})
                }
            })
        },
        err => next(err)
    )
})

router.get("/profile", verifyUser, (req,res,next) => {
    res.send(req.user)
})

module.exports = router;