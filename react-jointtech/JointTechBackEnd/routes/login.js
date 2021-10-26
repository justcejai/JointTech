const express = require('express')
const router = express.Router()
const passport = require('passport')
// For encrypting the password 

// List of users
const users = []
const initiliaze = require('/Users/kaceyjohnson/JointTech/WEBAPPS-08/react-jointtech/JointTechBackEnd/passport-info')
initiliaze(
   passport, 
   email => users.find(user => user.email === email), 
   id => users.find(user => user.id === id)
)
 

//Endpoint for users to signup 
router.post('/login', passport.authenticate('local'), {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
})

module.exports = router